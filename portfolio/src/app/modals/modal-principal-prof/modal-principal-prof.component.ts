import { Component, OnInit, Input, Output } from '@angular/core';
import { Persona } from '../../models/Persona';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modal-principal-prof',
  templateUrl: './modal-principal-prof.component.html',
  styleUrls: ['./modal-principal-prof.component.css']
})
export class ModalPrincipalProfComponent implements OnInit {
  @Input() title="";
  persona:Persona=null;
  
  constructor(private datosPortfolio:PortfolioService, private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    const id=this.activatedRoute.snapshot.params['id'];
    this.datosPortfolio.detalle(id).subscribe(
      data=>{
        this.persona=data;
      }, err =>{
        alert("Error al actualizar informacion profesional");
        this.router.navigate(['']);
      }
    )
  };
  onUpdate():void{
    const id=this.activatedRoute.snapshot.params['id'];
    this.datosPortfolio.updatePersona(id,this.persona).subscribe(data=>{
      this.router.navigate(['']);
    }, err =>{
      alert("Error al actualizar informacion profesional");
      this.router.navigate(['']);
    }
    )
  }

  closeModal(){
    this.router.navigate(['']);
 }
 
}

