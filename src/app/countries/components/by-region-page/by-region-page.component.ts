import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../../interfaces/country';
import { catchError,of } from 'rxjs';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent {

  constructor(private countriesService:CountriesService ){}

  public region:Country[]=[]


  public imprimirRegion(region:string){


    this.countriesService.searchRegion(region)

                            .subscribe(region => this.region = region)
            

  }


}
