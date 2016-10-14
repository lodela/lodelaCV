import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component'

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  quien = {nombre:'Norberto Lodela', queHace:'Web Designer FrontEnd Developer'};
  navClass = 'navbar';
}
