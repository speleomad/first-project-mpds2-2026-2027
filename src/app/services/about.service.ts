import { Injectable } from '@angular/core';
import { Comment } from '../shared/comment';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  info={
  name:"demo",
  email:"demo@test.com",
  tel:"99887766"
}
comments:Comment[]=[]
  constructor() { }

  getInfos(){
    return this.info;
  }

  addComment(comment:Comment){
    comment.id=this.comments.length+1
    comment.date=new Date();
    this.comments.push(comment)
  }
  getAllComment():Comment[]{
    return this.comments;
  }
}
