import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Project Management Dashboard';

  showProjectList: boolean = true;
  buttonTitle: string = "Go to Dashboard"

  toggleView(): void {
    this.showProjectList = !this.showProjectList;
    if(this.showProjectList){
      this.buttonTitle = "Go to Dashboard"
    }else{
      this.buttonTitle = "Go to Project List"
    }
  }
}
