import { Injectable } from '@angular/core';
import { query, where } from '@angular/fire/firestore';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';
import { writeBatch, doc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class TaskloaderService {
  constructor(private pb: Firestore) {}

  getData() {
    return getDocs(collection(this.pb, 'prueba'));
  }

  setData(param: any[]) {
    param.forEach(async e => {
      const batch = writeBatch(this.pb);
      const q = query(
        collection(this.pb, 'prueba'),
        where('name', '==', e.name)
      );
      const querySnapshot = await getDocs(q);
      const ids = querySnapshot.docs[0].ref.id;
      const docRef = doc(this.pb, 'prueba', ids);
      batch.update(docRef, { check: e.check });

      return batch
        .commit()
        .then(() => {
          console.log('Documentos actualizados en Firestore.');
        })
        .catch(error => {
          console.error('Error al actualizar documentos:', error);
        });
    });
  }
}
