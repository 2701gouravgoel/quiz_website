import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../quiz.service';

var question:any;
var easyQuestionId:number;
var mediumQuestionId:number;
var hardQuestionId:number;
var difficultyLevel:string;
var currentAns:any="false";
var questions:any;
var currentLevel:any= "Easy";
var questions_done:number;
var total_score:number;
var user_score:number;

var result:any=0;
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  question:any;
  // A form group used to handle the answers as option inputs
  form: any;
  selectOptionToast:boolean=false;
  selectedOption:any;
  
  constructor(
    public quiz: QuizService,
    public route: ActivatedRoute,
    public FB: FormBuilder,
    public router: Router
  ) {
  }

  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, data);
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  }
  get(key: string):any {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      return null;
    }
  }
  ngOnInit() {  
    total_score = this.get("total_score");
    user_score = this.get("user_score");
    if(total_score===null)
    total_score=0;
    if(user_score===null)
    user_score=0;
    
    
    easyQuestionId = this.get("easyQuestionId");
    mediumQuestionId = this.get("mediumQuestionId");
    hardQuestionId =  this.get("hardQuestionId");    
    difficultyLevel =  this.get("difficultyLevel");    
    currentAns =  this.get("currentAns");
    questions = this.quiz.questions;
    this.initialize();
    console.log(easyQuestionId,mediumQuestionId,hardQuestionId);
    
    console.log("difficultyLevel",difficultyLevel)
    console.log("currentAns",currentAns)
    if((difficultyLevel==="Easy"||difficultyLevel==="Medium")&&currentAns==="false")
    {
      currentLevel="Easy"
    }
    console.log(difficultyLevel,"Easy")
    if((difficultyLevel==="Easy"&&currentAns==="true")||(difficultyLevel==="Hard"&&currentAns==="false"))
    {
      console.log("a");
      currentLevel="Medium"
    }
    if((difficultyLevel==="Hard"||difficultyLevel==="Medium")&&currentAns==="true")
    {
      currentLevel="Hard"
    }
    console.log("cuurent",currentLevel)
    if(currentLevel==="Easy")
    {
      this.question = this.quiz.questions[easyQuestionId];
      easyQuestionId++;

    }
    if(currentLevel==="Medium")
    {
      this.question = this.quiz.questions[mediumQuestionId];
      mediumQuestionId++;
    }
    if(currentLevel==="Hard")
    {
      this.question = this.quiz.questions[hardQuestionId];
      hardQuestionId++;
    }
    console.log(this.question);
  }
  onSelect(option: any) {
    if(this.selectedOption===option)
    {
      this.selectedOption=null
    }
    else
    {  
      this.selectedOption=option
    }
  }
  Next(question:any)
  {
    if(this.selectedOption===null)
    {
      this.selectOptionToast=true;
    }
    else
    {
      total_score=+total_score+ +question.Score;
      if(this.get("result")!==null)
      {
        result=this.get("result");
      }
      if(this.selectedOption.Answer===true)
      {
        currentAns="true";
      }
      else
      {
        currentAns="false";
      }
      if(this.selectedOption.Answer)
      {
        result++;
        user_score=+user_score + +question.Score
      }
      console.log("result",result);
      this.set("result",result);
      this.set("user_score",user_score);
      this.set("total_score",total_score);
      this.set("easyQuestionId",easyQuestionId);
      this.set("mediumQuestionId",mediumQuestionId);
      this.set("hardQuestionId",hardQuestionId);
      this.set("difficultyLevel",currentLevel);
      this.set("currentAns",currentAns);
      questions_done=this.get("questions_done")
      questions_done++;
      this.set("questions_done",questions_done);
      if(questions_done>=10)
      {
        this.router.navigate(['/endQuiz'])
      }
      else
      {
        window.location.reload();
      }
    }
  }
  initialize()
  {
    if(easyQuestionId===null&&mediumQuestionId===null&&hardQuestionId===null)
    {
      questions_done=0;
      easyQuestionId=0;
      for(var i=0;i<questions.length;i++)
      {
        if(i>0&&questions[i].Level==="Medium"&&questions[i-1].Level!=="Medium")
        {
          mediumQuestionId=i;
        }
        if(i>0&&questions[i].Level==="Hard"&&questions[i-1].Level!=="Hard")
        {
          hardQuestionId=i;
        }
      }
      this.set("easyQuestionId",easyQuestionId);
      this.set("mediumQuestionId",mediumQuestionId);
      this.set("hardQuestionId",hardQuestionId);
    }
  }
}
