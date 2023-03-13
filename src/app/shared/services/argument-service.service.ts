import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Port} from "../utils/Port";

@Injectable({
  providedIn: 'root'
})
export class ArgumentServiceService {

  constructor(private http: HttpClient) {
  }

  getArguments(numberOfArguments: number) {
    if (numberOfArguments < 1) {
      throw new Error('Number of arguments must be greater than 0');
    }

    return this.http.get(`http://localhost:${Port.getPort()}/arguments/list:${numberOfArguments}`);
  }
}
