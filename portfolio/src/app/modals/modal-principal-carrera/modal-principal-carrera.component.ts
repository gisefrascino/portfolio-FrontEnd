import { Component, OnInit, Input, Output } from '@angular/core';
import { Persona } from '../../models/Persona';
import { ActivatedRoute, Router } from '@angular/router';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-modal-principal-carrera',
  templateUrl: './modal-principal-carrera.component.html',
  styleUrls: ['./modal-principal-carrera.component.css']
})
export class ModalPrincipalCarreraComponent implements OnInit {
  @Input() title="";
 //personas:Persona[]=[];
  persona:Persona=null;



  constructor(private datosPortfolio:PortfolioService, private activatedRoute:ActivatedRoute, private router:Router) { }

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
    console.log("actualizar");
    console.log(this.persona);
    const id=this.activatedRoute.snapshot.params['id'];
    this.datosPortfolio.updatePersona(id,this.persona).subscribe(data=>{
      this.router.navigate(['']);
    }, err =>{
      alert("Error al actualizar carrera");
      this.router.navigate(['']);
    }
    )
  };

  closeModal(){
    this.router.navigate(['']);
  };
}

