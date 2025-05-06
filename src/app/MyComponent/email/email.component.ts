import { Component } from '@angular/core';
import { EmailserviceService } from '../../Services/emailservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { error } from 'node:console';


@Component({
  selector: 'app-email',
  standalone: false,
  templateUrl: './email.component.html',
  styleUrl: './email.component.css'
})
export class EmailComponent {

   data= { 
     to:'',
     subject:'',
  message:'' }

  flag=false;

  constructor(private Email: EmailserviceService, private snak:MatSnackBar) { }


   onSubmit() {

     console.log("form submitted");
    console.log("DATA", this.data ?? {});

    if(this.data.to=='' || this.data.subject=='' || this.data.message==''){
       
      this.snak.open("Please fill all the fields", "OK", );
      return;
       
      }
      
      this.flag=true;
    this.Email.sendEmail(this.data).subscribe(
     response => {
       console.log('Email sent successfully', response);
       this.flag=false;
       this.snak.open("Email sent successfully", "OK");
      },
      error => {
        console.log('Error sending email', error);
        this.snak.open("Error sending email", "OK");
        this.flag=false;
      }
    );


  
}
}
