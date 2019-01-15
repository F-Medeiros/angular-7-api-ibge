import { Component, OnInit } from '@angular/core';
import { EstadosService } from './estados.service';
import { MunicipiosService } from '../municipios/municipios.service';

@Component({
  selector: 'estados',
  templateUrl: './estados.component.html',
  styleUrls: ['./estados.component.css']
})
export class EstadosComponent implements OnInit {

  constructor(
    public estadosService: EstadosService,
    public municipiosService: MunicipiosService
  ) { }

  ngOnInit() { }

}
