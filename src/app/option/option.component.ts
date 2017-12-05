import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OptionsService } from '../shared/options-service/options.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';

@Component({
    selector: 'nto-option',
    templateUrl: './option.component.html',
    styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {
    // private property to store option value
    private _option: any;

    /**
     * Component constructor
     */
    constructor(private _optionService: OptionsService, private _route: ActivatedRoute) {
        this._option = {};
    }

    /**
     * Returns private property _option
     *
     * @returns {any}
     */
    get option(): any {
        return this._option;
    }

    /**
     * OnInit implementation
     */
    ngOnInit() {
        Observable
            .merge(
                this._route.params
                    .filter(params => !!params['id'])
                    .flatMap(params => this._optionService.fetchOne(params['id']))
                    .do(_ => this._option = true)
            )
            .subscribe((opt: any) => this._option = opt);
    }
}
