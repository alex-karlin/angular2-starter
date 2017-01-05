import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ai-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() public rating = 4;
    starWidth: number;
    @Output() ratingClicked = new EventEmitter<number>();
    private _oneStarWidth = 86/5;

    public ngOnChanges() {
        this.starWidth = this.rating * this._oneStarWidth;
    }

    public onClick(event: any) {
        const element = event.target;
        if(element.tagName.toLowerCase() === 'span'){
            const newRating = parseInt(element.getAttribute('data-val'));
            this.ratingClicked.emit(newRating);
        }
    }
}