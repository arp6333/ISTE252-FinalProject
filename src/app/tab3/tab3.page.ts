import { YtProvider } from './../../providers/yt/yt';
import { Component } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { Http } from '@angular/http';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
/**
 * Page for viewing Youtube search results.
 */
export class Tab3Page{
  videos: Observable<any[]>;
  private youtube;

  /**
   * Cosntructor
   * 
   * @param activatedRoute: for getting id from url parameters
   * @param ytProvider: using the Youtube search
   * @param plt: checking if on ios / android / something else
   */
  constructor(private activatedRoute: ActivatedRoute, private ytProvider: YtProvider, private plt: Platform){
    this.youtube = YoutubeVideoPlayer;
  }

  /**
   * Get video results on selected ID from tab2.
   */
  ngOnInit(){
    // Get the ID that was passed with the URL.
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.videos = this.ytProvider.searchYoutube(id);
    this.videos.subscribe(data => {
      console.log('videos: ', data);
    });
  }
  
  /**
   * Open a video into the video player, or a new page if on browser.
   * 
   * @param video: the selected video
   */
  openVideo(video){
    if(this.plt.is('ios') || this.plt.is('android')){
      this.youtube.openVideo(video);
    } 
    else{
      window.open('https://www.youtube.com/watch?v=' + video);
    }
  }
}
