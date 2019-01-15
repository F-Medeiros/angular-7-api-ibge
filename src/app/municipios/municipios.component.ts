import { Component, OnInit } from '@angular/core';
import { MunicipiosService } from './municipios.service';

@Component({
  selector: 'municipios',
  templateUrl: './municipios.component.html',
  styleUrls: ['./municipios.component.css']
})
export class MunicipiosComponent implements OnInit {


  constructor(public municipiosService: MunicipiosService) {}

  ngOnInit() {}


}
