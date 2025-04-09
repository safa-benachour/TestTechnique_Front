import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,FormBuilder, FormGroup, Validators,ReactiveFormsModule  } from '@angular/forms';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  email: string = '';
  message: string = '';
  formSubmitted: boolean = false;
  formSubmittedSuccessfully: boolean = false;

  onSubmit() {

    if (this.email && this.message) {
      this.formSubmitted = true;
      this.formSubmittedSuccessfully = true;

      setTimeout(() => {
        this.formSubmitted = false;
        this.formSubmittedSuccessfully = false;
        this.email = '';
        this.message = '';
      }, 3000);
    }
  }
}
