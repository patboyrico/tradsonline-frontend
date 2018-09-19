import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';




@Component({
  selector: 'app-products-home',
  templateUrl: './productshome.component.html',
  styleUrls: ['./productshome.component.scss']
})
export class ProductsHomeComponent implements OnInit {

  categoriesWithProducts: any = [];
  categories: any = [];


  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getCategoriesWithProducts()
    .subscribe(res => {
      this.categoriesWithProducts = res;
    });

    this.productsService.getCategories()
    .subscribe(res => {
      this.categories = res;
    });

  }

}
