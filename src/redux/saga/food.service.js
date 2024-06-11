import axios from "axios";
export function  getfoodListService(){
    let url = "http://localhost:3004/foods";
    return axios.get(url);
} 

export function getfoodItemservice(id) {
    let url = `http://localhost:3004/foods/${id}`;
    return axios.get(url);
}