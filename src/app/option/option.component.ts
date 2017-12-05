/*import {ActivatedRoute} from '@angular/router';
import { OptionsService } from '../shared/options-service/options.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/mergeMap';
import 'rxjs/add/observable/filter';*/
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'nto-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {

    // une option
    private _option: any;

    /**
     * Constructeur
     *
     * @param _optionsService
     */
    constructor(/*private _optionsService: OptionsService, private _route: ActivatedRoute*/) {
        this._option = {};
    }

    /**
     * Retourne une option
     *
     * @returns {any}
     */
    get option(): any[] {
        return this._option;
    }

    /**
     * Initialisation
     */
    ngOnInit() {
    /*    Observable
            .merge(
                this._route.params
                    .filter(params => !!params['id'])
                    .flatMap(params => this._optionsService.fetchOne(params['id']))
            )
            .subscribe((opt: any) => this._option = opt);
    */}


}
