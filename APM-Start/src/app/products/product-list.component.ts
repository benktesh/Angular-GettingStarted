
import {Component, OnInit} from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component ({
    
    templateUrl: './product-list.component.html',
    styleUrls:['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string;
    
    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this._listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];
    products: IProduct[]= [];
    toggleImage() :void {
        this.showImage = !this.showImage;
    }
    ngOnInit(): void {
        this._productService.getProducts()
        .subscribe(p=> 
            {
                this.products = p;
                this.filteredProducts = p;
            }, 
            e=>this.errorMessage = <any>e);  
        this.filteredProducts = this.products;
        console.log('In OnInit')
    }

    constructor(private _productService: ProductService) {
       
        this.filteredProducts = this.products;
        this.listFilter = '';

    }
    performFilter(filterBy: string): IProduct[] {

        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product:IProduct)=>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1); 

    }

    onRatingClicked(message:string):void{
        this.pageTitle = 'Product list: ' + message;
    }
}