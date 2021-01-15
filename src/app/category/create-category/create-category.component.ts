import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from '../../service/category/category.service';
import {Category} from '../../model/category';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnInit {

output: string = '';
message: string = ''
  constructor(private categoryService: CategoryService,
              private formBuilder: FormBuilder
  ) { }

  categoryForm = this.formBuilder.group({
    name: ['', Validators.required]
  })
  ngOnInit(): void {
  }

  createNewCategory() {
    const category: Category = {
      name: this.categoryForm.value.name,
    };

    this.categoryService.createNewCategory(category).subscribe(output => {this.output = 'Tạo mới category thành công'} ,
      message => {this.message = 'Category đã tồn tại'})
  }
}
