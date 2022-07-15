import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ApiService } from 'src/app/shared/api.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MailModalComponent } from '../mail-modal.component';
import { MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.scss']
})
export class CreateModalComponent implements OnInit {
  
  formValue!: FormGroup;
  constructor(
    private formBuilder: FormBuilder, 
    private api: ApiService,
    private dialogRef: MatDialogRef<CreateModalComponent>,
    // private parentDialogRef: MatDialogRef<MailModalComponent>,
    private parentDialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      mail: ['', Validators.required]
    })
  }

  sendMail() {
    if (this.formValue.valid) {
      const mailData = {
        mail: this.formValue.value.mail,
        status: 'unread'
      }
      this.api.postMail(mailData)
        .subscribe({
          next:(res) => {
            console.log(res);
            // alert('Mail sent successfully!!');
            this.formValue.reset();
            this.dialogRef.close();
            // this.parentDialogRef.close();
            this.parentDialog.open(MailModalComponent);
          },
          error:() => {
            alert('Something went wrong!!');
          }
        })
    }else {
      alert('Invalid Mail!!');
    }
  }

}
