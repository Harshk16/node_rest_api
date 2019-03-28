import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClientModule } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  url = "http://localhost:5000/api/data";

  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
}
