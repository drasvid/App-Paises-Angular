import { Component, importProvidersFrom, Input, OnInit } from '@angular/core';
import {Map, tileLayer} from 'leaflet';
import { config } from 'rxjs';

@Component({
  selector: 'shared-show-map',
  templateUrl: './show-map.component.html',
  styleUrl: './show-map.component.css'
})
export class ShowMapComponent {


  constructor(){}

      
  @Input()
  coordinates:number[]|undefined;


 imprimir(){

   if (this.coordinates) {
     
     return console.log( this.coordinates );

   }else{


     return console.log( 'No hay coordenadas' );

   }

 }



  ngAfterViewInit():void{

    if (this.coordinates) {
      
      const map= new Map('map').setView([this.coordinates[0],this.coordinates[1]], 5);

      tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map);
  

    }


  }



  }






