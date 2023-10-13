import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css'],
})
export class BooklistComponent implements OnInit {

  addBookForm!: FormGroup;
  constructor(private fb: FormBuilder) {


    this.addBookForm = this.fb.group({
      id: 0,
      firstName: [''],
      lastName: [''],
      email: [''],
      phoneNumber: [''],
      isAdmin: [false],
      isSuperAdmin: [false],
      password: [''],
    });
  }

  ngOnInit(): void {

  }
}
