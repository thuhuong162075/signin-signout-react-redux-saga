import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducer'
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

const configStore = (preloadedState = {}) => {
    const store = createStore(
        rootReducer,
        preloadedState,
        composeWithDevTools(
            applyMiddleware(sagaMiddleware)
        )
    );
    //run saga
    sagaMiddleware.run(rootSaga);
    const persistor = persistStore(store);
    return { persistor, store};
}
export default configStore;