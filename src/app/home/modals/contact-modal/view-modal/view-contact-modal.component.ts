import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-contact-modal',
  templateUrl: './view-contact-modal.component.html',
  styleUrls: ['./view-contact-modal.component.scss']
})
export class ViewContactModalComponent implements OnInit {
  contact:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any ) { 
    this.contact =  data.contactData[0];
  }

  ngOnInit(): void {
    // console.log(this.contact);
  }


}
