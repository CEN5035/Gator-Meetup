import {Component, OnInit, Inject} from '@angular/core';
import { GetMeetupsService } from './get-meetups.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';
import { Router, ActivatedRoute } from '@angular/router';
import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';
import { CarouselService } from 'angular4-carousel';
import {
  debounceTime, distinctUntilChanged, switchMap, startWith
} from 'rxjs/operators';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material';
import { GetMeetupDetailsService } from './show-meetup.service';

/**
 * @title Dynamic grid-list
 */
@Component({
  selector: 'app-grid',
  templateUrl: 'grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {
  meetups$: Observable<Object>;
  meetupDetail$: Observable<Object>;
  private searchTerms = new Subject<string>();
  selectedLoc: any;
  isLocationSet = false;
  mdialog;

  constructor(public meetupsService: GetMeetupsService, private router: Router, private x: CarouselService, 
    public dialog: MatDialog, public getMeetupService: GetMeetupDetailsService ) {
    this.meetups$ = meetupsService.getMeetups();
  }

  public imageSources: string[] = [
    'https://ak9.picdn.net/shutterstock/videos/5117969/thumb/1.jpg',
    'http://ak2.picdn.net/shutterstock/videos/18324082/thumb/3.jpg',
    'https://ak8.picdn.net/shutterstock/videos/3159418/thumb/7.jpg?i10c=img.resize(height:160)',
    'https://ak8.picdn.net/shutterstock/videos/11062748/thumb/1.jpg',
    'https://ak1.picdn.net/shutterstock/videos/8221801/thumb/1.jpg'
  ];

  public config: ICarouselConfig = {
    verifyBeforeLoad: true,
    log: false,
    animation: true,
    animationType: AnimationConfig.SLIDE,
    autoplay: true,
    autoplayDelay: 2000,
    stopAutoplayMinWidth: 768
  };

  // search(term: string): void {
  //   console.log(term);
  //   this.searchTerms.next(term);
  // }

  onRowClicked(id: string): void {
    console.log(id);
    window.localStorage.setItem('meetup', id);

    let config = {
      disableClose: false,
      width: '600px',
      height: '600px',
      data: {}
    };

    let details = this.getMeetupService.getMeetupDetails();

    details.subscribe(
      data => {
          console.log("%o ", data);
          this.meetupDetail$ = data;
          config.data = data;
          this.dialog.open(DialogOverviewExampleComponent, config);
      });

      /*const dialogRef = this.dialog.open(DialogOverviewExampleComponent, {
        width: '600px',
        height  : '600px'
      });*/

    //this.router.navigate(['/show-meetup']);
  }

  onLocationSelection(selectedLoc: any) {
    this.selectedLoc = selectedLoc;
    this.isLocationSet = true;
  }

  onSearchClick(searchTerm) {
    console.log(searchTerm);
    if (this.isLocationSet) {
      const coordinates = [this.selectedLoc.geometry.location.lat, this.selectedLoc.geometry.location.lng];
      console.log(coordinates);
      this.meetups$ = this.meetupsService.searchNearbyMeetups(searchTerm, coordinates);
    } else {
      this.meetups$ = this.meetupsService.searchMeetups(searchTerm);
    }
  }

  ngOnInit(): void {
    // this.meetups$ = this.searchTerms.pipe(
    //   // wait 300ms after each keystroke before considering the term
    //   debounceTime(300),
    //   // retrieve all items initially
    //   startWith(''),
    //   // ignore new term if same as previous term
    //   distinctUntilChanged(),
    //   // switch to new search observable each time the term changes
    //   switchMap((term: string) => this.meetupsService.searchMeetups(term)),
    // );
    this.meetups$ = this.meetupsService.searchMeetups('');
  }
}

@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: 'meetup-detail-dialog.html',
})
export class DialogOverviewExampleComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
