import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  topProjects: Project[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.getTopProjectsByRevenue(3).subscribe((data) => {
      this.topProjects = data;  
      console.log(data);
    });

    this.projectService.getCompletedProjects().subscribe((data) => {
      this.alertCompletedProjects(data);
      console.log(data);
    });
  }

  alertCompletedProjects(projects: Project[]): void {
    let message = `Completed Projects: ${projects.length} \n \n`;
    projects.forEach((project) => {
      message += `\t Project: ${project.name} \n`;
    });

    alert(message);
  }
}
