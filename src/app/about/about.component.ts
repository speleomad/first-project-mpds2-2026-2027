import { Component, OnInit } from '@angular/core';
import { AboutService } from '../services/about.service';
import { Comment } from '../shared/comment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{
info:any;
newComment=false;
comment:Comment={id:-1,date:null, message:"default message"}
comments:Comment[]=[];
constructor(private aboutService:AboutService){}
ngOnInit(): void {
    this.info=this.aboutService.getInfos();
    this.comments=this.aboutService.getAllComment();
  }

onAddComment(){
  //console.log("New Comment: "+this.comment.message);
  //this.newComment=true;
  /* this.comments.push({
     date:this.comment.date,
     message:this.comment.message 
  })
  console.log( this.comments) */
  this.aboutService.addComment(this.comment)
}

}
