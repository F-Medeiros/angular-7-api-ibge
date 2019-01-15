import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MunicipiosService {

  constructor(public http: HttpClient) { }

  public url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/municipios';

  public municipios: any;

  private uf_id;

  public getMunicipio(uf_id) {

    if (this.uf_id !== uf_id) {

      this.http.get<any>(this.url.replace('{UF}', uf_id)).subscribe(
        response => {
          this.municipios = response;
        }
      );

    }

    return this.municipios;
  }
}
