import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Project Management Dashboard';

  showProjectList: boolean = true;
  showAddProject: boolean = false;

  buttonTitle: string = "Dashboard"
  showComponentStatus: string = "LIST"

  toggleView(): void {
    if(this.showProjectList){
      this.showProjectList = false;
      this.showComponentStatus = "DASH";
      this.buttonTitle = "Project List"
    }else{
      this.showProjectList = true;
      this.showComponentStatus = "LIST";
      this.buttonTitle = "Dashboard"
    }
  }

  showAddPage(): void {
    this.showAddProject = true;
    this.showComponentStatus = "ADD";
    this.buttonTitle = "Project List"
    this.showProjectList = false;
  }
}
