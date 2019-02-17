import { SwUpdate } from '@angular/service-worker';
import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'routing-app';
public ngOnInit(): void {
        // if (this.null.isEnabled) {
        //     this.null.available.subscribe((evt) => {
        //         console.log('service worker updated');
        //     });
        //     this.null.checkForUpdate().then(() => {
        //         // noop
        //     }).catch((err) => {
        //         console.error('error when checking for update', err);
        //     });
        // }
      }


 constructor(private swUpdate: SwUpdate) {}
}
