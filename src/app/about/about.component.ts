import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
info={
  name:"demo",
  email:"demo@test.com",
  tel:"99887766"
}
newComment=false;
comment={date:new Date(), message:"default message"}
comments=[];
onAddComment(){
  //console.log("New Comment: "+this.comment.message);
  //this.newComment=true;
  this.comments.push({
     date:this.comment.date,
     message:this.comment.message 
  })
  console.log( this.comments)
}

}
