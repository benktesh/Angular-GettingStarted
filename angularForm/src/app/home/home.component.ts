import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  languages = ["English", "Spanish", "Other"];
  model = new Employee("", "default"); //"Benktesh", "Sharma", true, 'w2', "English");
  hasPrimaryLanguageError = false;
  
  constructor() { 
    
  }

  validatePrimaryLanguage(value) {
    console.log(event);
    console.log('Language: ' + this.model.primaryLanguage);
    if(value === 'default') {
      this.hasPrimaryLanguageError = true;
    }
    else {
      this.hasPrimaryLanguageError = false;
    }
    
  }


  ngOnInit() {
  }

}
