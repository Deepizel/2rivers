import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './Pages/home/home.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';
import { HeroComponent } from './components/hero/hero.component';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { FeaturedBooksComponent } from './components/featured-books/featured-books.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
    ContactComponent,
    PageNotFoundComponent,
    HeroComponent,
    AllBooksComponent,
    FeaturedBooksComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
