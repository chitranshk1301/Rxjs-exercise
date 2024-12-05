import { interval } from "rxjs";
import { mergeMap } from "rxjs/operators";
import axios from 'axios'

const url = "https://dummyjson.com/products";

function getData() {
    return axios.get(url)
        .then(response => response.data)
        .catch(error => console.log(error))
}

const observable = interval(1000).pipe(
    mergeMap(() => {
        console.log("Making HTTP request......");
        return getData();
    })
)

observable.subscribe((data) => (console.log("Recieved data: ", data)))
