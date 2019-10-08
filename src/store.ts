import {applyMiddleware, createStore, Store} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer, {RootState} from './reducers';

const configureStore = (): Store<RootState> => {
    return createStore(
        rootReducer,
        composeWithDevTools(
            applyMiddleware(thunk)
        ),
    )
};

export default configureStore;
