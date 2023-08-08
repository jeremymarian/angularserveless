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
import { newUser, loginUser, PeriodicElement } from '../interfaces';
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
    const exportToExcel = async () => {
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet('Datos');

      const q = query(collection(this.pb, `${collectionName}`));

      try {
        const querySnapshot = await getDocs(q);
        const headers = Object.keys(querySnapshot.docs[0].data());
        worksheet.addRow(headers);

        querySnapshot.forEach(doc => {
          const rowData = headers.map(header => doc.data()[header])
          worksheet.addRow(rowData)})
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
    return exportToExcel;
  }

  getData() {
    return getDocs(collection(this.pb, 'prueba'));
  }

  setData(param: PeriodicElement[]) {
    console.log(param)
    const data = param.forEach(async e => {
      const batch = writeBatch(this.pb);
      const q = query(
        collection(this.pb, 'prueba'),
        where('name', '==', e.name),
        where('category', '==', e.category),
        where('user',"==","")
      );
      const querySnapshot = await getDocs(q);
      const ids = querySnapshot.docs[0].ref.id;
      const docRef = doc(this.pb, 'prueba', ids);
      const getUser = getAuth().currentUser?.displayName;
      batch.update(docRef, { check: e.check, user: getUser });

      return batch
        .commit()
        .then(() => {
          console.log('Documentos actualizados en Firestore.');
          document.location.reload()
        })
        .catch(error => {
          console.error('Error al actualizar documentos:', error);
        });
    });
  
  }

  deleted(param: any[]) {
    param.forEach(async e => {
      const q = query(
        collection(this.pb, 'prueba'),
        where('name', '==', e.name),
        where('category', '==', e.category)
      );
      const querySnapshot = await getDocs(q);
      const ids = querySnapshot.docs[0].ref.id;
      const docRef = doc(this.pb, 'prueba', ids);
      deleteDoc(docRef);
      setTimeout(() => document.location.reload(), 3000);
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
/*getAuth(createUserWithEmailAndPassword(Auth,""))
  createUser({
    email: 'user@example.com',
    emailVerified: false,
    phoneNumber: '+11234567890',
    password: 'secretPassword',
    displayName: 'John Doe',
    photoURL: 'http://www.example.com/12345678/photo.png',
    disabled: false,
  })
  .then((userRecord) => {
    // See the UserRecord reference doc for the contents of userRecord.
    console.log('Successfully created new user:', userRecord.uid);
  })
  .catch((error) => {
    console.log('Error creating new user:', error);
  });

  }*/
