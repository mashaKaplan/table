import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { GroupComponent } from './group/group.component';
import { SubGroupComponent } from './sub-group/sub-group.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    GroupComponent,
    SubGroupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
