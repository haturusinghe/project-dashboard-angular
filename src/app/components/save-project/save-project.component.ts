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
  projectName: string = '';
  revenue: number = 0;

  constructor(private projectService: ProjectService, private router: Router) { 
  }

  

  handleFormSubmit() {

    if(this.projectName.length > 0){
      const newProj = new Project(-1, this.projectName, this.revenue, false) 
      // -1 is a placeholder for the id, backend will assign a unique id
  
      this.projectService.addProject(newProj).subscribe((res) => {
        this.projectName = '';
        this.revenue = 0;
        console.log(res)
  
        alert(res)
  
        this.router.navigate(['/list']);
      });
    }else{
      alert("Project Name cannot be empty")
    }

    
  }
}
