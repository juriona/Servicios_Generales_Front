import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
interface User{
  name: string,
  code: string
}

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.scss'],
  providers: [MessageService]
})
export class SolicitudComponent implements OnInit {
  usuarios:User[] =[];
  unidades:any = []
  servicios: any = []

  userSelected =null;

  constructor(private messageService: MessageService) {}
  
  registrar() {
      this.messageService.add({ severity: 'success', summary: 'Registro', detail: 'Se Registro la Soliciud' });
  }
  ngOnInit(): void {
      this.usuarios = [
        {name: 'Jazmani Perez',code:'js'},
        {name: 'Pepito Perez',code:'a'},
        {name: 'Juan Perez',code:'s'}
      ]

      this.unidades = [
        { name:'Unidad de Sistemas', id: 1},
        { name:'Unidad de Contabilidad', id: 1},
        { name:'Unidad de Recursos Humanos', id: 1},
        { name:'Unidad de Asuntos Administrativos', id: 1},
      ]
      this.servicios = [
      
        { name: 'ADSL', id: 1 },
        { name: 'AGUA', id: 2 },
        { name: 'ALQUILER', id: 3 },
        { name: 'ARREGLO FLORAL', id: 4 },
        { name: 'COMBUSTIBLE', id: 5 },
        { name: 'COURIER', id: 6 },
        { name: 'EMPASTADOS', id: 7 },
        { name: 'ENERGIA ELECTRICA', id: 8 },
        { name: 'FIBRA OPTICA', id: 9 },
        { name: 'FOTOCPIAS', id: 10 },
        { name: 'GAS', id: 11 },
        { name: 'GAS', id: 12 },
        { name: 'IMPRESION DE BANNERS', id: 13 },
        { name: 'IMPRESION DE EMPASTADOS', id: 14 },
        { name: 'IMPRESIONES', id: 15 },
        { name: 'INTERNET 4G LTE', id: 16 },
        { name: 'INTERNET/LINEA ADSL', id: 17 },
        { name: 'INTERNET MOVIL 3G', id: 18 },
        { name: 'INTERNET MOVIL 4G', id: 19 },
        { name: 'INTERNET ON LINE', id: 20 },
        { name: 'LIMPIEZA', id: 21 },
      ]

  }
}
