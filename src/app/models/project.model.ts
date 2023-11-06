export class Project {
    id: number;
    name: string;
    revenue: number;
    isCompleted: boolean;
  
    constructor(id: number, name: string, revenue: number = 0, isCompleted: boolean = false) {
      this.id = id;
      this.name = name;
      this.revenue = revenue;
      this.isCompleted = isCompleted;
    }
  }
  