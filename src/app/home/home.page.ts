import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private listaPersonaje = [];

  constructor(private http : HttpClient) {}

  ngOnInit(){
    this.http.get<any>("https://rickandmortyapi.com/api/character")
    .subscribe(rest => {
      console.log(rest)
      this.listaPersonaje = rest.results;
    })
  }

  public getListaPersonaje(){
    return this.listaPersonaje;
  }

}
