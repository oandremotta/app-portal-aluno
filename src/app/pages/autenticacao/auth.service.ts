import { BehaviorSubject, EMPTY, Observable, shareReplay, tap } from "rxjs";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Injectable } from "@angular/core";
import { AuthData } from "src/app/pages/autenticacao/auth-data.model";
import { Store } from "@ngrx/store";
import * as fromRoot from '../../app.reducer';
import * as UI from '../../shared/store/ui.actions';
import { Router } from "@angular/router";
import { UIService } from "src/app/shared/store/ui.service";
import { Base64Service } from "src/app/shared/services/base64.service";
import { AlunoService } from "src/app/shared/services/aluno.service";
import { jwtDecode } from "jwt-decode";
import * as moment from "moment";

@Injectable({
    providedIn: "root",
})
export class AuthService {
    private apiPhp = environment.apiphp;
    private apiJava = environment.apiJava;
    // private currentUserSubject: BehaviorSubject<any>;
    // public currentUser: Observable<any>;

    private username = 'multfacil';
    private password = '1234mudar';
    credentials = btoa(`${this.username}:${this.password}`);

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'Authorization': `Basic bXVsdGZhY2lsOjEyMzRtdWRhcg==`,
            'user-agent': 'Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36'
        })
    };

    constructor(private router: Router,
        private http: HttpClient,
        private store: Store<fromRoot.State>,
        private uiService: UIService,
        private base64: Base64Service,
        private alunoService: AlunoService,
    ) { }

    initAuthListener() {

    }

    login(authData: AuthData) {
        this.store.dispatch(new UI.StartLoading());

        let data = {
            username: this.base64.encode(authData.username),
            password: this.base64.encode(authData.senha)
        };
        this.http.post(this.apiPhp.concat('auth/login'), data).subscribe(
            {
                next: (value) => {
                    if (((value as any).access_token)) {
                        this.setTokenSession((value as any).access_token);
                        this.alunoService.getAluno();
                        this.store.dispatch(new UI.StopLoading());
                        this.router.navigate(['tabs/tab1']);
                    } else {
                        this.store.dispatch(new UI.StopLoading());
                        this.uiService.presentToast('bottom', (value as any).message);
                    }
                },
                error: () => {
                    this.store.dispatch(new UI.StopLoading());
                    this.store.dispatch(new UI.StopLoading());
                    this.router.navigate(['/entrar']);
                }
            }
        );
    }

    get token(): any {
        return localStorage.getItem("token");
    }

    setTokenSession(token: string) {
        try {
            const payload = <JWTPayload>jwtDecode(token);
            const expiresAt = moment.unix(payload.exp);
            localStorage.setItem("token", "Bearer " + token);
            localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
            // valid token format
        } catch (error) {
            // invalid token format
            console.error("Token Inválido");
        }
    }

    get usuarioId(): any {
        const payload = <JWTPayload>jwtDecode(this.token);
        return this.isLoggedIn() && payload ? payload.userId : null;
    }

    refreshToken() {
        if (this.token && moment().isBetween(this.getExpiration().subtract(1, "days"), this.getExpiration())) {
            return this.http
                .post(this.apiJava.concat("refresh-token/"), { token: this.token })
                .pipe(
                    tap(
                        (response) => this.setSession(response),
                        (error) => console.error('Erro ao atualizar token:', error) // Adicione tratamento de erro
                    ),
                    shareReplay()
                );
        } else {
            return EMPTY; // ou throwError('Token não válido') se desejar retornar um erro
        }
    }
    getExpiration() {
        const expiration = localStorage.getItem("expires_at");

        if (expiration) {
            const expiresAt = JSON.parse(expiration);
            return moment(expiresAt);
        } else {
            // Trate o caso em que 'expiresAt' não está definido
            return moment(0);
        }
    }

    isLoggedIn(): boolean {
        return this.token && moment().isBefore(this.getExpiration());
    }

    isLoggedOut() {
        return !this.isLoggedIn();
    }

    private setSession(authResult: any) {
        const token = authResult.get("authorization");
        const payload = <JWTPayload>jwtDecode(token);
        const expiresAt = moment.unix(payload.exp);
        localStorage.setItem("token", token);
        localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
    }

}

interface JWTPayload {
    user_id: number;
    userId: string;
    username: string;
    exp: number;
}