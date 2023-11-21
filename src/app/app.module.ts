import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


import { ProjectListComponent } from './components/project-list/project-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SaveProjectComponent } from './components/save-project/save-project.component';

import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    SidebarComponent,
    DashboardComponent,
    SaveProjectComponent,
  ],
  imports: [HttpClientModule, BrowserModule, AppRoutingModule, FormsModule, NoopAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
