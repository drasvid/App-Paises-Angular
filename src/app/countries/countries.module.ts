import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalPageComponent } from './components/by-capital-page/by-capital-page.component';
import { ByRegionPageComponent } from './components/by-region-page/by-region-page.component';
import { ByCountryPageComponent } from './components/by-country-page/by-country-page.component';
import { CountryPageComponent } from './components/country-page/country-page.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [

    ByCapitalPageComponent,
    ByRegionPageComponent,
    ByCountryPageComponent,
    CountryPageComponent

  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CountriesModule { }