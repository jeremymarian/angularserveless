import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Firestore, collection, addDoc, } from '@angular/fire/firestore'; 




@Component({
  selector: 'app-createtask',
  templateUrl: './createtask.component.html',
  styleUrls: ['./createtask.component.scss'],
})
export class CreatetaskComponent {
  formData!: FormGroup;
  
  constructor(private form: FormBuilder, private lead:Firestore) {
    this.formData = this.form.group({
      name: this.form.control('', Validators.required),
      category: this.form.control('', Validators.required),
      check: this.form.control(false, [
        Validators.required,
        Validators.requiredTrue,
      ]),
    });
  }
  async onSubmit(event: Event) {
    console.log(this.formData.value);
    const target = event.currentTarget as HTMLFormElement;
    const refer = await addDoc(collection(this.lead,"prueba"), this.formData.value)
    console.log('document written with id', refer.id)
    target.reset();
    return this.formData.reset();
  }
}
