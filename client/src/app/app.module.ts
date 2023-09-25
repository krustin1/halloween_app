import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from './modules/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { RsvpComponent } from './components/rsvp/rsvp.component';
import { AppRoutingModule } from './app-routing.module';
import { MatSelect } from '@angular/material/select';
import { FaqComponent } from './components/faq/faq.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    SharedModule,
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    TopBarComponent,
    RsvpComponent,
    FaqComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }