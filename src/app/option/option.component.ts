import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nto-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {

    //liste des options
    private _option: any;
    //backendURL
    private _backendURL: any;

    /**
     * Constructeur
     * @param {HttpClient} _http
     */
    constructor(/*private _http: HttpClient*/) {
        this._option = {};
        this._backendURL = {};

        // construction de l'url du backend
        /**let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
         if (environment.backend.port) {
            baseUrl += `:${environment.backend.port}`;
        }

         // construction des url du backend
         Object.keys(environment.backend.endpoints).forEach(k => this._backendURL[k] = `${baseUrl}${environment.backend.endpoints[k]}`);
         */}

    /**
     * Retourne la liste des options
     *
     * @returns {any}
     */
    get option(): any {
        return this._option;
    }


    /**
     * Initialisation
     */
    ngOnInit() {
        /*this._http.get(this._backendURL.allOptions)
            .filter(_ => !!_)
            .defaultIfEmpty([])
            .subscribe((options: any[]) => this._option = options);
    */}

}
