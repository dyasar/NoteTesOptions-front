import { Component, OnInit } from '@angular/core';
/*import {HttpClient} from "@angular/common/http";
/*import {environment} from "../../environments/environment";*/
import "rxjs/add/operator/filter";
import "rxjs/add/operator/defaultIfEmpty";

@Component({
  selector: 'nto-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  //liste des options
  private _options: any[];
  //backendURL
  private _backendURL: any;

    /**
     * Constructeur
     * @param {HttpClient} _http
     */
  constructor(/*private _http: HttpClient*/) {
        this._options = [];
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
     * @returns {any[]}
     */
  get options(): any[] {
    return this._options;
  }


    /**
     * Initialisation
     */
    ngOnInit() {
        /*this._http.get(this._backendURL.allOptions)
            .filter(_ => !!_)
            .defaultIfEmpty([])
            .subscribe((options: any[]) => this._options = options);
    */}

}
