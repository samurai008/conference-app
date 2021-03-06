import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ConferenceHighlightsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-conference-highlights',
  templateUrl: 'conference-highlights.html',
})
export class ConferenceHighlightsPage {
  title;

  highlights = ['Eminent International and National Faculty', 
  'AILBS Oration : John Fung', 
  'State of the Art Lectures by Pioneers: Goran Klintmalm, Mohamed Rela, Abhinav Humar, Nancy Kwan MAN, Klaus Görlinger, Sanjeev Aneja',   
  'Workshops by : Minimally Invasive Liver Surgery: KW Lee, Olivier Soubrane, Vivek Vij | SALT Workshop on ROTEM: Klaus Görlinger and Piyush Srivastava',      
  'Symposium: DDLT in India - Current Status',
  'Documentary "Burden of Genius": Dr Starzl Journey into Organ Transplantation',
  'Transplant Oncology : An Envolving Concept',
  'Panel Discussion on Contentious Topics', 
  'HOTs in Liver Transplantation', 
  'Surgical Videos by Experts: How I Do It!'];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = navParams.get('title');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConferenceHighlightsPage');
  }

}
