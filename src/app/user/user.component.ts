import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
users=[{nom:"demo", age:"20", email:"demo@gmail.com"},
  {nom:"demo10", age:"30", email:"demo10@gmail.com"},
  {nom:"demo30", age:"40", email:"demo40@gmail.com"}
]
}
