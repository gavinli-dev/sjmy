import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Showcase } from './model/showcase';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ShowcaseService {
    private url = "http://dotcms.cjlhs.com/api/gallery-item";

    constructor(
        private http: Http
    ) {}

    private extraData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private extraDataByPage(res: Response) {
        let body = res.json();
        if(!body) {
            return {};
        } else {
            return body;
        }
    }

    private handleError(error: Response) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            //errMsg = error.message ? error.message : error.toString();
            errMsg = error;
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    get(id: number): Observable<Showcase> {
        // let index = parseInt(pid) - 1;
        // let newItem: Showcase = showcases[index];
        // return newItem;
        return this.http.get(this.url + '/' + id)
            .map(this.extraData)
            .catch(this.handleError);
    }

    getByPage(id: number, page: number): Observable<Showcase[]> {
        return this.http.get(this.url + '/group/' + id)
            .map(this.extraDataByPage)
            .catch(this.handleError);
    }

    getAll(id: number): Observable<Showcase[]> {
        return this.http.get(this.url + '/group/' + id)
            .map(this.extraData)
            .catch(this.handleError);
    }
}



// let showcases: Array<Showcase> = [
//     {
//         id: '1',
//         title: 'ABCDEFG',
//         groupId: '1',
//         images: [
//           '1.jpg',
//           '2.jpg',
//           '3.jpg',
//           '4.jpg'
//         ]
//     },
//     {
//         id: '2',
//         title: 'ABCDEFG',
//         groupId: '1',
//         images: [
//           '1.jpg',
//           '2.jpg',
//           '3.jpg',
//           '4.jpg'
//         ]
//     },
//     {
//         id: '3',
//         title: 'ABCDEFG',
//         groupId: '1',
//         images: [
//           '1.jpg',
//           '2.jpg',
//           '3.jpg',
//           '4.jpg'
//         ]
//     },
//     {
//         id: '4',
//         title: 'ABCDEFG',
//         groupId: '1',
//         images: [
//           '1.jpg',
//           '2.jpg',
//           '3.jpg',
//           '4.jpg'
//         ]
//     },
//     {
//         id: '5',
//         title: 'ABCDEFG',
//         groupId: '2',
//         images: [
//           '1.jpg',
//           '2.jpg',
//           '3.jpg',
//           '4.jpg'
//         ]
//     },
//     {
//         id: '6',
//         title: 'ABCDEFG',
//         groupId: '2',
//         images: [
//           '1.jpg',
//           '2.jpg',
//           '3.jpg',
//           '4.jpg'
//         ]
//     },
//     {
//         id: '7',
//         title: 'ABCDEFG',
//         groupId: '2',
//         images: [
//           '1.jpg',
//           '2.jpg',
//           '3.jpg',
//           '4.jpg'
//         ]
//     },
//     {
//         id: '8',
//         title: 'ABCDEFG',
//         groupId: '3',
//         images: [
//           '1.jpg',
//           '2.jpg',
//           '3.jpg',
//           '4.jpg'
//         ]
//     },
//     {
//         id: '9',
//         title: 'ABCDEFG',
//         groupId: '3',
//         images: [
//           '1.jpg',
//           '2.jpg',
//           '3.jpg',
//           '4.jpg'
//         ]
//     }
// ];