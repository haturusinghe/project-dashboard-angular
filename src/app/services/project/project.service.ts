import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Project } from 'src/app/models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private apiUrl = 'http://localhost:5001/api/v1/';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    const endpoint = 'projects/all';
    return this.http.get<any[]>(this.apiUrl + endpoint).pipe(
      map(this.makeProjectList),
    );
  }
  
  getTopProjectsByRevenue(count: number = 3): Observable<Project[]> {
    const endpoint = 'projects/top/';
    return this.http.get<any[]>(this.apiUrl + endpoint + count).pipe(
      map(this.makeProjectList),
    );
  }
  
  getCompletedProjects(): Observable<Project[]> {
    const endpoint = 'projects/completed';
    return this.http.get<any[]>(this.apiUrl + endpoint).pipe(
      map(this.makeProjectList),
    );
  }

  deleteProject(id: number): Observable<string> {
    const endpoint = 'projects/delete';
    return this.http.delete<string>(this.apiUrl + endpoint + '/' + id);
  }

  addProject(project: Project): Observable<Project> {
    console.log(project);
    const endpoint = 'projects/save';
    return this.http.post<Project>(this.apiUrl + endpoint, project);
  }

  private makeProjectList(projectsData: any[]): Project[] {
    return projectsData.map(project => new Project(
      project.id,
      project.name,
      project.revenue,
      project.isCompleted
    ));
  }
}
