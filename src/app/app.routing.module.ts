import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';
import { CountriesRoutingModule } from './countries/countries.routing.module';



const routes:Routes=[

    // aqui declaro una ruta

    // {
    //     path:"home",
    //     component:HomePageComponent

    // },

    // {
    //     path:"about",
    //     component:AboutPageComponent

    // },

    // {

    //     path:'contact',
    //     component:ContactPageComponent

    // },


    // para cargar un archivo de rutas de otro modulo, se importa la ruta, y mediente una callback se obtiente el archivo del modulo que referencia al archivo de rutas

    {

        path:'countries',
        loadChildren:()=>import('./countries/countries.routing.module')
                        .then(module=>module.CountriesRoutingModule)

    },
    // todos las rutas que no esten especificaddas, las redijira a home

    {
        path:"**",
        redirectTo:"countries/by-country"
    }




]


@NgModule({
    imports: [

        // forroot se utiliza para el router principal

        RouterModule.forRoot(routes)

    ],
    exports: [

        RouterModule
    ],
    providers: [],
})
export class AppRoutingModule { }
