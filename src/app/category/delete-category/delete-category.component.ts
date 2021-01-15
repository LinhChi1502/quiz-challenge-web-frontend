import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category/category.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.scss']
})
export class DeleteCategoryComponent implements OnInit {
  categoryForm: FormGroup = new FormGroup({
    name: new FormControl(''),
  });
  // @ts-ignore
  currentCategory: Category = {};
  // @ts-ignore
  id: number;

  constructor(private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
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
    this.categoryService.getCategoryById(id).subscribe(category => this.currentCategory = category);
  }

  deleteCategory(id: number) {
    if (confirm('Are you sure?')) {
      this.categoryService.deleteCategory(id).subscribe(() => {
        alert('Xoá thành công');
        this.router.navigate(['/admin/category',{outlets:{category:['list-category']}}]);
      });
    }
  }

}
