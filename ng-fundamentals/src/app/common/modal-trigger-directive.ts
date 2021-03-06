import { Directive, ElementRef, Inject, Input, OnInit } from "@angular/core";
import { JQ_TOKEN } from "./jquery";

@Directive({
    selector:'[model-trigger]'
})
export class MOdeltrigger implements OnInit

{
    private el:HTMLElement;
    @Input('modal-trigger')  modalid:string;
    constructor(ref:ElementRef
        ,@Inject(JQ_TOKEN) private $: any) {
            this.el=ref.nativeElement
        
    }
    ngOnInit()
    {
        this.el.addEventListener('click',e=>{
             this.$(`#${this.modalid}`).modal({})
            })
    }
}