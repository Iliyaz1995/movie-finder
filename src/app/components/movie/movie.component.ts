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
  movieDetails:Array<object>;
  genres:Array<object>;

  constructor(private movieService:MovieService, private route:ActivatedRoute) { }
    getMovieDetails(){
       this.movieService.getMovieDetails(this.movieId).subscribe(res=>{
         console.log(res)
         this.movieDetails = res;
         this.genres = res.genres.map(function(a) {return a["name"];});

         console.log(this.genres)

       })
    }
  ngOnInit() {
    this.route.params.subscribe((params)=>{
      console.log(params.id);
      this.movieId = params.id;
      this.getMovieDetails()
    });
  }

}
