import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-createobs',
  templateUrl: './createobs.component.html',
  styleUrls: ['./createobs.component.scss'],
})
export class CreateobsComponent {
  formData!: FormGroup;

  constructor(
    private form: FormBuilder,
    private lead: Firestore
  ) {
    this.initializeForm();
  }

  initializeForm() {
    this.formData = this.form.group({
      observacion: ['', Validators.required],
    });
  }

  async onSubmit(event: Event) {
    console.log(this.formData.value);
    const formDataToSend = {
      observacion: this.formData.value.observacion,
    };
    const target = event.currentTarget as HTMLFormElement;
    const refer = await addDoc(
      collection(this.lead, 'observaciones'),
      formDataToSend
    );

    console.log('document written with id', refer.id);
    this.formData.patchValue({
      observacion: '',
    });
  }
}
