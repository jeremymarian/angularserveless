import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.scss'],
})
export class InitComponent {
  constructor(private router: Router) {}

  redireccionar(): void {
    document.location.href = '/home';
  }
}
