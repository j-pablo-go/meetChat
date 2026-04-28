import { Component, inject, signal } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { IFieldForm } from '../../module/commons-interfaces';

@Component({
  selector: 'app-form',
  imports: [],
  templateUrl: './form.html',
  styleUrl: './form.scss'
})
export class Form {
public dataForm = inject(RequestService);
public fields = signal<IFieldForm[]>(this.dataForm.getFieldForm());
}
