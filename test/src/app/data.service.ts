import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectData } from './project_data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  restApiUrl='http://192.168.0.50:8000/api/expert/project/' //project data 있는 서버 주소
  constructor(private _http:HttpClient ) { }
  getUsers(){
    return this._http.get<ProjectData[]>(this.restApiUrl)
  }
}
