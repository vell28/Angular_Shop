import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'filtername'
})
export class FilterName implements PipeTransform{
    transform(phones:any){
        return phones.sort()
    }
}