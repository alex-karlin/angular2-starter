import { Component, Inject, OnInit } from '@angular/core';
import { IProduct } from './product';
import { IProductService } from './product.service';

@Component({
    moduleId: module.id,
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit {
    public pageTitle: string = 'Product List';
    public imageWidth = 50;
    public imageMargin = 2;
    public showImage = false;
    public listFilter = '';
    public products: IProduct[];
    private _productService: IProductService;

    constructor(@Inject('ProductService') productService: IProductService) {
        this._productService = productService;
    }

    public toggleImage(): void {
        this.showImage = !this.showImage;
    }

    public ngOnInit(): void {
        this._productService.getProducts()
            .subscribe((products: IProduct[]) => this.products = products);
    }

    public onRatingChanged(productId: number, newRating: number): void {
        this._productService.updateRating(productId, newRating)
            .subscribe(product => this.ngOnInit());
    }
}