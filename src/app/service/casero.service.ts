import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { CaseroInterfaceDB} from '../models/caseroDB';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CaseroService {
  
  
  caserosCollection:AngularFirestoreCollection<CaseroInterfaceDB>;
  caseros:Observable <CaseroInterfaceDB []>;
  caseroDoc:AngularFirestoreDocument<CaseroInterfaceDB>

  constructor(public afs: AngularFirestore) {
    this.caserosCollection=afs.collection<CaseroInterfaceDB>('caseros');
    this.caseros = this.caserosCollection.snapshotChanges().pipe(
      map(actions => actions.map(a =>{
        const data = a.payload.doc.data() as CaseroInterfaceDB;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    );
  }
   getCaseros(){
     return this.caseros;
   }
   addCaseros(casero: CaseroInterfaceDB){
     console.log("new casero");
     this.caserosCollection.add(casero);
     console.log(casero);
   }
   
}
