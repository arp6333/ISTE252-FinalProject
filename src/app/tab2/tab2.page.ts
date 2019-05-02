import { Component, NgZone } from '@angular/core';
import { YtProvider } from './../../providers/yt/yt';
import { NavController, AlertController} from '@ionic/angular';
import { Observable } from 'rxjs';
import { ListService } from '../services/home.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
/**
 * Page for viewing the watchlist.
 */
export class Tab2Page {

  /**
   * Constructor.
   * 
   * @param navCtrl: switch tabs
   * @param ytProvider: connect to YoutubeAPI
   * @param alertController: for manually adding an item 
   * @param listService: for obtaining the watchlist
   * @param _ngZone: optimize task for being asynchronous
   */
  constructor(public navCtrl: NavController, private ytProvider: YtProvider, private alertCtrl: AlertController, public listService:ListService, private _ngZone: NgZone){ }

  public list = this.listService.getList(); // The watchlist.

  /**
   * Return the watchlist.
   * 
   * @returns list: the watchlist
   */
  public getList(){
    return this.list;
  }

  /**
   * Delete an item from the list.
   * 
   * @param item: item to be deleted
   */
  async delete(item){
    const index: number = this.list.indexOf(item);
    if (index !== -1) {
        this.list.splice(index, 1);
    }  
  }

  /**
   * Manually add an item to the list.
   */
  async presentAddNewPrompt(){
    const addAlert = await this.alertCtrl.create(
      {
      header: 'Manual Add',
      message: 'Manually enter your item',
      inputs: [
        {
            type: 'text',
            name: 'newItem',
            placeholder: 'New Item'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, 
        {
          text: 'OK',
          handler: (inputData) => {
            let item;
            if(inputData.newItem){
              item = inputData.newItem.trim();
              if(item !== ''){
                  this._ngZone.run(() => {
                      this.list.push(item); // Add to list if everything is good to go.
                  });
              } 
              else{
                console.log('The input string is empty.');
              }
            } 
            else{
              console.log('The input string is not set.');
            }
            return item;
          }
        }
      ]
    });
    await addAlert.present();
  }
}
