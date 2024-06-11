
import { all } from "redux-saga/effects";
import { getfoodItemWatcher, getfoodListWatcher } from "./food.watcher";

export function* rootSaga() {
    let array = [getfoodListWatcher(),getfoodItemWatcher()];
    yield all(array); 
    
}