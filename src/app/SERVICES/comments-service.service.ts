import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CommentsServiceService {
  private COMMENTS_URL="http://localhost:3000/comments";

  constructor(private _http:HttpClient) {
}
getAllComments()
{
  return this._http.get(`${this.COMMENTS_URL}`)
}
}
