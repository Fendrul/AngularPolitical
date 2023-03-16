import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './modules/components/banner/banner.component';
import { SearchBarComponent } from './modules/components/banner/toolbar/search-bar/search-bar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ToolbarComponent } from './modules/components/banner/toolbar/toolbar.component';
import { ArgumentsComponent } from './modules/components/body/arguments/arguments.component';
import { PresentationComponent } from './modules/components/body/presentation/presentation.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    SearchBarComponent,
    ToolbarComponent,
    ArgumentsComponent,
    PresentationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
