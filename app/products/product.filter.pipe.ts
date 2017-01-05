import { PipeTransform, Pipe } from '@angular/core';
import { IProduct } from './product';

@Pipe({
    name: 'productFilter'    
})
export class ProductFilterPipe implements PipeTransform {
    public transform(value: IProduct[], filterBy: string): IProduct[] {
        filterBy = filterBy ? filterBy.toLowerCase() : null;
        const result = filterBy
            ? value.filter(p => p.productName.toLocaleLowerCase().indexOf(filterBy) !== -1) 
            : value;
        return result;
    }
}