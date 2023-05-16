import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-img-desc',
  templateUrl: './img-desc.component.html',
  styleUrls: ['./img-desc.component.css']
})
export class ImgDescComponent {
  
@Input() imgDescDatos: any;



}
