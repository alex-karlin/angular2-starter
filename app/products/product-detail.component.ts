import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription }       from 'rxjs/Subscription';
import { IProduct } from './product';
import { IProductService } from './product.service';

@Component({
    templateUrl: 'app/products/product-detail.component.html'
})
export class ProductDetailComponent implements OnInit, OnDestroy {
    public pageTitle = 'Product Detail';
    public product: IProduct;
    public errorMessage: string;
    private _subsciption: Subscription;

    constructor(private _route: ActivatedRoute,
                private _router: Router,
                @Inject('ProductService') private _productService: IProductService) {
    }

    public ngOnInit(): void {
        this._subsciption = this._route.params.subscribe(params => 
            this.getProduct(parseInt(params['id'])));
    }

    public ngOnDestroy(): void {
        this._subsciption.unsubscribe();
    }

    private getProduct(id: number) {
        this._productService.getProduct(id).subscribe(
            product => this.product = product,
            error => this.errorMessage = <any>error);
    }

    public onBack(): void {
        this._router.navigate(['/products']);
    }

    public onRatingClicked(newRating: number): void {
        this._productService.updateRating(this.product.productId, newRating)
            .subscribe(product => this.ngOnInit());
    }
}
