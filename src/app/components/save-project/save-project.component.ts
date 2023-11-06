import { Component } from '@angular/core';
import { ProjectService } from 'src/app/services/project/project.service';
import { Project } from 'src/app/models/project.model'

@Component({
  selector: 'app-save-project',
  templateUrl: './save-project.component.html',
  styleUrls: ['./save-project.component.scss'],
})
export class SaveProjectComponent {
  projectName: string = '';
  revenue: number = 0;

  constructor(private projectService: ProjectService) { 
  }

  

  onSubmit() {
    const projectId = Math.floor(Math.random() * 1000);

    const newProj = new Project(projectId, this.projectName, this.revenue, false)

    this.projectService.addProject(newProj).subscribe((res) => {
      this.projectName = '';
      this.revenue = 0;
      console.log(res)
    });
  }
}
