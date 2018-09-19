import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  discountedProduct: any;

  constructor(private router: Router,
              private productsService: ProductsService
    ) { }

  ngOnInit() {
    this.productsService.getDiscountedProduct()
    .subscribe(res => {
        console.log(res);
        this.discountedProduct = res;
    });
  }

  signIn() {
    this.router.navigateByUrl('login');
  }

  signUp() {
    this.router.navigateByUrl('signup');
  }

}
