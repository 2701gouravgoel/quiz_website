import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EndQuizComponent } from './end-quiz/end-quiz.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  { path: 'quiz', component: QuizComponent},
  { path: 'endQuiz', component: EndQuizComponent},
  { path: '', redirectTo: '/quiz', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
