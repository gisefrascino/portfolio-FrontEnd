import { Component, OnInit, Input, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';
import { UiService} from '../../services/ui.service';
import { Persona } from 'src/app/models/Persona';
import { ActivatedRoute, Router } from '@angular/router';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-modal-principal-rem',
  templateUrl: './modal-principal-rem.component.html',
  styleUrls: ['./modal-principal-rem.component.css']
})
export class ModalPrincipalRemComponent implements OnInit {
  persona:Persona=null;
  //@Input() persona:Persona=new Persona("","","","","","","",0);
  //@Output() onDeleteM:EventEmitter<Persona>=new EventEmitter();

  constructor(private datosPortfolio:PortfolioService, private activatedRoute:ActivatedRoute, private router:Router,private modalUs:UiService) { }

  ngOnInit(): void {
    const id=this.activatedRoute.snapshot.params['id'];
    this.datosPortfolio.detalle(id).subscribe(
      data=>{
        this.persona=data;
      }, err =>{
        alert("Error al borrar informacion profesional");
        this.router.navigate(['']);
      }
    )
  }

  onDelete():void{
    const id=this.activatedRoute.snapshot.params['id'];
    this.datosPortfolio.deletePersonaInfo_Prof(id,this.persona).subscribe(data=>{
      this.router.navigate(['']);
    }, err =>{
      alert("Error al borrar informacion profesional");
      this.router.navigate(['']);
    }
    )
  }

  closeModal(){
    this.router.navigate(['']);
  }
  /*onDelete(persona:Persona){
    this.onDeleteM.emit(persona);
  }*/
  }

