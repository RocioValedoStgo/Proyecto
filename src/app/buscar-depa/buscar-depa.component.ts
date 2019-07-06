import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CuartoInterfaceDB } from'../models/cuartoDB';
import { CuartoService } from'../service/cuarto.service';


@Component({
  selector: 'app-buscar-depa',
  templateUrl: './buscar-depa.component.html',
  styleUrls: ['./buscar-depa.component.css']
})
export class BuscarDepaComponent implements OnInit {
  cuartos : CuartoInterfaceDB[];

  constructor(private cuartoService: CuartoService) { }

  ngOnInit() {
    this.cuartoService.getCuartos().subscribe(cuartos =>{
      console.log(cuartos);
      // this.cuartos = cuartos;
    });
  }

/*   cuartos : any = [
    {
     
      propietario:'charizar',
      descripcion:'fire',
      mensualidad:'234',
      generation:'1er',
      // image:'assets/img/charizar.png'
    },
    {
     
      propietario:'Pickachu',
      descripcion:'electrik',
        mensualidad:'3312',
      generation:'1er',
      // image:'assets/img/picachu.png'
    },
    {
     
      propietario:'Onix',
      descripcion:'Rock',
      mensualidad:'123457',
      generation:'3ra',
      
    }

  ]; 
 */
}
