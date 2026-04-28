import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Ui } from '../../services/ui';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-header',
  imports: [Navbar, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit {
  public ui = inject(Ui);

  isScrolled = false;

  ngOnInit(): void {

  }



}
