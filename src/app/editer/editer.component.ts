import { Component, OnInit } from '@angular/core';
import {OptionsService} from '../shared/options-service/options.service';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';


@Component({
  selector: 'nto-editer',
  templateUrl: './editer.component.html',
  styleUrls: ['./editer.component.css']
})
export class EditerComponent implements OnInit {
  private _option: any;

    constructor(private _optionsService: OptionsService, private _router: ActivatedRoute) { }

  ngOnInit() {
      this._router.params
          .map((params: any) => params.id)
          .flatMap((id: string) => this._optionsService.fetchOne(id))
          .subscribe((option: any) => this._option = option);
  }

    get option(): any {
        return this._option;
    }

    set option(res: any) {
        this._option = res;
    }

    update(option: any) {
        console.log('aaa' + this._option.id);
        option['id'] = this._option.id;
        this._optionsService.update(option)
            .subscribe((opt: any) => this._option = opt);
    }

}
