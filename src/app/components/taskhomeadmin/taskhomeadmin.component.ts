import { Component, ViewChild } from '@angular/core';
import {
  DocumentData,
  Firestore,
  collection,
  onSnapshot,
  query,
} from '@angular/fire/firestore';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NewBat } from 'src/app/interfaces';
import { ChekcsService } from 'src/app/services';

@Component({
  selector: 'app-taskhomeadmin',
  templateUrl: './taskhomeadmin.component.html',
  styleUrls: ['./taskhomeadmin.component.scss'],
})
export class TaskhomeadminComponent {
  primerosEstados: Array<string> = [
    'Activa',
    'Activa bajo control',
    'Fuera de servicio',
    'Reserva',
    'Reparacion',
  ];
  displayedColumns: string[] = [
    'Interno',
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
    'Send',
    'Unsend',
  ];
  selectedItems: NewBat[] = [];
  selectAllUnsend = false;
  availibleChecks = true;
  condition = false;
  dataSource: MatTableDataSource<DocumentData> =
    new MatTableDataSource<DocumentData>();
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private db: Firestore,
    private ch: ChekcsService
  ) {
    this.onInit();
  }

  async onInit() {
    const q = query(collection(this.db, 'baterias-6166'));
    const dell = onSnapshot(q, (querySnapshot: { docs: any[] }) => {
      const flatter: DocumentData[] = querySnapshot.docs.flatMap(
        (e: { data: () => any }) => e.data()
      );
      this.condition = true;
      this.dataSource.data = flatter;
      this.dataSource.sort = this.sort;
      this.dataSource.filterPredicate = this.customFilterPredicate.bind(this);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  customFilterPredicate(data: DocumentData, filter: string): boolean {
    return data['Interno'].toString().includes(filter);
  }
  selectAllUnsends() {
    // Limpia la lista antes de agregar elementos

    for (const element of this.dataSource.data) {
      element['Unsend'] = true;
      element['Fecha'] = 0;
      element['Turno'] = '';
      element['Novedades'] = '';
      element['Tapa'] = false;
      element['Cable'] = false;
      element['Ficha'] = false;
      element['Terminal'] = false;
      element['Puente'] = false;
      element['Limpieza'] = false;
      element['AguaDest'] = false;
      if (!element['Send']) {
        this.selectedItems.push(element as any);
        this.ch.setChecks = this.selectedItems;
      } else if (element['Send']) {
        this.selectedItems.push(element as any);
        this.ch.setChecks = this.selectedItems;
      }
    }
  }
  unSelectAllUnsends() {
    for (const element of this.dataSource.data) {
      element['Send'] = false;
      // Elimina 'element' de tu lista de elementos seleccionados para enviar
    }
  }

  handleCheckboxChange(element: any, att: any) {
    element[att] = !element[att];

    if (element[att] && element.Send) {
      this.selectedItems.push(element);
      this.ch.setChecks = this.selectedItems;
    } else if (!element[att] && !element.Send) {
      const index = this.selectedItems.findIndex(
        v => v.Interno == element.Interno
      );
      this.selectedItems.splice(index, 1);
      this.ch.setChecks = this.selectedItems;
      /*console.log(index);*/
    }
    console.log(this.selectedItems);
  }
  handleCheckboxFalse(element: any, att: any) {
    element[att] = !element[att];

    if (element[att] && !element.Send) {
      element.Fecha = 0;
      element.Turno = '';
      element.Novedades = '';
      element.Tapa = false;
      element.Cable = false;
      element.Ficha = false;
      element.Terminal = false;
      element.Puente = false;
      element.Limpieza = false;
      element.AguaDest = false;
      this.selectedItems.push(element);
      this.ch.setChecks = this.selectedItems;
    } else if (!element[att] && !element.Send) {
      const index = this.selectedItems.findIndex(
        v => v.Interno == element.Interno
      );
      this.selectedItems.splice(index, 1);
      this.ch.setChecks = this.selectedItems;
      /*console.log(index);*/
    } else if (element[att] && element.Send) {
      element.Fecha = 0;
      element.Turno = '';
      element.Novedades = '';
      element.Tapa = false;
      element.Cable = false;
      element.Ficha = false;
      element.Terminal = false;
      element.Puente = false;
      element.Limpieza = false;
      element.AguaDest = false;
      this.selectedItems.push(element);
      this.ch.setChecks = this.selectedItems;
    } else if (!element[att] && element.Send) {
      const index = this.selectedItems.findIndex(
        v => v.Interno == element.Interno
      );
      this.selectedItems.splice(index, 1);
      this.ch.setChecks = this.selectedItems;
      /*console.log(index);*/
      console.log(this.selectedItems);
    }
  }
}
