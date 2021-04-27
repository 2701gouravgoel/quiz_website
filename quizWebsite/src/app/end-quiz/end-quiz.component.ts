import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-end-quiz',
  templateUrl: './end-quiz.component.html',
  styleUrls: ['./end-quiz.component.css']
})
export class EndQuizComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  get(key: string):any {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      return null;
    }
  }
  result:any =this.get("result");
  totalScore:any =this.get("total_score");
  userScore:any =this.get("user_score");
}
