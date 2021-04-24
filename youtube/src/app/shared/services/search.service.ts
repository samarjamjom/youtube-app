import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private API_URL = 'https://www.googleapis.com/youtube/v3/search';
  private API_KEY = 'AIzaSyCZ5I_wRuRG027fothsJihBacnDIefanQg';

  constructor(private http:HttpClient) { }

  getVideos(query:string):Observable<any>{
    return this.http.get(`${this.API_URL}?q=${query}&key=${this.API_KEY}&part=snippet&type=video&maxResults=10`)
  }
}
