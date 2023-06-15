import { Component, OnInit } from '@angular/core';

interface User{
  name: string,
  code: string
}

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.scss']
})
export class SolicitudComponent implements OnInit {
  usuarios:User[] =[];
  userSelected =null;
  ngOnInit(): void {
      this.usuarios = [
        {name: 'jasmany',code:'js'},
        {name: 'aaaa',code:'a'},
        {name: 'dd',code:'s'}
      ]
  }
}
