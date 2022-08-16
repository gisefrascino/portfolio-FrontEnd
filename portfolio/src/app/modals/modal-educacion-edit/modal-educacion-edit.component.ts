import { Component, OnInit, Input, Output} from '@angular/core';
import { UiService} from '../../services/ui.service';
import { Educacion } from '../../models/Educacion';
import { EventEmitter } from '@angular/core';
import { EducacionComponent } from 'src/app/components/educacion/educacion.component';
import { EducacionService } from 'src/app/services/educacion.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modal-educacion-edit',
  templateUrl: './modal-educacion-edit.component.html',
  styleUrls: ['./modal-educacion-edit.component.css']
})
export class ModalEducacionEditComponent implements OnInit {
  @Input() title="";
  educacion:Educacion=null;
  //@Output() onUpdateM:EventEmitter<Educacion>=new EventEmitter();


  constructor(private datosEducacion:EducacionService,private activatedRoute:ActivatedRoute, private router:Router,  private modalUs:UiService) { }

  ngOnInit(): void {
    const id=this.activatedRoute.snapshot.params['id'];
    this.datosEducacion.detalle(id).subscribe(
      data=>{
        this.educacion=data;
      }, err =>{
        alert("Error al actualizar educacion");
        this.router.navigate(['']);
      }
    )
      };

 /* closeModal(){
    this.modalUs.$modal.emit(false)
  }*/
  
  onUpdate():void {
    const id= this.activatedRoute.snapshot.params['id'];
    this.datosEducacion.updateEducacion(id, this.educacion).subscribe(
      data=>{
        this.router.navigate (['']);
     }, err=>{
      alert("Error al actualizar educacion");
      this.router.navigate (['']);
     }
    )
   // let id=localStorage.getItem("id")
    //this.onUpdateM.emit(educacion);
    //this.modalUs.$modal.emit(false)
  }
}





 