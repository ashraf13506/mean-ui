import { Injectable } from '@angular/core';
import { CommentsServiceService } from './comments-service.service';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserResolverResolver implements Resolve<any> {
  constructor(private router:Router,private comments:CommentsServiceService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this.comments.getAllComments();
  }
}
