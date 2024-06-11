import { configureStore } from "@reduxjs/toolkit";
import FoodSlice from "./food.slice";
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from "./saga/rootsaga";
const sagaMiddleware = createSagaMiddleware()



const Store = configureStore({
    reducer: {
        foods: FoodSlice.reducer,  // This should refer to the default export
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga)


export default Store;
