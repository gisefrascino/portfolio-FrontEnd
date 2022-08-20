import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/models/Persona';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-modal-principal-perfil',
  templateUrl: './modal-principal-perfil.component.html',
  styleUrls: ['./modal-principal-perfil.component.css']
})
export class ModalPrincipalPerfilComponent implements OnInit {
  @Input() title="";
  persona:Persona=null;

  constructor(private datosPortfolio:PortfolioService, private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    const id=this.activatedRoute.snapshot.params['id'];
    this.datosPortfolio.detalle(id).subscribe(
      data=>{
        this.persona=data;
      }, err =>{
        alert("Error al actualizar imagen de perfil");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate():void{
    const id=this.activatedRoute.snapshot.params['id'];
    this.datosPortfolio.updatePersona(id,this.persona).subscribe(data=>{
      this.router.navigate(['']);
    }, err =>{
      alert("Error al actualizar imagen de perfil");
      this.router.navigate(['']);
    }
    )
  };

  closeModal(){
    this.router.navigate(['']);
  };
}
