import { Router, RouterLink, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routers',
  templateUrl: './routers.component.html',
  styleUrls: ['./routers.component.scss'],
})
export class RoutersComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  user!: { id: number; name: string }; //= { id: 123, name: 'Admin' };
  id: any = '';

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.user = {
        id: params['id'],
        name: params['name'],
      };
    });
  }

  onClick() {
    this.router.navigate(['/link5']); //hooks component
  }
  onReload() {
    this.router.navigate(['/link6'], { relativeTo: this.route });
  }
  onFetchinngParam() {
    // this.user = {
    //   id: this.route.snapshot.params['id'],
    //   name: this.route.snapshot.params['name'],
    // };
  }

  //todo 138
  onLoadWithQueryParamsAndFragments() {
    this.router.navigate(['/link6b', 1, 'edit'], {
      queryParams: { allowEdit: '1' },
      fragment: 'loading',
    });
  }
}
