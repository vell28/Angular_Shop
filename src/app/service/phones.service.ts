import {Injectable} from '@angular/core';
import {ItemData} from '../mockData';

@Injectable()
export class PhonesService {
    getPhones(){
        return Promise.resolve(ItemData);
    }
    
    getPhone(id: number): Promise<any> {
        return this.getPhones()
            .then(phones => phones.find(phone => phone.id === id));
    }
    
    
}