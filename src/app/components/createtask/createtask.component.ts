import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Firestore, collection, addDoc, updateDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-createtask',
  templateUrl: './createtask.component.html',
  styleUrls: ['./createtask.component.scss'],
})
export class CreatetaskComponent {
  formData!: FormGroup;
  marcaOptions = ['STB','ETR','WORHOG','HAWKER','T66','HOPPEK'];
  valOptions = ['24','48'];
  constructor(
    private form: FormBuilder,
    private lead: Firestore
  ) {
    this.formData = this.form.group({
      Numero: this.form.control('', Validators.required),
      Marca: this.form.control([], Validators.required),
      Voltaje: this.form.control([], Validators.required),
      user:'' ,
      Tapa: this.form.control(false),
      Cable: this.form.control(false),
      Ficha: this.form.control(false),
      Terminal: this.form.control(false),
      Puente: this.form.control(false),
      Limpieza: this.form.control(false),
      AguaDest: this.form.control(false),
      Turno: this.form.control([]),
      Fecha: this.form.control(""),
      Novedades: this.form.control(""),
      Send: this.form.control(false)
    });
  }
  async onSubmit(event: Event) {
    console.log(this.formData.value);
    const formDataToSend = {
      Numero: this.formData.value.Numero || '',
      Marca: this.formData.value.Marca || [],
      Voltaje: this.formData.value.Voltaje || [],
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
      Send: this.formData.value.Send || false
    };
    const target = event.currentTarget as HTMLFormElement;
    const refer = await addDoc(
      collection(this.lead, 'baterias-6166'),
      formDataToSend
    );
    
    console.log('document written with id', refer.id);
    target.reset();
    return this.formData.reset();
  }
}
