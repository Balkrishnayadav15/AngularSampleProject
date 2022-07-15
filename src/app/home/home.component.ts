import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MailModalComponent } from './modals/mail-modal/mail-modal.component';
import { ContactModalComponent } from './modals/contact-modal/contact-modal.component'
import { CalendarModalComponent } from './modals/calendar/calendar-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    
    constructor(public dialog: MatDialog) {}
  
    openMailDialog() {
      const dialogRef = this.dialog.open(MailModalComponent);
  
      dialogRef.afterClosed().subscribe(result => {
        // console.log(`Dialog result: ${result}`);
      });
    }

    openContactDialog() {
      const dialogRef = this.dialog.open(ContactModalComponent);
  
      dialogRef.afterClosed().subscribe(result => {
        // console.log(`Dialog result: ${result}`);
      });
    }

    openCalendarDialog() {
      const dialogRef = this.dialog.open(CalendarModalComponent);
  
      dialogRef.afterClosed().subscribe(result => {
        // console.log(`Dialog result: ${result}`);
      });
    }

  ngOnInit(): void {
  }

}
