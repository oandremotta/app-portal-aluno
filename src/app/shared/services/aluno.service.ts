import { Observable, Subject, of, share, tap } from "rxjs";
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
    private apiApp = environment.apiApp;

    private username = 'multfacil';
    private password = '1234mudar';
    credentials = btoa(`${this.username}:${this.password}`);

    public aluno: any;
    public _aluno: Subject<any> = new Subject<any>();

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'Authorization': `Basic bXVsdGZhY2lsOjEyMzRtdWRhcg==`,
            'user-agent': 'Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36'
        })
    };

    constructor(private http: HttpClient, private store: Store) { }

    aluno$: Observable<any> = this.http
        .get<any>(this.apiApp.concat('aluno'), this.httpOptions)
        .pipe(
            tap((aluno) => {
                this.aluno = aluno;
                this._aluno.next(aluno);
            }),
            share(),
        );

    getAluno(force = false): Observable<any> {
        if (!force && this.aluno) {
            return of(this.aluno);
        }
        this.aluno = null;
        return this.aluno$
    }
    clearAluno() {
        this.aluno = null;
    }
}
