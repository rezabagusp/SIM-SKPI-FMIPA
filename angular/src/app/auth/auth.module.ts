import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth.routing';
import { Auth } from './auth.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

@NgModule({
    imports: [
        BrowserModule, 
        FormsModule, 
        AuthRoutingModule,
        SlimLoadingBarModule.forRoot() 
    ],
    declarations: [Auth, ForgotPasswordComponent]
})

export class AuthModule {}