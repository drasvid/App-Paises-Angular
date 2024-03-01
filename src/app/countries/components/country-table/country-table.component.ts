import { Component, Input } from '@angular/core';
import { Country, CapitalInfo } from '../../../interfaces/country';

@Component({
  selector: 'countries-country-table',
  templateUrl: './country-table.component.html',
  styleUrl: './country-table.component.css',
  styles:[

    `img{

      width: 35px


    }`


  ]
})
export class CountryTableComponent {

@Input()
public countries:Country[]=[];










}
