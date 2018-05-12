import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GamesService {

  constructor(private http : Http) { }

  callGame() : Observable<any> {
  	return this.http.get('http://starlord.hackerearth.com/gamesext')
  			.map((response: Response) => <any>response.json())
  			.catch(this.handleError);
  }

  private handleError(error : Response |  any) {
  	console.log(error);
  	return Observable.throw(error || 'Server Error');
  }

}
