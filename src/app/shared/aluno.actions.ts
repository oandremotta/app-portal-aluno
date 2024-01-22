import { Action } from "@ngrx/store";

export const SET_ALUNO = '[Aluno] Start Loading';
export const GET_ALUNO = '[Aluno] Stop Loading';

export class StartLoading implements Action {
    readonly type = SET_ALUNO;
}

export class StopLoading implements Action {
    readonly type = GET_ALUNO;
}

export type AlunoActions = StartLoading | StopLoading;