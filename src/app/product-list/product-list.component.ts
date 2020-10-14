import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  pageTitle: string ='Product List';
  imageWidth: number=50;
  imageMargin: number=2;
  showImage: boolean=false;
  //listFilter: string='cart';
  _listFilter = '';          //filter
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {   //filter
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  filteredProducts: IProduct[] = [];   //filter
  products: IProduct[]=[
   {
    "productId": 1,
    "productName":"Garden cart",
    "productCode": "GDN-1123",
    "available": "Nov 23 2020",
    "price":32.99,
    "starRating": 3,
    "imageUrl": "assets/images/garden_cart.png"



   },

   {
    "productId": 1,   
    "productName":"Hammer",
    "productCode": "GDN-1123",
    "available": "Nov 23 2020",
    "price":32.99,
    "starRating": 3,
    "imageUrl": "assets/images/garden_cart.png"



   }
];

constructor() {      //filter
  this.filteredProducts=this.products;
   this.listFilter= 'cart';
}

performFilter(filterBy: string): IProduct[] {   //filter
  filterBy = filterBy.toLocaleLowerCase();
  return this.products.filter((product: IProduct) =>
    product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
}


toggleImage(): void{
  this.showImage=!this.showImage;
}



  

  ngOnInit(): void {
  }

}
