import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VoltashareService {
  private voltajeActualSource = new BehaviorSubject<string>('');
  voltajeActual = this.voltajeActualSource.asObservable();
  private tipoActualSource = new BehaviorSubject<string>('');
  tipoActual = this.tipoActualSource.asObservable();

  constructor() {}

  cambiarVoltaje(voltaje: string) {
    console.log(voltaje);
    this.voltajeActualSource.next(voltaje);
  }
  cambiarTipo(tipo: string) {
    this.tipoActualSource.next(tipo);
  }
}
