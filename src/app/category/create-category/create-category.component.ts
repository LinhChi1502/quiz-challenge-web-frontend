import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from '../../service/category/category.service';
import {Category} from '../../model/category';
import {Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnInit {
  categoryForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required)
  });
  output: string = '';
  message: string = '';

  constructor(private categoryService: CategoryService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  createNewCategory() {
    const category: Category = {
      name: this.categoryForm.value.name,
    };

    this.categoryService.createNewCategory(category).subscribe(output => {
      this.output = 'Tạo mới category thành công';
      this.message = '';
    }, message => {
      this.message = 'Mời nhập lại category chưa tồn tại';
    });
    this.categoryForm.reset();
  }

}
