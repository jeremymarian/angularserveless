import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-createtask',
  templateUrl: './createtask.component.html',
  styleUrls: ['./createtask.component.scss'],
})
export class CreatetaskComponent {
  formData!: FormGroup;
  onSubmit(event: Event) {
    console.log(this.formData.value);
    const target = event.currentTarget as HTMLFormElement;
    target.reset();
    return this.formData.reset();
  }
  constructor(private form: FormBuilder) {
    this.formData = this.form.group({
      name: this.form.control('', Validators.required),
      category: this.form.control('', Validators.required),
      check: this.form.control(false, [
        Validators.required,
        Validators.requiredTrue,
      ]),
    });
  }
}
