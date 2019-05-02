import { MovieService } from '../services/home.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListService } from '../services/home.service';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-tabOpen',
  templateUrl: 'tabOpen.page.html',
  styleUrls: ['tabOpen.page.scss'],
  providers: [LocalNotifications]
})
/**
 * Page for displaying the selected movie / TV show (referred to as 'item').
 */
export class TabOpenPage implements OnInit{
 
  information = null;
  public list = this.listService.getList();
 
  /**
   * Constructor.
   * 
   * @param localNotifications: for confirming an item was added to the watchlist
   * @param activatedRoute: for the movie API
   * @param movieService: for connecting to the service for the movie api
   * @param listService: for connecting to the service for the watchlist
   */
  constructor(private localNotifications: LocalNotifications, private activatedRoute: ActivatedRoute, private movieService: MovieService, public listService:ListService){ }

  /**
   * Get information from the movies database based on selected ID from tab1.
   */
  ngOnInit(){
    // Get the ID that was passed with the URL.
    let id = this.activatedRoute.snapshot.paramMap.get('id');
 
    // Get information from the API based on that ID.
    this.movieService.getDetails(id).subscribe(result => {
      this.information = result;
    });
  }

  /**
   * Open the website (if it exists) for a selected item.
   */
  openWebsite(){
    window.open(this.information.Website, '_blank');
  }

  /**
   * Add an item to the watchlist.
   * 
   * @param item: the item to be added
   */
  addToList(item){
    // Add item to list.
    this.list.push(item);
    
    // Display pop-up for 'added to watchlist' confirmation.
    this.localNotifications.schedule({
      id: 1,
      text: 'Added to Watchlist!'
    });
  }
}
