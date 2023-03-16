import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './shared/components/banner/banner.component';
import { SearchBarComponent } from './shared/components/banner/toolbar/search-bar/search-bar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ToolbarComponent } from './shared/components/banner/toolbar/toolbar.component';
import { ArgumentsComponent } from './shared/components/body/arguments/arguments.component';
import { PresentationComponent } from './shared/components/body/presentation/presentation.component';

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
