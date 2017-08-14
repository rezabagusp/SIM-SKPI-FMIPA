import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
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
=======

import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth.routing';
import { Auth } from './auth.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
    imports: [BrowserModule, FormsModule, AuthRoutingModule ],
>>>>>>> eda2ddadc7bbe6e20480eaab53f1795a8032df30
    declarations: [Auth, ForgotPasswordComponent]
})

export class AuthModule {}