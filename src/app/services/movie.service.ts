import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'



@Injectable()
export class MovieService {

private searchStr;
private apiKey = 'e232e06cb289d4d8cca7b9029a65a706';
private popmoviesURL = 'https://api.themoviedb.org/3/discover/movie?api_key=e232e06cb289d4d8cca7b9029a65a706';
private recentMovieURL = 'https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2018-01-01&primary_release_date.lte=2018-02-05&sort_by=popularity.desc&api_key=e232e06cb289d4d8cca7b9029a65a706';
private genereURL = 'https://api.themoviedb.org/3/genre/movie/list?api_key=e232e06cb289d4d8cca7b9029a65a706&language=en-US';

  constructor(private http: Http) {}

// popular movies api call
 GetPopMovies(){
    return this.http.get(this.popmoviesURL).map(
      (res)=>  res.json()
   );
 };

 GetRecentMovie(){
   return this.http.get(this.recentMovieURL).map(
     (res)=>res.json()
   );
 };

 searchMovies(searchStr:string){

  return this.http.get('https://api.themoviedb.org/3/search/movie?query='+ encodeURI(searchStr)+'&sort_by=popularity.desc&api_key='+this.apiKey).map(
    (res)=>res.json()
  );
};

getGenere(){
  return this.http.get(this.genereURL).map(
    (res)=>res.json()
  );
}

getMovieDetails(id:string){
  return this.http.get('http://api.themoviedb.org/3/movie/'+id+'?api_key=e232e06cb289d4d8cca7b9029a65a706').map(
    (res)=>res.json()
  );
 }
}
