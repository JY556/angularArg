import { Component, Input } from '@angular/core';
import { eduModel } from 'src/app/models/edu.model';
import { ImgDescModel } from 'src/app/models/img-desc.model';
import { EDUMODEL } from 'src/assets/files/mock-edu';
import { IMGDESC } from 'src/assets/files/mock-img-desc';
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {


@Input() title:string = "default";


 secciones:ImgDescModel[] = IMGDESC;
 seccionesEdu:eduModel[] = EDUMODEL

}
