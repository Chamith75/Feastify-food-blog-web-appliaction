import {takeLatest}  from "redux-saga/effects"
import { getfoodItemHandler, getfoodListHandler } from "./food.handler"
import { getfoodItemFromServer, getfoodListFromServer } from "../food.slice"
export function*  getfoodListWatcher(){
    yield takeLatest(getfoodListFromServer.type,getfoodListHandler)
} 

export function* getfoodItemWatcher(){
    yield takeLatest(getfoodItemFromServer.type,getfoodItemHandler)
}