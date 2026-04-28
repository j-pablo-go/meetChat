import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Ui {
  private _showForm = signal(false);

  public showForm = this._showForm.asReadonly();

  constructor() {}

  setForm() {
    this._showForm.update(v => !v)
  }


}
