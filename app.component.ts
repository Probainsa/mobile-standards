import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <nav class='navbar navbar-expand-lg navbar-light bg-light'>
    <a class='navbar-brand'><h1>{{pageTitle}}</h1></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" [routerLink]="['/welcome']">welcome</a>
          </li>    
          <li class="nav-item">
              <a class="nav-link" [routerLink]="['/about']">about vita</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" [routerLink]="['/fmd']">fasting mimicking diet</a>
          </li>
        </ul>
    </div>
      <button class="btn btn-outline-success my-2 my-sm-0 text-white text-uppercase" style="background-color: #5293A7;"><a [routerLink]= "['/plan']">my diet plan</a></button>
  </nav>

  <div class='container'>
    <router-outlet></router-outlet>
  </div>
  `
})
export class AppComponent {
  pageTitle: string = 'Vita';
}
 