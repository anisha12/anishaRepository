import { Injectable } from '@angular/core';
//import { URLSearchParams, Jsonp } from '@angular/http';
import { Http, Response, Headers, RequestOptions,URLSearchParams,Request, RequestMethod } from '@angular/http'
import {Observable} from 'rxjs/Rx';



@Injectable()
export class SearchService{

  /*constructor(private jsonp:Jsonp){}

  search(city:string){

    var search = new URLSearchParams();

    search.set('action', 'opensearch');
    search.set('search', city);
    search.set('format', 'json');
    return this.jsonp
      .get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', { search })
      .map((request) => request.json()[1]);

  }*/

  constructor(private http:Http){}

  search(city):Observable<string[]> {
    /*let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

     let options = new RequestOptions({
     headers: headers,
     search :new URLSearchParams('search',city)
     })

     var search = new URLSearchParams();

     search.set('action', 'opensearch');
     search.set('search', city);
     search.set('format', 'json');
     */


    let params:URLSearchParams = new URLSearchParams();
    params.set('city', city);


    let requestOptions = new RequestOptions();
    requestOptions.search = params;

    return this.http.get('http://localhost:3000/books', requestOptions)
      .map((response:Response) =>{
        response.json()[1];

      }).catch(this.handleError) ;
  }

  private handleError (error: Response | any) {
  console.error(error.message || error);
  return Observable.throw(error.message || error);
}

}
