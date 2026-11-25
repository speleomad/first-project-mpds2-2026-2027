import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../services/contact.service';
import { Contact } from '../shared/contact';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrl: './edit-contact.component.css'
})
export class EditContactComponent {
  constructor(private router: Router,
              private contactService: ContactService){}
  onSubmit(form:NgForm){
   this.contactService.addContact({...form.value});
   this.router.navigate(['/contacts']);
   /*  console.log(form.value);
    console.log(form.value.email);
    console.log(form.value['email']); */
  }
  onContacts(){
    this.router.navigate(['/contacts'])
  }
}
