import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth.routing';
import { Auth } from './auth.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { SsoComponent } from './sso/sso.component';


@NgModule({
    imports: [
        BrowserAnimationsModule,
        BrowserModule, 
        FormsModule, 
        AuthRoutingModule,
        SlimLoadingBarModule.forRoot(),
        ToastModule.forRoot()
    ],
    declarations: [Auth, ForgotPasswordComponent, SsoComponent]
})

export class AuthModule {}