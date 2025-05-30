import {
    Action,
    applyMiddleware,
    combineReducers,
    compose,
    createStore,
} from 'redux';
import {
    ThunkAction,
    ThunkDispatch,
    thunk as thunkMiddleware,
} from 'redux-thunk';
import { tasksReducer } from './tasks/tasksReducer';
import { authReducer } from './auth/authReducer';

const rootReducer = combineReducers({
    tasks: tasksReducer,
    auth: authReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunkMiddleware)),
);

export type AppDispatch = ThunkDispatch<AppState, unknown, Action>;

type Properties<T> = T extends { [key: string]: infer U } ? U : never;
export type InferActions<T extends { [key: string]: (...args: any[]) => any }> =
    ReturnType<Properties<T>>;

export type BaseThunk<AT extends Action, R = Promise<void>> = ThunkAction<
    R,
    AppState,
    unknown,
    AT
>;

export default store;
