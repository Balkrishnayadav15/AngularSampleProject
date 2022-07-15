import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ApiService } from 'src/app/shared/api.service';
import { CreateContactModalComponent } from './create-modal/create-contact-modal.component';
import { ViewContactModalComponent } from './view-modal/view-contact-modal.component';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-modal',
  templateUrl: './contact-modal.component.html',
  styleUrls: ['./contact-modal.component.scss']
})
export class ContactModalComponent implements OnInit {
  ContactsData!: any;
  NoContacts!: number;
  constructor(
    public dialog: MatDialog, 
    private api: ApiService,
    private dialogRef: MatDialogRef<ContactModalComponent>
    ) { }

  ngOnInit(): void {
    this.getAllContacts()
  }

  getAllContacts() {
    this.api.getContacts()
      .subscribe((res: any) => {
        this.ContactsData = res;
        this.ContactsData = this.ContactsData.sort((a:any,b:any) => a.name.localeCompare(b.name));
        this.NoContacts = this.ContactsData.length
      })
  }

  deleteContact(id:number) {
    // console.log("deleted");
    this.api.deleteContact(id)
    .subscribe(()=>{
      // alert("Contact deleted!!")
      this.getAllContacts()
    })
  }

  openCreateContactDialog() {
    const dialogRef = this.dialog.open(CreateContactModalComponent);
    this.dialogRef.close();
    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });

  }
  openViewContactDialog(id: number) {
    let contact:any = []
    this.ContactsData.forEach((element: { id: number; }) => {
      if (id === element.id) {
          contact.push(element);
          // console.log(contact[0])
      }
    });
    const dialogRef = this.dialog.open(ViewContactModalComponent, {
      data: {contactData: contact}
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });
  }

}
