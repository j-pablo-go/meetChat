import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./component/header/header";
import { Footer } from "./component/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  isScrolled = false;

    @HostListener('window:scroll', [])
    onWindowScroll() {
      // Si el scroll vertical es mayor a 10px, activamos la sombra
      this.isScrolled = window.scrollY > 10;
    }

}
