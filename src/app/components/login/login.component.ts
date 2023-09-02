import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskloaderService } from 'src/app/services';
import { loginUser } from 'src/app/interfaces';

@Component({
  selector: 'app-newuser',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  formData!: FormGroup;
  load!: Boolean;
  constructor(
    private form: FormBuilder,
    private user: TaskloaderService
  ) {
    this.formData = this.form.group({
      email: this.form.control('', [Validators.required, Validators.email]),
      password: this.form.control('', Validators.required),
    });
  }
  async onSubmit(event: Event) {
    this.load = true;
    setTimeout(() => {
      console.log(this.formData.value);
      const target = event.currentTarget as HTMLFormElement;
      const user: loginUser = this.formData.value;
      this.user.loginData(user);
      target.reset();
      return this.formData.reset();
    }, 5000);
  }
}
