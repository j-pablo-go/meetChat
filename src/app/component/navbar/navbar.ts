import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { IlinkConfig } from '../../module/commons-interfaces';
import { RequestService } from '../../services/request.service';
import { Ui } from '../../services/ui';
import { Form } from "../form/form";

@Component({
  selector: 'app-navbar',
  imports: [Form, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  public ui = inject(Ui);
  public request = inject(RequestService);
  public links = signal<IlinkConfig[]>(this.request.getLinkConfig());




}
