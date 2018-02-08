import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movieId:string;
  movieDetails:Array<object> =[];
  genres:Array<object>;
  searchStr:string = '';
  searchList:Array<object>;

  constructor(private movieService:MovieService, private route:ActivatedRoute) { }
    getMovieDetails(){
       this.movieService.getMovieDetails(this.movieId).subscribe(res=>{
         // console.log(res)
         this.movieDetails = res;
         this.genres = res.genres.map(function(a) {return a["name"];});

         // console.log(this.genres)

       })
    }
    searchMovies(){
      // console.log(this.searchStr);
      if(this.searchStr !==''){
      this.movieService.searchMovies(this.searchStr).subscribe((res)=>{
        // console.log(res.results)
        this.searchList = res.results;
      })

    }
    }


   hideOnFocusOut(){
     setTimeout(()=>{
        this.searchStr = '';
     },700)
   }

  ngOnInit() {
    this.route.params.subscribe((params)=>{
      // console.log(params);
      this.movieId = params.id;
      this.getMovieDetails()
    });
  }


}
