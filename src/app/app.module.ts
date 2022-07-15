import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewModalComponent } from './home/modals/mail-modal/view-modal/view-modal.component';
import { CreateModalComponent } from './home/modals/mail-modal/create-modal/create-modal.component';
import { CreateContactModalComponent } from './home/modals/contact-modal/create-modal/create-contact-modal.component';
import { ViewContactModalComponent } from './home/modals/contact-modal/view-modal/view-contact-modal.component';
import { MailModalComponent } from './home/modals/mail-modal/mail-modal.component';
import { ContactModalComponent } from './home/modals/contact-modal/contact-modal.component';
import { CalendarModalComponent } from './home/modals/calendar/calendar-modal.component';
import { CalendarModule } from './sharedComponent/calendar/calendar.module';
// angular material modules
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MailModalComponent,
    ContactModalComponent,
    CalendarModalComponent,
    ViewModalComponent,
    CreateModalComponent,
    CreateContactModalComponent,
    ViewContactModalComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
