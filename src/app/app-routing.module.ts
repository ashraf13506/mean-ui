import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './COMPONENTS/comments/comments.component';
import { UserResolverResolver } from './SERVICES/user-resolver.resolver';

const routes: Routes = [{
  path:'table',
  component:CommentsComponent,
  resolve:{
    UserResolverResolver
  }

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
