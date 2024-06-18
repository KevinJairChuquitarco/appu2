import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.page.html',
  styleUrls: ['./contenido.page.scss'],
})
export class ContenidoPage implements OnInit {
  personaje:any = [];
  
  constructor(private activateRoute : ActivatedRoute, 
    private http :HttpClient) { }

  ngOnInit() {
    let id = this.activateRoute.snapshot.paramMap.get("id")
    this.http.get<any>("https://rickandmortyapi.com/api/character/"+id)
    .subscribe(rest => {
      this.personaje = rest
    })
  }

  public getPersonaje(){
    return this.personaje;
  }

}
