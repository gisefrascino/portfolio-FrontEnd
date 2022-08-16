import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Educacion } from 'src/app/models/Educacion';
import { EducacionService } from 'src/app/services/educacion.service';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-educacion',
  templateUrl: './add-educacion.component.html',
  styleUrls: ['./add-educacion.component.css']
})
export class AddEducacionComponent implements OnInit {

  titulo:string="";
  institucion:string="";
  fecha_inicio:string="";
  fecha_fin:string="";

  //@Output() onAddM:EventEmitter<Educacion>=new EventEmitter();
  //@Input() educacion:Educacion=new Educacion("","","","");
  //showAddEducacion:boolean=false;
  //subscription?=Subscription;

  constructor(private router:Router, private datosEducacion:EducacionService, private modalUs:UiService) {
    /*this.subscription=this.uiService.onToggle().subscribe(value=>this.showAddEducacion=value)*/
   }

  ngOnInit(): void {
  }

  onCreate():void{
    const educacion=new Educacion(this.titulo, this.institucion, this.fecha_inicio, this.fecha_fin);
    this.datosEducacion.save(educacion).subscribe(data=>{
      alert("Educacion agregada");
      this.router.navigate(['']);
    }, err =>{
      alert("falló");
      this.router.navigate(['']);
    })
  }
  /*closeAdd(){
    this.modalUs.$modal.emit(false)
  }
  onAdd(educacion:Educacion){
    console.log("add-educacion")
    if (this.institucion.length===0){
      alert("Por favor ingrese institución");
      return
    }
    //const {id,institucion, titulo, periodo}=this
    //const newEducacion={id,institucion, titulo, periodo}

     this.onAddM.emit(educacion);
     this.modalUs.$modal.emit(false)
}*/

}
