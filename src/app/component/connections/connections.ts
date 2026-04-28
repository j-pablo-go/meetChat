import { Component, inject, signal } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { IColumnTable, IConnection } from '../../module/commons-interfaces';

@Component({
  selector: 'app-connections',
  imports: [],
  templateUrl: './connections.html',
  styleUrl: './connections.scss'
})
export class Connections {
public dataConnections = inject(RequestService);
public dataColumns = inject(RequestService);
public rows = signal<IConnection[]>(this.dataConnections.getConnection());
public columns = signal<IColumnTable[]>(this.dataColumns.getColumn());

}
