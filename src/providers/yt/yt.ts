import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
 
@Injectable()
/**
 * Provides the Youtube API.
 */
export class YtProvider{
  apiKey = 'AIzaSyDmZBK3VbOgZQcRbNu5szitlPKdxOVx1H8'; // My API key.
  
  /**
   * Constructor.
   * 
   * @param http: for http connection
   */
  constructor(public http: Http){ }
 
  /**
   * Search for a Youtube video.
   * 
   * @param search: what is being searched for
   */
  searchYoutube(search){
    var searchFormatted = search.split(' ').join('%20'); // Format the search to have plus instead of space.
    console.log(searchFormatted);
    return this.http.get('https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&q=' + searchFormatted + '&part=snippet&type=video&order=viewCount&maxResults=5')
    .pipe(map((res) => {
      return res.json()['items'];;
    }));
  }
}