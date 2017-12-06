import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { OptionsService } from '../shared/options-service/options.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';
import {NoteService} from "../shared/note-services/note.service";

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
    constructor(private _optionService: OptionsService, private _notesService: NoteService, private _route: ActivatedRoute, private _router: Router) {
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

    /**
     * Function to delete one option
     *
     * @param option
     */
    delete(option: any) {
        this._optionService
            .delete(option.id)
            .subscribe((opt: any[]) => this._option = opt);
    }

    ajouter(note: any) {
        note["option_id"] = this._option.id;
        this._notesService
            .create(note)
            .subscribe() ,
            this._router.navigate(['/option', this._option.id]);

    }

}
