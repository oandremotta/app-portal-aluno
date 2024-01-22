import { Action } from "@ngrx/store";

export const SET_ALUNO = '[Aluno] SET Aluno';
export const GET_ALUNO = '[Aluno] GET Aluno';

export class SetAluno implements Action {
    readonly type = SET_ALUNO;
    constructor(public payload: any) { }
}

export class GetAluno implements Action {
    readonly type = GET_ALUNO;
    constructor(public payload: any = null) { }
}

export type AlunoActions = SetAluno | GetAluno;
