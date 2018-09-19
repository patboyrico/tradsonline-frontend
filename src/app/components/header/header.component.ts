import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { AuthStateService } from '../../services/auth-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  hideShow = true;
  showSub = false;
  products: any = [];
  categories: any = [];
  loggedIn: boolean;

  constructor(private productsService: ProductsService,
              private authStatus: AuthStateService
    ) { }

  ngOnInit() {
    this.productsService.getCategories()
    .subscribe(data => {
      this.categories = data;
});

    this.authStatus.authStatus.subscribe(value =>
                this.loggedIn = value
      );
  }

  showSubMenu(event) {
    event.preventDefault();
    this.showSub = !this.showSub;
  }

  showMenu(event) {
    event.preventDefault();
    this.hideShow = false;
  }

  hideMenu() {
    this.hideShow = true;
  }

}
