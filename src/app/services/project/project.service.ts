import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Project } from 'src/app/models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUrl = 'http://localhost:3000/projects';

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((projectsData: any[]) => {
        return projectsData.map(project => new Project(project.id, project.name, project.revenue, project.isCompleted));
      })
    );
  }

  deleteProject(id: number): Observable<string> {
    const deleteUrl = `${this.apiUrl}/${id}`;
    return this.http.delete<string>(deleteUrl);
  }

}




