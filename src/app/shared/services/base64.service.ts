import { Injectable } from "@angular/core";


@Injectable({
    providedIn: "root",
})
export class Base64Service {

    FATOR = 5;
    CRIPT = '';

    public encode(txt: string) {
        for (var i = 0; i <= this.FATOR; i++) {
            if (i === 0) {
                this.CRIPT = btoa(txt);
            } else {
                this.CRIPT = btoa(this.CRIPT);
            }
        }
        return this.CRIPT;
    }

    public decode(txt: string) {
        for (var i = 0; i <= this.FATOR; i++) {
            if (i === 0) {
                this.CRIPT = atob(txt);
            } else {
                this.CRIPT = atob(this.CRIPT);
            }
        }
        return this.CRIPT;
    }
}
