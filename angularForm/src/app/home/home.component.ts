import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { FormPoster } from '../services/form-poster.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  languages = [];
  model = new Employee("", "", false, "w2", "default"); //"Benktesh", "Sharma", true, 'w2', "English");
  hasPrimaryLanguageError = false;
  
  constructor(private formPoster: FormPoster) { 

    this.formPoster.getLanguages()
      .subscribe(
        data =>this.languages = data.languages,
        err => console.log('get error: ', err)
      );

    
  }

  validatePrimaryLanguage(value) {
  //  console.log(event);
  //  console.log('Language: ' + this.model.primaryLanguage);
    if(value === 'default') {
      this.hasPrimaryLanguageError = true;
    }
    else {
      this.hasPrimaryLanguageError = false;
    }
    
  }

  submitForm(form:NgForm) {

    //validate form
    this.validatePrimaryLanguage(this.model.primaryLanguage);
    if(this.hasPrimaryLanguageError)
    console.log('language is default');
    
    this.formPoster.postEmployeeForm(this.model).subscribe(
      data => console.log('success: ', data),
      err => console.log('erro:', err)
    )
    
  }




  ngOnInit() {
  }

}
