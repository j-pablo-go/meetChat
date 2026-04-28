import { Injectable } from '@angular/core';
import { IColumnTable, IConnection, IContent, IFieldForm, IlinkConfig } from '../module/commons-interfaces';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  linkConfig: IlinkConfig[] = [
    {
      name: 'Chats',
      path: 'chats',
      exact: false,
    },
    {
      name: 'Inicio',
      path: '',
      exact: true,
    }
  ]

  content: IContent[] = [
    {
      route: 'img/meetchat_logo.png',
      alt: 'imagen logo',
      p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dolorum ipsam repellendus possimus'
    },
    {
      route: 'img/logo.png',
      alt: 'imagen logo',
      p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dolorum ipsam repellendus possimus'
    },
    {
      route: 'img/chatting.png',
      alt: 'imagen logo',
      p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dolorum ipsam repellendus possimus'
    }
  ]

  connection: IConnection[] = [
    {
      name: 'Jardinería',
      members: 369,
      since: '19/04/2023',
      master: 'Chanchito',
    },
    {
      name: 'Gamers',
      members: 3657,
      since: '19/04/2024',
      master: 'Perico',
    },
    {
      name: 'Animales',
      members: 2369,
      since: '19/04/2020',
      master: 'Antonia',
    },
    {
      name: 'Ampa',
      members: 66,
      since: '19/04/2022',
      master: 'Manuel',
    },
    {
      name: 'Quedadas',
      members: 54369,
      since: '19/04/2025',
      master: 'Pedrita Parker',
    }
  ]
  
  column: IColumnTable[] = [
    {
      column: 'Nombre',
    },
    {
      column: 'Miembros',
    },
    {
      column: 'Fecha de Creación',
    },
    {
      column: 'Propietario',
    },
  ]

fieldForm: IFieldForm[] = [
  {
    name: 'Nombre',
    for: 'name',
    type: 'text',
    id: 'name',
    placeholder: 'Tu Nombre',
  },
  {
    name: 'Alias',
    for: 'nickName',
    type: 'text',
    id: 'nickName',
    placeholder: 'Tu Nombre de Usuario',
  },
  {
    name: 'Email',
    for: 'Eamil',
    type: 'text',
    id: 'Email',
    placeholder: 'Tu Email',
  },
  {
    name: 'Nº tel',
    for: 'tel',
    type: 'tel',
    id: 'tel',
    placeholder: 'Tu Teñefono',
  }
]

getFieldForm() {
  return this.fieldForm;
}

  getColumn() {
    return this.column;
  }

  getConnection() {
    return this.connection;
  }

  getContent() {
    return this.content;
  }

  getLinkConfig() {
    return this.linkConfig;
  }

}
