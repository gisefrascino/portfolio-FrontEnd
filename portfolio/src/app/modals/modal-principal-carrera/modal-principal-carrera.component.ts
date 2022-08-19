import { Component, OnInit, Input, Output } from '@angular/core';
import {UiService} from '../../services/ui.service';
import { Persona } from '../../models/Persona';
import { EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-modal-principal-carrera',
  templateUrl: './modal-principal-carrera.component.html',
  styleUrls: ['./modal-principal-carrera.component.css']
})
export class ModalPrincipalCarreraComponent implements OnInit {
  @Input() title="";
  persona:Persona=null;
  //@Input() persona:Persona=new Persona("","","","","","","","");
  //@Output() onUpdateM:EventEmitter<Persona>=new EventEmitter();


  constructor(private datosPortfolio:PortfolioService, private activatedRoute:ActivatedRoute, private router:Router,private modalUs:UiService) { }

  ngOnInit(): void {
    const id=this.activatedRoute.snapshot.params['id'];
    this.datosPortfolio.detalle(id).subscribe(
      data=>{
        this.persona=data;
      }, err =>{
        alert("Error al actualizar carrera");
        this.router.navigate(['']);
      }
    )
  };

  onUpdate():void{
    console.log("actualizar")
    const id=this.activatedRoute.snapshot.params['id'];
    this.datosPortfolio.updatePersonaCarrera(id,this.persona).subscribe(data=>{
      this.router.navigate(['']);
    }, err =>{
      alert("Error al actualizar carrera");
      this.router.navigate(['']);
    }
    )
  };

  closeModal(){
    this.router.navigate(['']);
    //this.modalUs.$modal.emit(false)
  };
}

