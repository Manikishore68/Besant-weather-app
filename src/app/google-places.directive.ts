declare function require(path: string): any;
// var google = require('@google/maps');
import { Directive, ElementRef, OnInit } from '@angular/core';
// const google = require('@types/googlemaps');

@Directive({
  selector: '[google-place]'
})
export class GooglePlacesDirective implements OnInit {
  private element: HTMLInputElement;

  constructor(private elRef: ElementRef) {
    //elRef will get a reference to the element where
    //the directive is placed
    this.element = elRef.nativeElement;
  }

  ngOnInit() {
    // const autocomplete = new google.maps.places.Autocomplete(this.element);
  }

}