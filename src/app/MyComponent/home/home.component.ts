import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private snack:MatSnackBar) { }

  ngOnInit(): void {
   
  }
  
  btnclick(){
    console.log("Button clicked!");
    this.snack.open('Welcome to our EmailSender_App', "Close");
     }


}
