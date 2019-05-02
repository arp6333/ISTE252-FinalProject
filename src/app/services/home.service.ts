import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root'
})
/**
 * Accesses the OMdbAPI movie database.
 */
export class MovieService {
  url = 'http://www.omdbapi.com/';
  apiKey = '906d3817'; // My API key.
 
  /**
   * Constructor.
   * @param http: standard Angular HttpClient for making requests
   */
  constructor(private http: HttpClient){ }
 
  /**
  * Get searched data from the API.
  * 
  * @param {string} title: title of searched movie / TV show
  * @param {SearchType} type: movie, series, or empty based on the searched title
  * @returns Observable: the search results
  */
  searchData(title: string, type: SearchType): Observable<any> {
    return this.http.get(`${this.url}?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`).pipe(
      map(results => results['Search'])
    );
  }
 
  /**
  * Get detailed information for the selected movie / TV show ID.
  * 
  * @param {string} id: ID of movie / TV show from IMdb
  * @returns Observable: the detailed information to display
  */
  getDetails(id){
    return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`);
  }
}

@Injectable({
  providedIn: 'root'
})
/**
 * Access the watchlist from any page.
 */
export class ListService{
  public list = []; // The watchlist.

  /**
   * Get the watchlist.
   * 
   * @returns list: the watchlist
   */
  public getList() {
      return this.list;
  }
}

/**
 * Typescript custom enum for search types.
 */
export enum SearchType{
  all = '',
  movie = 'movie',
  series = 'series'
}