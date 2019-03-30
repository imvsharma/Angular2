import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentSecondComponent } from './component-second/component-second.component';
import { ComponentThirdComponent } from './component-third/component-third.component';
import { ComponentFourthComponent } from './component-fourth/component-fourth.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComponentOneComponent,
    ComponentSecondComponent,
    ComponentThirdComponent,
    ComponentFourthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
