import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/models/Experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-add-experiencia',
  templateUrl: './add-experiencia.component.html',
  styleUrls: ['./add-experiencia.component.css']
})
export class AddExperienciaComponent implements OnInit {
  empresa:string='';
  puesto:string='';
  fecha_inicio:string='';
  fecha_fin:string='';
  tareas:string='';

  constructor(private datosExperiencia:ExperienciaService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const experiencia= new Experiencia(this.empresa, this.puesto, this.fecha_inicio, this.fecha_fin, this.tareas);
    this.datosExperiencia.save(experiencia).subscribe(data=>{alert ("Experiencia agregada");
    this.router.navigate(['']);
  }, err => {alert("Falló");
    this.router.navigate(['']);
  }
  )
  }
}