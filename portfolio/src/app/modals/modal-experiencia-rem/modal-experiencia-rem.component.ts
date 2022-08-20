import { Component, OnInit, Input, Output } from '@angular/core';
import { Experiencia } from 'src/app/models/Experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-modal-experiencia-rem',
  templateUrl: './modal-experiencia-rem.component.html',
  styleUrls: ['./modal-experiencia-rem.component.css']
})
export class ModalExperienciaRemComponent implements OnInit {
  experiencia:Experiencia=null;

  constructor(private datosExperiencia:ExperienciaService, private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    const id=this.activatedRoute.snapshot.params['id'];
    this.datosExperiencia.detalle(id).subscribe(
      data=>{
        this.experiencia=data;
      }, err =>{
        alert("Error al borrar experiencia");
        this.router.navigate(['']);
      }
    )
  }

  onDelete(id?:number){
    if(id!=undefined){
      this.datosExperiencia.deleteExperiencia(id).subscribe(data=>{
      this.router.navigate(['']);
    }, err =>{
      alert("Error al borrar experiencia");
      this.router.navigate(['']);
    }
    )
  }
  }
  closeModal(){
    this.router.navigate(['']);
  }
   
  }
