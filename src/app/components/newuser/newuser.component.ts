import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskloaderService } from 'src/app/services';
import { newUser } from 'src/app/interfaces';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.scss'],
})
export class NewuserComponent {
  formData!: FormGroup;

  constructor(
    private form: FormBuilder,
    private user: TaskloaderService
  ) {
    this.formData = this.form.group({
      name: this.form.control('', [
        Validators.required,
        Validators.maxLength(10),
      ]),
      lastname: this.form.control('', [
        Validators.required,
        Validators.maxLength(10),
      ]),
      email: this.form.control('', [Validators.required, Validators.email]),
      password: this.form.control('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(8),
      ]),
    });
  }
  async onSubmit(event: Event) {
    console.log(this.formData.value);
    const target = event.currentTarget as HTMLFormElement;
    const user: newUser = this.formData.value;
    const dataModel = this.user.createUser(user).toString();
    console.log(dataModel);
    target.reset();
    return this.formData.reset();
  }
}
