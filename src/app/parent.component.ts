import 'rxjs/add/operator/map';
import { Component } from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http'
import { FormControl } from '@angular/forms';
import {SearchService}from './search.service';
import {Observable} from 'rxjs/Rx';




@Component({
  selector : 'parent',
  templateUrl : './parent.component.html'
})
export class ParentComponent {

  appid = "69bc9bb1bbaa496601358677ea57a017";
  forecast;
  //filteredList=[];

  city = new FormControl();
  items:Observable<Array<string>> ;


  //constructor(private http: Http) {}
  constructor(private searchService :SearchService,private http: Http) {}

  ngOnInit(){
    this.items = this.city.valueChanges
                  .debounceTime(400)
                  .distinctUntilChanged()
                  .switchMap(city =>this.searchService.search(city));
    console.log(this.items);

  }

  makeRequest() {
    /*this.http.get("http://api.openweathermap.org/data/2.5/weather?q=" + this.city + "&APPID=" + this.appid)
     .map((response: Response) => {
     return response.json();
     })
     .subscribe(data => {
     this.forecast = data.weather[0].description;
     })*/


    /*let params:URLSearchParams = new URLSearchParams();
     params.set('city', city);
     params.set('APPID',appid)

     let requestOptions = new RequestOptions();
     requestOptions.search = params;

     return this.http.get('http://api.openweathermap.org',requestOptions)
     .map((response:Response)=>{return response.json();})
     .subscribe(data=>{this.forecast = data.weather[0].description});
     }*/


    /*select(item){
     this.city = item ;
     }*/
  }

}
