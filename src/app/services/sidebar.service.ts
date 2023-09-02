import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private token: string = 'KrLXM8n6CvRWM6ln0BqaO1IvBnh2';
  toggled = false;
  _hasBackgroundImage = true;
  menus = [
    {
      title: 'Tareas Generales',
      type: 'header',
    },
    {
      token: this.token,
      hidden: false,
      title: 'Baterias',
      icon: 'fa-solid fa-bolt',
      active: false,
      type: 'dropdown',
      category: 'baterias',
      submenus: [
        {
          title: 'Listado General',
          routerLink: ['/table'],
        },
        {
          title: 'Insertar',
          active: false,
          type: 'dropdown1',
          submenu1: [
            {
              title: 'Baterias',
              active: false,
              type: 'dropdown2',

              submenu2: [
                {
                  title: 'Nueva',
                  active: false,
                  type: 'dropdown3',
                  submenu3: [
                    {
                      title: '24v',
                    },
                    {
                      title: '48v',
                    },
                  ],
                },
                {
                  title: 'Alquiler',
                  active: false,
                  type: 'dropdown4',
                  submenu4: [
                    {
                      title: '24v',
                    },
                    {
                      title: '48v',
                    },
                  ],
                },
              ],
            },
            {
              title: 'Cargadores',
            },
          ],
        },
      ],
    },
    {
      token: '0',
      title: 'Reparaciones',
      icon: 'fa-solid fa-screwdriver-wrench',
      active: false,
      type: 'dropdown',
      category: 'reparaciones',
      submenus: [
        {
          title: 'Baterias',
          active: false,
          type: 'dropdown10',
          submenu1: [{ title: '24v' }, { title: '48v' }],
        },
        {
          title: 'Cargadores',
        },
      ],
    },
    {
      token: '0',
      title: 'Control',
      icon: 'fa-solid fa-clipboard-list',
      active: false,
      category: 'control',
    },
    {
      token: '0',
      title: 'Controladas',
      icon: 'fa-solid fa-house-circle-check',
      active: false,
      type: 'dropdown',
      category: 'controladas',

      submenus: [
        {
          title: 'Baterias',
          active: false,
          type: 'dropdown20',
          submenu1: [{ title: '24v' }, { title: '48v' }],
        },
        {
          title: 'Cargadores',
        },
      ],
    },
    {
      token: '0',
      title: 'Activas en control',
      icon: 'fa-solid fa-hand-holding-medical',
      active: false,
    },
    {
      token: '0',
      title: 'Reserva',
      icon: 'fa-solid fa-briefcase',
      active: false,
      type: 'dropdown',
      category: 'reserva',

      submenus: [
        {
          title: 'Baterias',
          active: false,
          type: 'dropdown30',
          submenu1: [{ title: '24v' }, { title: '48v' }],
        },
        {
          title: 'Cargadores',
        },
      ],
    },
    {
      title: 'Opciones',
      type: 'header',
    },
    {
      token: '0',
      title: 'Observaciones',
      icon: 'fa fa-book',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          title: 'Consultar',
        },
        {
          title: 'Ingresar',
        },
      ],
    },
    {
      token: '0',
      title: 'Fuera de servicio',
      icon: 'fa-solid fa-triangle-exclamation',
      active: false,
      type: 'simple',
    },
  ];

  constructor() {}

  toggle() {
    this.toggled = !this.toggled;
  }

  getSidebarState() {
    return this.toggled;
  }

  setSidebarState(state: boolean) {
    this.toggled = state;
  }

  getMenuList() {
    const storedToken = sessionStorage.getItem('');

    this.menus.forEach(menu => {
      if (menu.title === 'Baterias' && menu.token !== storedToken) {
        menu.hidden = true;
      } else {
        menu.hidden = false;
      }
    });

    return this.menus;
  }

  get hasBackgroundImage() {
    return this._hasBackgroundImage;
  }

  set hasBackgroundImage(hasBackgroundImage) {
    this._hasBackgroundImage = hasBackgroundImage;
  }
}
