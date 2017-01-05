import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { IProduct } from './product';

export interface IProductService {
    getProducts(): Observable<IProduct[]>;
    getProduct(id: number): Observable<IProduct>;
    updateRating(productId: number, rating: number): Observable<IProduct>;
}

@Injectable()
export class HttpProductService implements IProductService {
    private _productUrl = 'api/products/products.json';

    constructor(private _http: Http) {
    }

    public getProducts(): Observable<IProduct[]> {
        return this._http.get(this._productUrl)
            .map((response: Response) => <IProduct[]>response.json())
            .catch(this.handleError);
    }

    public getProduct(id: number): Observable<IProduct> {
        return this._http.get(this._productUrl)
            .map((response: Response) => {
                const products = <IProduct[]>response.json();
                return products.find(product => product.productId === id);
            });
    }

    public updateRating(productId: number, rating: number): Observable<IProduct> {
        throw new Error("Not Implemented");
    }

    private handleError(error: any): Observable<IProduct[]> {
        console.error(`Error occurred: ${error}`)
        return Observable.throw(error.json().error || 'Server error');
    }
}

@Injectable()
export class DummyProductService implements IProductService {
    private readonly _products: IProduct[] = 
        [{
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2016",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
        },
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
        },
        {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2016",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
        },
        {
            "productId": 8,
            "productName": "Saw",
            "productCode": "TBX-0022",
            "releaseDate": "May 15, 2016",
            "description": "15-inch steel blade hand saw",
            "price": 11.55,
            "starRating": 3.7,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
        },
        {
            "productId": 10,
            "productName": "Video Game Controller",
            "productCode": "GMG-0042",
            "releaseDate": "October 15, 2015",
            "description": "Standard two-button video game controller",
            "price": 35.95,
            "starRating": 4.6,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
        }];

    public getProducts(): Observable<IProduct[]> {
        return Observable.create((observer: any) => {
            observer.next(this._products);
            observer.complete();
        });
    }

    public getProduct(id: number): Observable<IProduct>{
        return Observable.create((observer: any) => {
            const product = 
                this._products.find(product => product.productId === id);
            observer.next(product);
            observer.complete();
        });
    }

    public updateRating(productId: number, rating: number): Observable<IProduct> {
        return Observable.create((observer: any) => {
            const product = 
                this._products.find(product => product.productId === productId);
            product.starRating = rating;
            observer.next(product);
            observer.complete();
        });
    }
}