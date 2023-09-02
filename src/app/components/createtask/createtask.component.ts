import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  Firestore,
  collection,
  addDoc,
  updateDoc,
} from '@angular/fire/firestore';
import { VoltashareService } from 'src/app/services/voltashare.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-createtask',
  templateUrl: './createtask.component.html',
  styleUrls: ['./createtask.component.scss'],
})
export class CreatetaskComponent implements OnDestroy {
  formData!: FormGroup;
  marcaOptions = ['STB', 'ETR', 'WORHOG', 'HAWKER', 'T66', 'HOPPEK'];
  valOptions!: string;
  tipOptions!: string;
  voltajeSubscription: Subscription | undefined;
  tipoSubscription: Subscription | undefined;

  constructor(
    private form: FormBuilder,
    private lead: Firestore,
    private v: VoltashareService
  ) {
    this.voltajeSubscription = this.v.voltajeActual.subscribe(vol => {
      this.valOptions = vol;
    });
    this.tipoSubscription = this.v.tipoActual.subscribe(vol => {
      this.tipOptions = vol;
    });

    this.initializeForm();
  }

  initializeForm() {
    this.formData = this.form.group({
      Interno: ['', Validators.required],
      Marca: ['', Validators.required],
      Serie: ['', Validators.required],
      Modelo: ['', Validators.required],
      Voltaje: [this.valOptions ?? this.valOptions, Validators.required],
      Amper: ['', Validators.required],
      TipoDePuente: ['', Validators.required],
      TipoDeConector: ['', Validators.required],
      SistemaDeAgua: ['', Validators.required],
      MedidasCable: ['', Validators.required],
      AñoDeIngreso: ['', Validators.required],
      Ubicacion: ['', Validators.required],
      Estado: ['Activa'],
      user: '',
      Tapa: false,
      Cable: false,
      Ficha: false,
      Terminal: false,
      Puente: false,
      Limpieza: false,
      AguaDest: false,
      Turno: [],
      Fecha: '',
      Novedades: '',
      Send: false,
      Tipo: this.tipOptions ?? this.tipOptions,
    });
  }

  async onSubmit(event: Event) {
    console.log(this.formData.value);
    const formDataToSend = {
      Interno: this.formData.value.Interno || '',
      Marca: this.formData.value.Marca || '',
      Serie: this.formData.value.Serie || '',
      Modelo: this.formData.value.Modelo || '',
      Voltaje: this.formData.value.Voltaje || this.valOptions.toString(),
      Amper: this.formData.value.Amper || '',
      TipoDePuente: this.formData.value.TipoDePuente || '',
      TipoDeConector: this.formData.value.TipoDeConector || '',
      SistemaDeAgua: this.formData.value.SistemaDeAgua || '',
      MedidasCable: this.formData.value.MedidasCable || '',
      AñoDeIngreso: this.formData.value.AñoDeIngreso || '',
      Ubicacion: this.formData.value.Ubicacion || '',
      Estado: this.formData.value.Estado || 'Activa',
      user: this.formData.value.user || '',
      Tapa: this.formData.value.Tapa || false,
      Cable: this.formData.value.Cable || false,
      Ficha: this.formData.value.Ficha || false,
      Terminal: this.formData.value.Terminal || false,
      Puente: this.formData.value.Puente || false,
      Limpieza: this.formData.value.Limpieza || false,
      AguaDest: this.formData.value.AguaDest || false,
      Turno: this.formData.value.Turno || [],
      Fecha: this.formData.value.Fecha || '',
      Novedades: this.formData.value.Novedades || '',
      Send: this.formData.value.Send || false,
      Tipo: this.formData.value.Tipo || this.tipOptions.toString(),
    };
    const target = event.currentTarget as HTMLFormElement;
    const refer = await addDoc(
      collection(this.lead, 'baterias-6166'),
      formDataToSend
    );

    console.log('document written with id', refer.id);
    this.formData.patchValue({
      Interno: 0,
      Marca: '',
      Serie: '',
      Modelo: '',
      Amper: '',
      TipoDePuente: '',
      TipoDeConector: '',
      SistemaDeAgua: '',
      MedidasCable: '',
      AñoDeIngreso: '',
      Ubicacion: '',
    });
  }

  ngOnDestroy(): void {
    if (this.voltajeSubscription) {
      this.voltajeSubscription.unsubscribe();
    }
    if (this.tipoSubscription) {
      this.tipoSubscription.unsubscribe();
    }
  }
}
