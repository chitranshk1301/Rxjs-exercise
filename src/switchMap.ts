import { interval } from "rxjs";
import { switchMap } from "rxjs/operators";
import axios from 'axios'

const url = "https://dummyjson.com/products";
let id = 1;

function getData(id: number) {
    return axios.get(url + `/${id}`)
        .then(response => response.data)
        .catch(error => console.log(error))
}

const observable = interval(1000).pipe(
    switchMap(() => {
        console.log("Making HTTP request......");
        const data = getData(id)
        id++;
        return data;
    })
)

observable.subscribe((data) => (console.log("Recieved data: ", data)))
