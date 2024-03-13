import { Component, importProvidersFrom, Input, OnInit } from '@angular/core';
import {Map, tileLayer} from 'leaflet';
import { config } from 'rxjs';

@Component({
  selector: 'shared-show-map',
  templateUrl: './show-map.component.html',
  styleUrl: './show-map.component.css'
})
export class ShowMapComponent {


  @Input()
   coordinates:number|undefined;


  imprimir(){

    if (!this.coordinates) {
      
      return console.log( this.coordinates );

    }else{


      return console.log( 'No hay coordenadas' );

    }

  }




  ngAfterViewInit():void{


    const map= new Map('map').setView([-34.88,-64.95], 5);

    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);


  }



  }






