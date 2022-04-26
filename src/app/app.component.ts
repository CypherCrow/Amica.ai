import { Component } from '@angular/core';

//@Component annotation: decorator function that specifies Angular metadata for component
@Component({
  // CSS element selector
  // matches name of HTML element that identifies this component with a parent component's template
  selector: 'app-root',
  // location of component's HTML template file
  templateUrl: './app.component.html',
  // location of component's private CSS styles
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Amica.ai';
}
