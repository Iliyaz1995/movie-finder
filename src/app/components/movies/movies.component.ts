import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service'



@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  popularList: Array<object>;
  searchStr:string = '';
  searchList:Array<object>;
  recentMovies:Array<object>;
  focus:boolean = false;

    constructor(private movieService:MovieService) {}
     getPopMovi(){
       this.movieService.GetPopMovies().subscribe(res => {
         // console.log(res.results)
         this.popularList = res.results;
       })
    }

    getRecentMovie(){
      this.movieService.GetRecentMovie().subscribe(res=>{
        // console.log(res.results)
        this.recentMovies = res.results;
      })
    }


    searchMovies(){
      // console.log(this.searchStr);
      if(this.searchStr !== ''){
      this.movieService.searchMovies(this.searchStr).subscribe((res)=>{
        // console.log(res.results)
        this.searchList = res.results;
      })
    }

    }


    showOnFocus(){
     // console.log('focus in')
     this.focus = true;
    }
    hideOnFocusOut(){
      this.focus = false;
      // console.log('focus out')
    }



  ngOnInit() {
    this.getPopMovi();
    this.getRecentMovie();
    }

}
