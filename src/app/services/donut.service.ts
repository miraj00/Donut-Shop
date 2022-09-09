import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Donut, Result, Donuts } from '../interfaces/donut';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class DonutService {  
  constructor(private httpClient:HttpClient) { }

  // function to get list of donuts from apiEndpoint : 
  // here we are setting results as observable and subscribing this data in home-page component  
  getDonutList(): Observable<Result[]>{
    return this.httpClient.get<Donuts>(environment.apiEndpoint).pipe(
      map((data)=>data.results)
    );
  }

  // function to get detail list for donut from detailEndpoint : 
  getDonutDetail(id:string): Observable<Donut>{
    return this.httpClient.get<Donut>(environment.detailEndpoint(id));
  }
}