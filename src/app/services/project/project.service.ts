import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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
      map((projectsData: any[]) => {
        return projectsData.map(
          (project) =>
            new Project(
              project.id,
              project.name,
              project.revenue,
              project.isCompleted
            )
        );
      })
    );
  }

  deleteProject(id: number): Observable<string> {
    const endpoint = 'projects/delete';
    return this.http.post<string>(this.apiUrl + endpoint, {id:id});
  }

  getTopProjectsByRevenue(count: number = 3): Observable<Project[]> {
    const endpoint = 'projects/top';
    return this.http.get<any[]>(this.apiUrl + endpoint).pipe(
      map((projectsData: any[]) => {
        return projectsData.map(
          (project) =>
            new Project(
              project.id,
              project.name,
              project.revenue,
              project.isCompleted
            )
        );
      })
    );
  }

  addProject(project: Project): Observable<Project> {
    console.log(project);
    const endpoint = 'projects/save';
    return this.http.post<Project>(this.apiUrl + endpoint, project);
  }
}
