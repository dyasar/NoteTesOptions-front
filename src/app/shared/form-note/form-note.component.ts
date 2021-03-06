import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'nto-form-note',
  templateUrl: './form-note.component.html',
  styleUrls: ['./form-note.component.css']
})
export class FormNoteComponent implements OnInit {
    private _submit$: EventEmitter<any>;
    private _form: FormGroup;

    /**
     * Component constructor
     */
    constructor() {
        this._submit$ = new EventEmitter();
        this._form = this._buildForm();
    }

    /**
     * Returns private property _form
     *
     * @returns {FormGroup}
     */
    get form(): FormGroup {
        return this._form;
    }

    /**
     * Returns private property _submit$
     *
     * @returns {EventEmitter<any>}
     */
    @Output('submit')
    get submit$(): EventEmitter<any> {
        return this._submit$;
    }

    /**
     * OnInit implementation
     */
    ngOnInit() {
    }


    /**
     * Envoie du formulaire
     */
    submit(note: any) {
        this._submit$.emit(note);
    }

    /**
     * Construction du formulaire
     *
     * @returns {FormGroup}
     *
     * @private
     */
    private _buildForm(): FormGroup {
        return new FormGroup({
            id: new FormControl(''),
            option_id: new FormControl(),
            commentaire: new FormControl('', Validators.compose([
                    Validators.required])),
            note_prof: new FormControl('', Validators.compose([
                Validators.required])),
            note_option: new FormControl('', Validators.compose([
                Validators.required])),
            note_comprehension: new FormControl('', Validators.compose([
                Validators.required])),
            note_difficulte_examen: new FormControl('', Validators.compose([
                Validators.required]))
        });
    }
}
