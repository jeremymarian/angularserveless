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
  selector: 'app-fueraserv',
  templateUrl: './fueraserv.component.html',
  styleUrls: ['./fueraserv.component.scss'],
})
export class FueraservComponent {
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
    const q = query(
      collection(this.db, 'baterias-6166'),
      where('Estado', '==', 'Fuera de servicio')
    );
    const dell = onSnapshot(q, querySnapshot => {
      const flatter: DocumentData[] = querySnapshot.docs.flatMap(e => e.data());
      this.dataSource.data = flatter;
      this.dataSource.sort = this.sort;
      return (this.showIt = false);
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
