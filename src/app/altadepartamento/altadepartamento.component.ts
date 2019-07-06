import { Component, OnInit } from '@angular/core';
import { CuartoService } from '../service/cuarto.service';
import { CuartoInterfaceDB} from '../models/cuartoDB';
import {NgForm} from '@angular/forms/src/directives/ng_form';
@Component({
  selector: 'app-altadepartamento',
  templateUrl: './altadepartamento.component.html',
  styleUrls: ['./altadepartamento.component.css']
})
export class AltadepartamentoComponent implements OnInit {
  cuarto : CuartoInterfaceDB={
    direccion:"",
    serviciospublicos:"",
    numcuartos:1,
    mensualidades:1,
    idcasero:1,
  }
  constructor(private cuartoService: CuartoService) { }

  ngOnInit() {
    this.cuartoService.getCuartos().subscribe(cuarto =>{
      console.log(cuarto);
    });
  }
  onGuardarDepartamento(myForm: NgForm){
    this.cuartoService.addCuartos(this.cuarto);
    console.log('cuarto guardado');
  }
}
