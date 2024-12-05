import { interval } from "rxjs";
import { switchMap } from "rxjs/operators";
import axios from 'axios'

const url = "https://random-data-api.com/api/v2/users";

function getData() {
    return axios.get(url)
        .then(response => response.data)
        .catch(error => console.log(error))
}

const observable = interval(1000).pipe(
    switchMap(() => {
        console.log("Making HTTP request......");
        return getData();
    })
)

observable.subscribe((data) => (console.log("Recieved data: ", data)))