import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  questions = [
    {
      "Question": "Who is the father of nation?easy1",
      "Answer_choices": [{
        "Option": "Dr. Bheemrao Ambedkar",
        "Answer": false
    },{  
        "Option" : "Dr. A.P.J Abdul Kalam",
    "Answer": false 
    },{
      "Option" : "Mahatma Gandhi",
      "Answer": true
    },{
      "Option": "Jawahar Lal Nehru",
      "Answer": false
    }],
    "Score": 10,
    "Level": "Easy"
    },
    {
      "Question": "Who is the father of nation?easy2",
      "Answer_choices": [{
        "Option": "Dr. Bheemrao Ambedkar",
        "Answer": false
    },{  
        "Option" : "Dr. A.P.J Abdul Kalam",
    "Answer": false 
    },{
      "Option" : "Mahatma Gandhi",
      "Answer": true
    },{
      "Option": "Jawahar Lal Nehru",
      "Answer": false
    }],
    "Score": 10,
    "Level": "Easy"
    },{
      "Question": "Who is the father of nation?easy3",
      "Answer_choices": [{
        "Option": "Dr. Bheemrao Ambedkar",
        "Answer": false
    },{  
        "Option" : "Dr. A.P.J Abdul Kalam",
    "Answer": false 
    },{
      "Option" : "Mahatma Gandhi",
      "Answer": true
    },{
      "Option": "Jawahar Lal Nehru",
      "Answer": false
    }],
    "Score": 10,
    "Level": "Easy"
    },{
      "Question": "Who is the father of nation?med4",
      "Answer_choices": [{
        "Option": "Dr. Bheemrao Ambedkar",
        "Answer": false
    },{  
        "Option" : "Dr. A.P.J Abdul Kalam",
    "Answer": false 
    },{
      "Option" : "Mahatma Gandhi",
      "Answer": true
    },{
      "Option": "Jawahar Lal Nehru",
      "Answer": false
    }],
    "Score": 10,
    "Level": "Medium"
    },{
      "Question": "Who is the father of nation?med5",
      "Answer_choices": [{
        "Option": "Dr. Bheemrao Ambedkar",
        "Answer": false
    },{  
        "Option" : "Dr. A.P.J Abdul Kalam",
    "Answer": false 
    },{
      "Option" : "Mahatma Gandhi",
      "Answer": true
    },{
      "Option": "Jawahar Lal Nehru",
      "Answer": false
    }],
    "Score": 10,
    "Level": "Medium"
    },{
      "Question": "Who is the father of nation?hard6",
      "Answer_choices": [{
        "Option": "Dr. Bheemrao Ambedkar",
        "Answer": false
    },{  
        "Option" : "Dr. A.P.J Abdul Kalam",
    "Answer": false 
    },{
      "Option" : "Mahatma Gandhi",
      "Answer": true
    },{
      "Option": "Jawahar Lal Nehru",
      "Answer": false
    }],
    "Score": 10,
    "Level": "Hard"
    },{
      "Question": "Who is the father of nation?hard7",
      "Answer_choices": [{
        "Option": "Dr. Bheemrao Ambedkar",
        "Answer": false
    },{  
        "Option" : "Dr. A.P.J Abdul Kalam",
    "Answer": false 
    },{
      "Option" : "Mahatma Gandhi",
      "Answer": true
    },{
      "Option": "Jawahar Lal Nehru",
      "Answer": false
    }],
    "Score": 10,
    "Level": "Hard"
    },{
      "Question": "Who is the father of nation?hard8",
      "Answer_choices": [{
        "Option": "Dr. Bheemrao Ambedkar",
        "Answer": false
    },{  
        "Option" : "Dr. A.P.J Abdul Kalam",
    "Answer": false 
    },{
      "Option" : "Mahatma Gandhi",
      "Answer": true
    },{
      "Option": "Jawahar Lal Nehru",
      "Answer": false
    }],
    "Score": 10,
    "Level": "Hard"
    },{
      "Question": "Who is the father of nation?hard9",
      "Answer_choices": [{
        "Option": "Dr. Bheemrao Ambedkar",
        "Answer": false
    },{  
        "Option" : "Dr. A.P.J Abdul Kalam",
    "Answer": false 
    },{
      "Option" : "Mahatma Gandhi",
      "Answer": true
    },{
      "Option": "Jawahar Lal Nehru",
      "Answer": false
    }],
    "Score": 10,
    "Level": "Hard"
    },{
      "Question": "Who is the father of nation?hard10",
      "Answer_choices": [{
        "Option": "Dr. Bheemrao Ambedkar",
        "Answer": false
    },{  
        "Option" : "Dr. A.P.J Abdul Kalam",
    "Answer": false 
    },{
      "Option" : "Mahatma Gandhi",
      "Answer": true
    },{
      "Option": "Jawahar Lal Nehru",
      "Answer": false
    }],
    "Score": 10,
    "Level": "Hard"
    },
  ];
  questionId: number =0;
  answers:any = [];

  constructor() { }
  validate(id:any,answer:any) {
    var a={ "questionid":id, "response":answer }
    this.answers.push(a);
  }
}
