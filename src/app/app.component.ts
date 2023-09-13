import { Component } from '@angular/core';
import { delay, map, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngrx-out-of-date';

  isReadyToShow$ = of(false).pipe(
    delay(1000),
    map(() => true)
  );
}
