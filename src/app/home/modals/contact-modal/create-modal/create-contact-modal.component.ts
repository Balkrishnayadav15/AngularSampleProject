import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ApiService } from 'src/app/shared/api.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog} from '@angular/material/dialog';
import { ContactModalComponent } from '../contact-modal.component';

@Component({
  selector: 'app-create-contact-modal',
  templateUrl: './create-contact-modal.component.html',
  styleUrls: ['./create-contact-modal.component.scss']
})
export class CreateContactModalComponent implements OnInit {
  
  formValue!: FormGroup;
  constructor(
    private formBuilder: FormBuilder, 
    private api: ApiService,
    private dialogRef: MatDialogRef<CreateContactModalComponent>,
    private parentDialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: ['', Validators.required],
      contactNo: [ , Validators.required]
    })
  }

  addContact() {
    if (this.formValue.valid) {
      const contactData = {
        name: this.formValue.value.name,
        contactNo: this.formValue.value.contactNo
      }
      this.api.postContact(contactData)
        .subscribe({
          next:(res) => {
            console.log(res);
            // alert('Contact added successfully!!');
            this.formValue.reset();
            this.dialogRef.close();
            this.parentDialog.open(ContactModalComponent);
          },
          error:() => {
            alert('Something went wrong!!');
          }
        })
    }else {
      alert('Invalid!!');
    }
  }

}
