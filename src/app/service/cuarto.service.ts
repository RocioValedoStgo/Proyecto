import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { CuartoInterfaceDB} from '../models/cuartoDB';
import {  Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CuartoService {
  cuartosCollection:AngularFirestoreCollection<CuartoInterfaceDB>;
  cuartos:Observable <CuartoInterfaceDB []>;
  cuartoDoc:AngularFirestoreDocument<CuartoInterfaceDB>

  constructor(public afs: AngularFirestore) {
    // this.cuartos = afs.collection('cuartos').valueChanges();
    this.cuartosCollection = afs.collection<CuartoInterfaceDB>('cuartos');
    this.cuartos = this.cuartosCollection.snapshotChanges().pipe(
      map(actions => actions.map(a =>{
        const data = a.payload.doc.data() as CuartoInterfaceDB;
        const id = a.payload.doc.id;

        return{id,...data};
      }))
    );
  }

  getCuartos(){
    return this.cuartos;
  }

  addCuartos(cuarto:CuartoInterfaceDB){
    console.log("New Cuarto");
    this.cuartosCollection.add(cuarto);
    console.log(cuarto);
  }
}
