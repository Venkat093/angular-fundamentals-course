import { Pipe,PipeTransform } from "@angular/core";




@Pipe({name:'duration'})
export class DuratiionPipe implements PipeTransform{
    transform(value:number) :string{
        switch(value)
        {
            case 1:return 'Half Hour'
            case 2 : return 'OneHour'
            case 3 :return  'half day'
            case 4 : return 'full day'
            default :return value.toString();
         }
    }
}