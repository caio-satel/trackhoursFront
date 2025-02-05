import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//PrimeNG
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { LoginHomeComponent } from './modules/login-home/login-home.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // PrimeNG
    ToastModule
  ],
  providers: [
    provideClientHydration(),
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
