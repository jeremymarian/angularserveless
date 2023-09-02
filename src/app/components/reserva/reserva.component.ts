import { Component, ViewChild } from '@angular/core';
import {
  MatTableDataSource,
  _MatTableDataSource,
} from '@angular/material/table';
import {
  DocumentData,
  Firestore,
  collection,
  onSnapshot,
  query,
  where,
} from '@angular/fire/firestore';
import { MatSort } from '@angular/material/sort';
import { VoltashareService } from 'src/app/services';
import * as ExcelJS from 'exceljs';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.scss'],
})
export class ReservaComponent {
  dataSource = new MatTableDataSource<any>();
  showIt = true;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private db: Firestore,
    private v: VoltashareService
  ) {
    this.onInit();
  }
  async onInit() {
    this.v.voltajeActual.subscribe(e => {
      const q = query(
        collection(this.db, 'baterias-6166'),
        where('Estado', '==', 'Reserva'),
        where('Voltaje', '==', e)
      );
      const dell = onSnapshot(q, querySnapshot => {
        const flatter: DocumentData[] = querySnapshot.docs.flatMap(e =>
          e.data()
        );
        this.dataSource.data = flatter;
        this.dataSource.sort = this.sort;
        return (this.showIt = false);
      });
    });
  }
  displayedColumns: string[] = ['Interno', 'Marca', 'Voltaje'];

  async downloadExcel() {
    const data = this.dataSource.data;

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Sheet1');

    // Agregar encabezados de columna
    worksheet.columns = [
      { header: 'Interno', key: 'Interno' },
      { header: 'Marca', key: 'Marca' },
      { header: 'Voltaje', key: 'Voltaje' },
    ];

    // Agregar datos
    data.forEach(item => {
      worksheet.addRow(item);
    });

    // Descargar el archivo Excel
    const blob = await workbook.xlsx.writeBuffer();
    const blobUrl = URL.createObjectURL(new Blob([blob]));
    const a = document.createElement('a');
    a.href = blobUrl;
    a.download = 'data.xlsx';
    a.click();
    URL.revokeObjectURL(blobUrl);
  }
}
