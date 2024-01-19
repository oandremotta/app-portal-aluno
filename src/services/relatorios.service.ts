import { Observable } from "rxjs";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: "root",
})
export class EventosService {
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

    constructor(private http: HttpClient) { }

    public getRelatorioIndividual(ra: string): Observable<any> {
        const url = this.apiPhp.concat(`instrumento/relatorio-individual/ra/${ra}`);
        return this.http.get<any>(url, { ...this.httpOptions });
    }
}
