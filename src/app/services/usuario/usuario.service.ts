import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  //url: string = "http://localhost:8085/casaaberta/objetos";
  private url:string = "http://10.131.45.51/casaaberta/objetos";

  constructor(private http: HttpClient) { }

  login(dados: any) {
    return this.http.post(this.url + "/obj_usuario.php", dados);
  }  

  cadastrar(dados: any) {
    return this.http.post(this.url + "/obj_usuario_insert.php", dados);
  }
}
