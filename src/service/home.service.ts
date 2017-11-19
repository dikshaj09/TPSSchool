import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import {Observable} from 'rxjs';
import  'rxjs/add/operator/map';

@Injectable()

export class HomeService{
constructor(private http:Http){

}

getSchoolInfo():Observable<any>{
    return this.http.get('http://localhost:3000/api/schoolInfo').map(
        
        response=>response.json()
        );
}
}