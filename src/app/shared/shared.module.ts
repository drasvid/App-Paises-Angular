import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app.routing.module';



import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SharedSidebarComponent } from './components/shared-sidebar/shared-sidebar.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { AppModule } from '../app.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomePageComponent,
    AboutPageComponent,
    SharedSidebarComponent, 
    ContactPageComponent, 
    SearchBoxComponent
  ],

  exports:[

    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    SharedSidebarComponent,
    SearchBoxComponent
    

  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
