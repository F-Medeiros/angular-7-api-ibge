import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EstadosService {

  public url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';
  public estados: any;

  constructor(public http: HttpClient) {
    this.getEstados();
  }

  private getEstados() {
    this.http.get<any>(this.url).subscribe(
      response => {
        this.estados = response;
      }
    );
  }
}
