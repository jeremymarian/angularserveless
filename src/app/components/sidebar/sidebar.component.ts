import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { SidebarService, VoltashareService } from 'src/app/services';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  standalone: true,
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('slide', [
      state('up', style({ height: 0 })),
      state('down', style({ height: '*' })),
      transition('up <=> down', animate(200)),
    ]),
  ],
  imports: [
    NgIf,
    RouterLink,
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
    MatMenuModule,
  ],
})
export class SidebarComponent {
  @Input() name: any;
  menus: any = [];
  menurouter;
  changev;
  control;
  activas;
  cuidadas;
  reserva;
  obser;
  out;
  @Output() openModalEvent: EventEmitter<{
    modalName: string;
    voltajeValue: string;
    tipoValue: string;
  }> = new EventEmitter();
  constructor(
    public sidebarservice: SidebarService,
    private v: VoltashareService
  ) {
    this.menus = sidebarservice.getMenuList();
    this.menurouter = '/table';
    this.changev = '/home/pend';
    this.control = '/home';
    this.activas = '/home/act';
    this.cuidadas = '/home/cont';
    this.reserva = '/home/reserv';
    this.obser = '/home/obs';
    this.out = '/home/fserv';
  }
  dataFn(modalName: string, voltajeValue: string = '', tipoValue: string = '') {
    this.openModalEvent.emit({ modalName, voltajeValue, tipoValue });
  }
  voltaSelect(voltaje: string) {
    this.v.cambiarVoltaje(voltaje);
    console.log(voltaje);
  }
  getSideBarState() {
    return this.sidebarservice.getSidebarState();
  }

  toggle(currentMenu: { type: string; active: boolean }) {
    if (currentMenu.type === 'dropdown') {
      this.menus.forEach((element: { active: any; type?: string }) => {
        if (element === currentMenu) {
          currentMenu.active = !currentMenu.active;
        } else {
          element.active = false;
        }
      });
    }
  }
  toggleSubmenu(currentSubmenu: { type: string; active: boolean }) {
    if (currentSubmenu.type === 'dropdown1') {
      this.menus[1].submenus.forEach(
        (element: { active: any; type?: string }) => {
          if (element === currentSubmenu) {
            currentSubmenu.active = !currentSubmenu.active;
          } else {
            element.active = false;
          }
        }
      );
    } else if (currentSubmenu.type === 'dropdown2') {
      this.menus[1].submenus[1].submenu1.forEach(
        (element: { active: any; type?: string }) => {
          if (element === currentSubmenu) {
            currentSubmenu.active = !currentSubmenu.active;
          } else {
            element.active = false;
          }
        }
      );
    } else if (currentSubmenu.type === 'dropdown3') {
      this.menus[1].submenus[1].submenu1[0].submenu2.forEach(
        (element: { active: any; type?: string }) => {
          if (element === currentSubmenu) {
            currentSubmenu.active = !currentSubmenu.active;
          } else {
            element.active = false;
          }
        }
      );
    } else if (currentSubmenu.type === 'dropdown4') {
      this.menus[1].submenus[1].submenu1[0].submenu2.forEach(
        (element: { active: any; type?: string }) => {
          if (element === currentSubmenu) {
            currentSubmenu.active = !currentSubmenu.active;
          } else {
            element.active = false;
          }
        }
      );
    } else if (currentSubmenu.type === 'dropdown10') {
      this.menus[2].submenus.forEach(
        (element: { active: any; type?: string }) => {
          if (element === currentSubmenu) {
            currentSubmenu.active = !currentSubmenu.active;
          } else {
            element.active = false;
          }
        }
      );
    } else if (currentSubmenu.type === 'dropdown20') {
      this.menus[4].submenus.forEach(
        (element: { active: any; type?: string }) => {
          if (element === currentSubmenu) {
            currentSubmenu.active = !currentSubmenu.active;
          } else {
            element.active = false;
          }
        }
      );
    } else if (currentSubmenu.type === 'dropdown30') {
      this.menus[6].submenus.forEach(
        (element: { active: any; type?: string }) => {
          if (element === currentSubmenu) {
            currentSubmenu.active = !currentSubmenu.active;
          } else {
            element.active = false;
          }
        }
      );
    } else if (currentSubmenu.type === 'dropdown40') {
      this.menus[8].submenus.forEach(
        (element: { active: any; type?: string }) => {
          if (element === currentSubmenu) {
            currentSubmenu.active = !currentSubmenu.active;
          } else {
            element.active = false;
          }
        }
      );
    }
  }

  getState(currentMenu: { active: any }) {
    if (currentMenu.active) {
      return 'down';
    } else {
      return 'up';
    }
  }

  hasBackgroundImage() {
    return this.sidebarservice.hasBackgroundImage;
  }
}
