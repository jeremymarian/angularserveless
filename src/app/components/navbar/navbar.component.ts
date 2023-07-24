import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  MatDialog,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import { DonetasksComponent } from '../donetasks';
import { CreatetaskComponent } from '../createtask';

@Component({
  standalone: true,
  imports: [
    NgIf,
    CommonModule,
    MatToolbarModule,
    MatDialogModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    RouterOutlet,
    MatIconModule,
  ],

  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(DonetasksComponent, {
      width: '500px',
      height: '400px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
  openDial(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(CreatetaskComponent, {
      width: '500px',
      height: '400px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}

