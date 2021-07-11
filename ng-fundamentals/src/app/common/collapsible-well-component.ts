import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'collapsible-well',
    template:`
    <div (click)="togglecontent()" class="well pointable">
        <h4 class="well-title">
            <ng-content select=".title"></ng-content>
        </h4>
        <ng-content *ngIf='visible'  select=".body"></ng-content>
    </div>
    `,
})
export class Collapsiblecomponent implements OnInit {
    @Input() title:string
    visible:boolean=true

    togglecontent()
    {
        this.visible=!this.visible;
    }
    constructor() { }

    ngOnInit(): void { }
}
