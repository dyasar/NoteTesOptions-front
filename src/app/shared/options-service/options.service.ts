import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/defaultIfEmpty';
import 'rxjs/add/operator/filter';

@Injectable()
export class OptionsService {
    // private property to store all backend URLs
    private _backendURL: any;

    constructor(private _http: HttpClient) {
        this._backendURL = {};

        // build backend base url
        let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
        if (environment.backend.port) {
            baseUrl += `:${environment.backend.port}`;
        }

        // build all backend urls
        Object.keys(environment.backend.endpoints).forEach(k => this._backendURL[k] = `${baseUrl}${environment.backend.endpoints[k]}`);
    }

    /**
     * Retourne la liste de toutes les options
     *
     * @returns {Observable<any[]>}
     */
    fetch(): Observable<any[]> {
        return this._http.get(this._backendURL.allOptions, this._options())
            .filter(_ => !!_)
            .defaultIfEmpty([]);
    }

    /**
     * Retourne une option en fonction de l'id
     *
     * @param id
     *
     * @returns {Observable<any>}
     */
    fetchOne(id: string): Observable<any> {
        return this._http.get(this._backendURL.oneOption.replace(':id', id), this._options());
    }

    /**
     * Function to create a new option
     *
     * @param option
     *
     * @returns {Observable<any>}
     */
    create(option): Observable<any> {
        return this._http.post(this._backendURL.allOptions, option, this._options());
    }

    /**
     * Function to update one option
     *
     * @param option
     *
     * @returns {Observable<any>}
     */
    update(option: any): Observable<any> {
        return this._http.put(this._backendURL.oneOption.replace(':id', option.id), option, this._options());
    }

    /**
     * Function to delete one option for current id
     *
     * @param id
     *
     * @returns {Observable<any[]>}
     */
    delete(id: string): Observable<any[]> {
        return this._http.delete(this._backendURL.oneOption.replace(':id', id), this._options())
            .filter(_ => !!_)
            .defaultIfEmpty([]);
    }

    /**
     * Function to return request options
     *
     * @returns {any}
     */
    private _options(headerList: Object = {}): any {
        const headers = new HttpHeaders(Object.assign({ 'Content-Type': 'application/json' }, headerList));
        return { headers };
    }
}
