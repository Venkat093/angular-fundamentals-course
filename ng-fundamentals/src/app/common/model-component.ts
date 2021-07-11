import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'model',
    template:`
    <div id="{{elementid}}" class="model fade" tabindex="-1">
        <div class="model-dialog">
            <div class="modal-content">
                <div class="model-header">
                    <button type="button" class="close" data-dismiss="modal" ><span>&times;</span></button>
                    <h4 class="model-title">{{title}}</h4>
                </div>
                <div class="model.body">
                    <<ng-content ></ng-content>
                    <ng-content></ng-content>
                </div>
            </div>
        </div>
    </div>
    
    `,

})
export class modelcomponent implements OnInit {
    constructor() { }
@Input() title:string;
@Input() elementid:string;
    ngOnInit(): void { }
}
