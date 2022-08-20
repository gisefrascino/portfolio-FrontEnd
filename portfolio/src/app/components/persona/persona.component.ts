import { Component, OnInit,Input, Output } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { Persona } from '../../models/Persona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  isLogged=false
  @Input () persona:Persona= null;
  
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
  }
  
  }


