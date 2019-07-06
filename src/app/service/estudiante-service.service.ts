import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { EstudianteInterfaceDB} from '../models/interfaceDB';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EstudianteServiceService {
  estudiantesCollection:AngularFirestoreCollection<EstudianteInterfaceDB>;
  estudiantes: Observable <EstudianteInterfaceDB[]>;
  estudianteDoc:AngularFirestoreDocument<EstudianteInterfaceDB>;
  
  constructor(public afs: AngularFirestore) {
    // this.estudiantes = afs.collection('estudiantes').valueChanges();
    this.estudiantesCollection = afs.collection<EstudianteInterfaceDB>('estudiantes');
    
    this.estudiantes = this.estudiantesCollection.snapshotChanges().pipe(
      map(actions => actions.map(a =>{
        const data = a.payload.doc.data() as EstudianteInterfaceDB;
        const id = a.payload.doc.id;
        // console.log(id, data);
        return {id, ...data};
      }))
    );
  }

   getEstudiantes(){
     console.log(this.estudiantes);
     return this.estudiantes;
     
   }
   getId(){

   }

   addEstudiante(estudiante: EstudianteInterfaceDB){
     console.log("new Estudent");
     this.estudiantesCollection.add(estudiante);
     console.log(estudiante);
   }
    
}
