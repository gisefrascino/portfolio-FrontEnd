import { Component, OnInit, Input, Output } from '@angular/core';
import { UiService} from '../../services/ui.service';
import { Persona } from '../../models/Persona';
import { EventEmitter } from '@angular/core';
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
  //@Input() persona:Persona=new Persona("","","","","","","",0);
  //@Output() onUpdateM:EventEmitter<Persona>=new EventEmitter();


  constructor(private datosPortfolio:PortfolioService, private activatedRoute:ActivatedRoute, private router:Router,private modalUs:UiService) { }

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
    this.modalUs.$modal.emit(false)
  }
  //onUpdate(persona:Persona){
  //  this.onUpdateM.emit(persona);
  //  this.modalUs.$modal.emit(false)
  //}
}

