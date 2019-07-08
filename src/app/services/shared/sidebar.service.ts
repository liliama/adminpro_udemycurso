import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'dashboard', url: '/dashboard' },
        { titulo: 'progress', url: '/progress' },
        { titulo: 'graficas1', url: '/graficas1' },
        { titulo: 'promesas', url: '/promesas' },
        { titulo: 'rxjs', url: '/rxjs' }
      ]
    }
  ];

  constructor() { }
}
