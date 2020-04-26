import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';

@Component({ selector: 'app-lista', templateUrl: './lista.component.html', })
export class ListaComponent implements OnInit {
  usuarios: Usuario[] = [];
  constructor(private _svUsu: UsuarioService) { }
  ngOnInit(): void {
    this._svUsu.getUsers().subscribe((rs: any) => this.usuarios = rs);
  }

}
