import { call, put } from "redux-saga/effects";
import { getfoodItemservice, getfoodListService } from "./food.service";
import { ongetfoodItem, ongetfoodList } from "../food.slice";

export function * getfoodListHandler() {
    let {data} = yield call(getfoodListService);
    yield put(ongetfoodList(data))
    
}

export function * getfoodItemHandler(action) {
    const { id } = action.payload;
    let {data} = yield call(getfoodItemservice,id);
    yield put(ongetfoodItem(data))
    
}