import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
urlImg: string = "https://i.imgur.com/YRTMBji.jpg";

photo: string = `url('${this.urlImg}')`;

}
