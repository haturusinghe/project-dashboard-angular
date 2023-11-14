import { Component } from '@angular/core';
import { ProjectService } from 'src/app/services/project/project.service';
import { Project } from 'src/app/models/project.model'

import { Router } from '@angular/router';

@Component({
  selector: 'app-save-project',
  templateUrl: './save-project.component.html',
  styleUrls: ['./save-project.component.scss'],
})
export class SaveProjectComponent {
  newProject: Project;

  constructor(private projectService: ProjectService, private router: Router) { 
    this.newProject = new Project()
  }

  

  saveProject() {

    if(this.newProject.name.length > 0){
      
      this.projectService.addProject(this.newProject).subscribe((res) => {
        
        this.newProject = new Project()

        console.log(res)
        alert(res)
        this.router.navigate(['/list']);
      });
    }else{
      alert("Project Name cannot be empty")
    }

    
  }
}
