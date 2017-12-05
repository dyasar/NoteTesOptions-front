import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from '../shared/note-services/note.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';

@Component({
    selector: 'nto-note',
    templateUrl: './note.component.html',
    styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
    // private property to store option value
    private _note: any[];

    /**
     * Component constructor
     */
    constructor(private _noteService: NoteService, private _route: ActivatedRoute) {
        this._note = [];
    }

    /**
     * Retourne la liste des notes
     *
     * @returns {any[]}
     */
    get note(): any[] {
        return this._note;
    }

    /**
     * OnInit implementation
     */
    ngOnInit() {
        Observable
            .merge(
                this._route.params
                    .filter(params => !!params['id'])
                    .flatMap(params => this._noteService.fetchOne(params['id']))
            )
            .subscribe((note: any[]) => this._note = note);
    }
}
