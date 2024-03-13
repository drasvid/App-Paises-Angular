import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Country } from '../../interfaces/country';

@Injectable({ providedIn: 'root' })

export class CountriesService {

    private apiUrl = 'https://restcountries.com/v3.1'

    constructor(private http: HttpClient) { }


    search(route: string, term: string): Observable<Country[]> {


        return this.http.get<Country[]>(`${this.apiUrl}/${route}/${term}`)

            .pipe(catchError((error) => of([])))


    }


    searchByAlphaCode(id: string): Observable<Country | null> {


        return this.http.get<Country[]>(`${this.apiUrl}/alpha/${id}`)

            .pipe(

                map((countries) => {

                    if (countries.length >= 1) {

                        return countries[0]


                    } else { return null }

                }),
                catchError((error) => of(null)))


    }



    searchCapital(capital: string) {

        return this.search('capital', capital)


    }


    searchCountry(country: string) {

        return this.search('name', country)



    }


    searchRegion(region: string) {

        return this.search('region', region)


    }




}