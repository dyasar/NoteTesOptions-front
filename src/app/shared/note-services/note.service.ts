import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/defaultIfEmpty';
import 'rxjs/add/operator/filter';

@Injectable()
export class NoteService {
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
     * Retourne les notes en fonction de l'id de l'option
     *
     * @param id
     *
     * @returns {Observable<any>}
     */
    fetchOne(id: string): Observable<any[]> {
             return this._http.get(this._backendURL.getNote.replace(':option_id', id), this._note())
                .filter(_ => !!_)
                .defaultIfEmpty([]);
    }

    /**
     * Function to create a new note
     *
     * @param note
     *
     * @returns {Observable<any>}
     */
    create(note): Observable<any> {
        delete note.id;
        return this._http.post(this._backendURL.createNote, note, this._note());
    }


    /**
     * Function to return request note
     *
     * @returns {any}
     */
    private _note(headerList: Object = {}): any {
        const headers = new HttpHeaders(Object.assign({ 'Content-Type': 'application/json' }, headerList));
        return { headers };
    }
}
