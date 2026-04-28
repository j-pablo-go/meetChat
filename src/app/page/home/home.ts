import { Component, inject, signal } from "@angular/core";
import { IContent } from "../../module/commons-interfaces";
import { RequestService } from "../../services/request.service";

Component
@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  public request = inject(RequestService);
  public contents = signal<IContent[]>(this.request.getContent());


}
