import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from 'src/app/app.component';
import { SigninComponent } from 'src/app/pages/signin/signin.component';
import { LoadingComponent } from 'src/app/components/loading/loading.component';
import { MainLayoutComponent } from 'src/app/layout/main-layout/main-layout.component';
import { AuthLayoutComponent } from 'src/app/layout/auth-layout/auth-layout.component';
import { RecoverPasswordComponent } from 'src/app/pages/recover-password/recover-password.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    AuthLayoutComponent,
    SigninComponent,
    RecoverPasswordComponent,
    LoadingComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
