import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router'
// import { MovieService } from '../../services/movie.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[]
})
export class AppComponent implements OnInit{
  constructor(private Route:ActivatedRoute) { }

  MoviePage:boolean = false;
  // isInMoviePage:boolean = false;

  clicked(){
    this.MoviePage =true;
    if(this.MoviePage === true){
      // console.log('in Home Page')
    }
  }

  ngOnInit() {
  }

}
