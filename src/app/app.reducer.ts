import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUi from './shared/store/ui.reducer';
import * as fromAuth from './pages/autenticacao/auth.reducer';
import * as fromAluno from './shared/store/aluno.reducer';

export interface State {
  ui: fromUi.State;
  auth: fromAuth.State;
  aluno: fromAluno.State;
}


export const reducers: ActionReducerMap<State, any> = {
  ui: fromUi.uiReducer,
  auth: fromAuth.authReducer,
  aluno: fromAluno.AlunoReducer
};

export const getUiState = createFeatureSelector<fromUi.State>('ui');
export const getIsLoading = createSelector(getUiState, fromUi.getIsLoading);

export const getAuthState = createFeatureSelector<fromAuth.State>('auth');
export const getIsAuth = createSelector(getAuthState, fromAuth.getIsAuthenticated);

export const getAlunoState = createFeatureSelector<fromAluno.State>('aluno');
export const getAluno = createSelector(getAlunoState, fromAluno.getAluno);
