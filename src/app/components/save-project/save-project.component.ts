import { Component } from '@angular/core';

@Component({
  selector: 'app-save-project',
  templateUrl: './save-project.component.html',
  styleUrls: ['./save-project.component.scss'],
})
export class SaveProjectComponent {
  projectName: string = '';
  revenue: number = 0;

  onSubmit() {
    console.log('Project Name:', this.projectName);
    console.log('Revenue:', this.revenue);

    this.projectName = '';
    this.revenue = 0;
  }
}
