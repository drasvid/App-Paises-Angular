import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.css'
})
export class CountryPageComponent implements OnInit {


  constructor(private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService,
    private router: Router
  ) { }

  public country?:Country;
  public arrayCoordinates:number[]|undefined;


  public imprimir(){

    console.log( this.country);

  }



  ngOnInit(): void {


    this.activatedRoute.params
      .subscribe(

        ({ id }) => {

          this.countriesService.searchByAlphaCode(id)

            .subscribe(country => {

              if (!country) {

                return this.router.navigateByUrl('');

              }else{

                this.country=country;

                return this.arrayCoordinates=this.country?.latlng;

              }


            })
        }

      )

  }

  ///////////////////////



}