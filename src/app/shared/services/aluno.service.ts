import { Observable } from "rxjs";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import * as fromRoot from '../../app.reducer';
import * as Aluno from "../store/aluno.actions";


@Injectable({
    providedIn: "root",
})
export class AlunoService {
    private apiPhp = environment.apiphp;

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

    constructor(private http: HttpClient, private store: Store) { }

    public setAluno() {
        const url = this.apiPhp.concat(`aluno/status`);
        this.http.get<any>(url, { ...this.httpOptions }).subscribe({
            next: (value) => {
                localStorage.setItem('aluno', JSON.stringify(value));
                this.store.dispatch(new Aluno.SetAluno(value));
            },
            error: (err) => {
                console.error('Erro ao obter dados do aluno:', err);
            }
        });
    }
}
