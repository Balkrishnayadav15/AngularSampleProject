import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-modal',
  templateUrl: './view-modal.component.html',
  styleUrls: ['./view-modal.component.scss']
})
export class ViewModalComponent implements OnInit {
  mail:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { 
    this.mail =  data.mailData[0];
  }

  ngOnInit(): void {
    // console.log(this.mail); 
  }


}
