import { Injectable } from '@angular/core';
import {
  createUserWithEmailAndPassword,
  Auth,
  signInWithEmailAndPassword,
  updateProfile,
  getAuth,
} from '@angular/fire/auth';
import { deleteDoc, query, where } from '@angular/fire/firestore';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';
import { writeBatch, doc } from '@angular/fire/firestore';
import { newUser, loginUser, NewBat } from '../interfaces';
import * as ExcelJS from 'exceljs';

@Injectable({
  providedIn: 'root',
})
export class TaskloaderService {
  constructor(
    private pb: Firestore,
    private auth: Auth
  ) {}

  downloadExcel(collectionName: string) {
    return async () => {
      try {
        const fieldOrder = [
          'Interno',
          'Tipo',
          'Marca',
          'Serie',
          'Modelo',
          'Voltaje',
          'Amper',
          'TipoDePuente',
          'TipoDeConector',
          'SistemaDeAgua',
          'MedidasCable',
          'AñoDeIngreso',
          'Ubicacion',
          'Estado',
        ];

        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Datos');
        const q = query(collection(this.pb, collectionName));

        const querySnapshot = await getDocs(q);

        // Add headers based on the specified field order
        const headers = fieldOrder;
        worksheet.addRow(headers);

        for (const doc of querySnapshot.docs) {
          const rowData = fieldOrder.map(field => doc.data()[field]);
          worksheet.addRow(rowData);
        }

        const excelBuffer = await workbook.xlsx.writeBuffer();
        const excelBlob = new Blob([excelBuffer], {
          type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        });

        const excelBlobUrl = URL.createObjectURL(excelBlob);
        const a = document.createElement('a');
        a.href = excelBlobUrl;
        a.download = `${collectionName}_data.xlsx`;
        a.click();
      } catch (error) {
        console.error('Error al exportar a Excel:', error);
      }
    };
  }

  getData() {
    return getDocs(collection(this.pb, 'baterias-6166'));
  }

  setData(param: NewBat[]) {
    console.log(param);
    const data = param.forEach(async e => {
      const batch = writeBatch(this.pb);
      const q = query(
        collection(this.pb, 'baterias-6166'),
        where('Interno', '==', e.Interno),
        where('Marca', '==', e.Marca),
        where('user', '==', e.user)
      );
      const querySnapshot = await getDocs(q);
      const ids = querySnapshot.docs[0].ref.id;
      const docRef = doc(this.pb, 'baterias-6166', ids);
      const getUser = getAuth().currentUser?.displayName;
      batch.update(docRef, {
        Send: e.Send,
        user: getUser,
        Interno: e.Interno,
        Marca: e.Marca,
        Voltaje: e.Voltaje,
        Tapa: e.Tapa,
        Cable: e.Cable,
        Ficha: e.Ficha,
        Terminal: e.Terminal,
        Puente: e.Puente,
        Limpieza: e.Limpieza,
        AguaDest: e.AguaDest,
        Turno: e.Turno,
        Fecha: e.Fecha,
        Novedades: e.Novedades,
        Serie: e.Serie,
        Modelo: e.Modelo,
        Amper: e.Amper,
        TipoDePuente: e.TipoDePuente,
        TipoDeConector: e.TipoDeConector,
        SistemaDeAgua: e.SistemaDeAgua,
        MedidasCable: e.MedidasCable,
        AñoDeIngreso: e.AñoDeIngreso,
        Ubicacion: e.Ubicacion,
        Estado: e.Estado,
      });

      return batch
        .commit()
        .then(() => {
          console.log('Documentos actualizados en Firestore.');
          document.location.reload();
        })
        .catch(error => {
          console.error('Error al actualizar documentos:', error);
        });
    });
  }

  deleted(param: NewBat[]) {
    param.forEach(async e => {
      const q = query(
        collection(this.pb, 'baterias-6166'),
        where('Interno', '==', e.Interno),
        where('Marca', '==', e.Marca),
        where('user', '==', e.user)
      );
      const querySnapshot = await getDocs(q);
      const ids = querySnapshot.docs[0].ref.id;
      const docRef = doc(this.pb, 'baterias-6166', ids);
      await deleteDoc(docRef);
      document.location.reload();
    });
  }
  createUser(param: newUser) {
    let dataid = '';
    createUserWithEmailAndPassword(this.auth, param.email, param.password)
      .then(e => {
        updateProfile(e.user, {
          displayName: `${param.name} ${param.lastname}`,
        });
        dataid = e.user.uid;
      })
      .catch(e => console.error(e));
    return dataid;
  }

  loginData(param: loginUser) {
    signInWithEmailAndPassword(this.auth, param.email, param.password)
      .then(e => {
        sessionStorage.setItem('', e.user.uid);
        sessionStorage.setItem('name', e.user.displayName as string);
        console.log(e.user.uid, e.user.displayName);
        document.location.reload();
      })

      .catch(e => console.error(e));
  }
}
