import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { FormsModule } from '@angular/forms';

import { CKEditorModule } from 'ng2-ckeditor';

import { AppRoutes } from  "./app.routes";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AuthGuard } from './auth.guard';
import { AnonymousGuard } from './auth.anonymusguard';
import { AddPropertyComponent } from './dashboard/add-property/add-property.component';
import { HeaderComponent } from './header/header.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { SettingsComponent } from './dashboard/settings/settings.component'; 


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AddPropertyComponent,
    HeaderComponent,
    NavigationMenuComponent,
    SettingsComponent
  ],
  imports: [
    RouterModule.forRoot(AppRoutes, { useHash: false }), FormsModule, [CKEditorModule], 
    BrowserModule
  ],
  exports: [ RouterModule ], 
  providers: [AuthGuard, AnonymousGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
