import { Component } from '@angular/core';

@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  Navlinks = [
    {que:'About', link:'#'},
    {que:'Skills', link:'#'},
    {que:'Experience', link:'#'},
    {que:'Education', link:'#'},
    {que:'Contact', link:'#'}
  ];
}
