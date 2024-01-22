import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AlunoActions, SET_ALUNO, GET_ALUNO } from "./aluno.actions";

export interface State {
    aluno: any;
}

const initialState: State = {
    aluno: null
};

export function AlunoReducer(state = initialState, action: AlunoActions): State {
    switch (action.type) {
        case GET_ALUNO:
            return {
                ...state,
                aluno: null,
            };
        case SET_ALUNO:
            return {
                ...state,
                aluno: action.payload,
            };
        default:
            return state;
    }
}

export const getAlunoState = createFeatureSelector<any>('aluno');

export const getAluno = createSelector(getAlunoState, (state: any) => state.aluno);
