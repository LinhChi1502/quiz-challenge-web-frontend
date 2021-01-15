import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Category} from 'src/app/model/category';
import {CategoryService} from '../../service/category/category.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {

  categoryForm: FormGroup = new FormGroup({
    name: new FormControl(''),
  });
  // @ts-ignore
  currentCategory: Category = {
  };
  // @ts-ignore
  id: number;
  output: string = '';
  constructor(private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.paramMap.subscribe(async paramMap => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.getCategoryById(this.id);
    });
  }

  ngOnInit(): void {

    this.getCategoryById(this.id);
  }

  getCategoryById(id: number) {
    debugger
    this.categoryService.getCategoryById(id).subscribe(category => this.currentCategory =  category);
  }

  editCategory(id: number) {
    const category: Category = {
      name: this.categoryForm.value.name === "" ? this.currentCategory.name : this.categoryForm.value.name,
    };
    this.categoryService.editCategory(id, this.currentCategory).subscribe(output => this.output = 'success',
      output => this.output = 'fail');
  }
}
