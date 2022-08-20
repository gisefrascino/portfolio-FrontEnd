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
    this.cargarPersona();
    //if(this.tokenService.getToken()){
    //  this.isLogged=true;
    //  }else{
    //    this.isLogged=false;
    //  }
  };

  cargarPersona():void{
    console.log("personas component");
    console.log(this.personas)
    this.datosPortfolio.obtenerDatos().subscribe(
      data=>{this.personas=data});
    }
}


