import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import {Observable} from 'rxjs';
import  'rxjs/add/operator/map';
import {SCHOOLINFO} from './school-data';

@Injectable()

export class HomeService{
constructor(private http:Http){

}

getSchoolInfo():Observable<any>{
    // return this.http.get('http://localhost:3000/api/schoolInfo').map(
        
    //     response=>response.json()
    //     );
    return SCHOOLINFO;
}
}