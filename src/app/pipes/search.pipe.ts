import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform{
    transform(phones:any, value:any){
        return phones.filter(phone => {
            return phone.name.includes(value.toUpperCase());
        })
    }
}