import { MovieService, SearchType } from '../services/home.service';
import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
/**
 * Page for searching for movies / TV shows.
 */
export class Tab1Page implements OnInit{
  results: Observable<any>;
  searchTerm: string = '';
  type: SearchType = SearchType.all;
 
  /**
   * Constructor.
   * 
   * @param movieService: for connecting to the service for the movie api
   */
  constructor(private movieService: MovieService){ }

  /**
   * Do nothing on init right now.
   */
  ngOnInit(){ }

  /**
   * Call API when something is typed in the search bar to display results.
   */
  searchChanged(){
    this.results = this.movieService.searchData(this.searchTerm, this.type);
  }
}
