import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable()
export class ProductDetailGuard implements CanActivate {
    constructor(private _router: Router) {        
    }

    public canActivate(route: ActivatedRouteSnapshot): boolean {
        const path = route.url[1].path;
        let id = parseInt(path);
        if(isNaN(id) || id < 1) {
            alert(`Invalid product identifier '${path}'`);
            this._router.navigate(['/products']);
            
            return false;
        }

        return true;
    }
}