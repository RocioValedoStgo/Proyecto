import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { PeticionesInterfaceDB} from '../models/peticionesDB';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PeticionService {
  peticionesCollection:AngularFirestoreCollection<PeticionesInterfaceDB>;
  peticiones:Observable<PeticionesInterfaceDB[]>;
  peticionesDoc:AngularFirestoreDocument<PeticionesInterfaceDB>;
  constructor(public afs: AngularFirestore) {
    this.peticiones = afs.collection('peticiones').valueChanges();
   }
   getPeticiones(){
     return this.peticiones;
   }
}
