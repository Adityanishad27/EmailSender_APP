import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './MyComponent/navbar/navbar.component';
import { HomeComponent } from './MyComponent/home/home.component';
import { EmailComponent } from './MyComponent/email/email.component';
import { FormsModule } from '@angular/forms';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { EmailserviceService } from './Services/emailservice.service';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {  HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    EmailComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatInputModule,
  HttpClientModule,
    MatProgressSpinnerModule,
    
    
    
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    EmailserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
