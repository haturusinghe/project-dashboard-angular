import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project/project.service';
import { Project } from 'src/app/models/project.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.fetchProjects();
  }

  private fetchProjects() {
    this.projectService.getProjects().subscribe({
      next: (data) => {
        this.projects = data;
        console.log(this.projects);
      },
      error: (httpError: HttpErrorResponse) => {
        console.log(httpError.error.message);
      },
    });
  }

  deleteProject(projectId: number): void {
    if (confirm('Are you sure you want to delete this project?')) {
      this.projectService.deleteProject(projectId).subscribe({
        next: (data) => {
          alert(`Project deleted successfully!`);
          this.fetchProjects();
        },
        error: (httpError: HttpErrorResponse) => {
          console.log(httpError);
        },
      });
    }
  }
}
