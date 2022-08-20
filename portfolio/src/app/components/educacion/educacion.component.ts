import { Component, OnInit, Input, Output } from '@angular/core';
import { Educacion } from 'src/app/models/Educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  isLogged=false
  @Input () educacion:Educacion=null;
 
  constructor( datosEducacion:EducacionService) { }

  ngOnInit(): void {}
    }
 