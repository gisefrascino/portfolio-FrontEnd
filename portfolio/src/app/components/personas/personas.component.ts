import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { Persona } from 'src/app/models/Persona';


@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  personas:Persona[]=[];


  constructor(public datosPortfolio:PortfolioService) { }
// private tokenService:TokenService, 

  isLogged=false;

  ngOnInit(): void {
    this.cargarPersona;
    //if(this.tokenService.getToken()){
    //  this.isLogged=true;
    //  }else{
    //    this.isLogged=false;
    //  }
  };

  cargarPersona():void{
    this.datosPortfolio.obtenerDatos().subscribe(
      data=>{this.personas=data});
    }
}
  /*deletePersona(persona:Persona){
    this.datosPortfolio.deletePersona(persona).subscribe(()=>{
      this.personas=this.personas.filter(x=>x.id!==persona.id);
    });
  }
  onSubmit(persona:Persona){
    this.datosPortfolio.addPersona(persona).subscribe...
  }
  updatePersona(persona:Persona){
    this.datosPortfolio.updatePersona(persona).subscribe();
    console.log("personas")
  }*/

