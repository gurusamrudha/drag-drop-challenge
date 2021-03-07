import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';


import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { DepartmentsComponent } from './components/departments/departments.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { DepartmentsService } from './services/departments.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './components/notfound/notfound.component';


@NgModule({
  declarations: [
    AppComponent,
    DepartmentsComponent,
    ToolbarComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,

    MatCardModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [DepartmentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
