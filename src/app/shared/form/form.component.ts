import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'nto-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnChanges {
    // private property to store update mode flag
    private _isUpdateMode: boolean;
    // private property to store model value
    private _model: any;
    // private property to store cancel$ value
    private _cancel$: EventEmitter<any>;
    // private property to store submit$ value
    private _submit$: EventEmitter<any>;
    // private property to store form value
    private _form: FormGroup;

    /**
     * Component constructor
     */
    constructor() {
        this._submit$ = new EventEmitter();
        this._cancel$ = new EventEmitter();
        this._form = this._buildForm();
    }

    /**
     * Sets private property _model
     *
     * @param model
     */
    @Input()
    set model(model: any) {
        this._model = model;
    }

    /**
     * Returns private property _model
     *
     * @returns {any}
     */
    get model(): any {
        return this._model;
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
     * Returns private property _isUpdateMode
     *
     * @returns {boolean}
     */
    get isUpdateMode(): boolean {
        return this._isUpdateMode;
    }

    /**
     * Returns private property _cancel$
     *
     * @returns {EventEmitter<any>}
     */
    @Output('cancel')
    get cancel$(): EventEmitter<any> {
        return this._cancel$;
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
     * Function to handle component update
     *
     * @param record
     */
    ngOnChanges(record) {
        if (record.model && record.model.currentValue && record.model.currentValue.address) {
            this._model = record.model.currentValue;
            this._isUpdateMode = true;
            this._form.patchValue(this._model);
        } else {
            this._model = {address: {}};
            this._isUpdateMode = false;
        }
    }

    /**
     * Function to emit event to cancel process
     */
    cancel() {
        this._cancel$.emit();
    }

    /**
     * Function to emit event to submit form and person
     */
    submit(person: any) {
        this._submit$.emit(person);
    }

    /**
     * Function to build our form
     *
     * @returns {FormGroup}
     *
     * @private
     */
    private _buildForm(): FormGroup {
        return new FormGroup({
            id: new FormControl(''),
            nom: new FormControl('', Validators.compose([
                Validators.required, Validators.minLength(2)
            ])),
            description: new FormControl('', Validators.compose([
                Validators.required, Validators.minLength(10)
            ])),
            prof: new FormControl('', Validators.compose([
                Validators.required, Validators.minLength(2)
            ]))
        });
    }
}
