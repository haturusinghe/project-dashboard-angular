import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project/project.service';
import { Project } from 'src/app/models/project.model'


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectService: ProjectService) { 
  }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(data => {
      this.projects = data
      console.log(this.projects);
    });
  }

  deleteProject(projectId: number): void {
    if(confirm("Are you sure you want to delete this project?")) {
      this.projectService.deleteProject(projectId).subscribe((data) => {
        alert(`Project deleted successfully!,${data}`);
        this.projects = this.projects.filter(project => project.id !== projectId);
      });
    }
    
  }
}



