import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  interval,
  Observable,
  observable,
  Subscribable,
  Subscription,
} from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss'],
})
export class ObservableComponent implements OnInit, OnDestroy {
  private firstObs: Subscription = new Subscription();

  constructor() {}

  ngOnInit(): void {
    // this.firstObs = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });

    const customInervalObs = Observable.create(
      (observer: {
        next: (arg0: number) => void;
        error: (arg0: Error) => void;
      }) => {
        let count = 0;
        setInterval(() => {
          observer.next(count);
          if (count > 3) {
            observer.error(new Error('Count is greater 3!'));
          }
          count++;
        }, 1000);
      }
    );

    this.firstObs = customInervalObs.subscribe(
      (data: any) => {
        console.log(data);
      },
      (error: { message: any }) => {
        console.log(error);
        alert(error.message);
      }
    );

    //TODO : operators ---------------------
    // (this.firstObs = customInervalObs.pipe(
    //   filter((data: number) => {
    //     return data > 0;
    //   })
    // )),
    //   map((data: number) => {
    //     return 'Round: ' + (data + 1);
    //   }).subscribe(
    //     (data: any) => {
    //       console.log(data);
    //     },
    //     (error: { message: any }) => {
    //       console.log(error);
    //       alert(error.message);
    //     },
    //     () => {
    //       console.log('completed!');
    //     }
    //   );
  }

  ngOnDestroy(): void {
    this.firstObs.unsubscribe();
  }
}
function subscribe(
  arg0: (data: any) => void,
  arg1: (error: any) => void,
  arg2: () => void
) {
  throw new Error('Function not implemented.');
}
