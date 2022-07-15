import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ApiService } from 'src/app/shared/api.service';
// import { CreateModalComponent } from './create-modal/create-modal.component';
// import { ViewModalComponent } from './view-modal/view-modal.component';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-calendar-modal',
  templateUrl: './calendar-modal.component.html',
  styleUrls: ['./calendar-modal.component.scss']
})
export class CalendarModalComponent implements OnInit {
  mailsData!: any;

  constructor(
    public dialog: MatDialog, 
    private api: ApiService,
    private dialogRef: MatDialogRef<CalendarModalComponent>
    ) { }

  ngOnInit(): void {
    // this.getAllMails()
  }

  // getAllMails() {
  //   this.api.getMails()
  //     .subscribe((res: any) => {
  //       this.mailsData = res;
  //       console.log(this.mailsData)
  //     })
  // }

  // deleteMail(id:number) {
  //   // console.log("deleted");
  //   this.api.deleteMail(id)
  //   .subscribe(()=>{
  //     alert("User deleted!!")
  //     this.getAllMails()
  //   })
  // }

  openCreateMailDialog() {
    // const dialogRef = this.dialog.open(CreateModalComponent);
    // this.dialogRef.close();
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });

  }
  openViewMailDialog(id: number) {
    let mail:any = []
    this.mailsData.forEach((element: { id: number; }) => {
      if (id === element.id) {
          mail.push(element);
          console.log(mail[0])
          const data = {
            mail : mail[0].mail,
            status : 'read'
          }
          this.api.updateMailStatus(data, id)
          .subscribe({
            next:() => {
              // this.getAllMails();
            },
            error:() => {
              alert('Something went wrong!!');
            }
          }) 
      }
    });
    // const dialogRef = this.dialog.open(ViewModalComponent, {
    //   data: {mailData: mail}
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

}
