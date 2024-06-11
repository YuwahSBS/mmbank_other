import { Component, OnInit, Renderer2, ViewChild, ElementRef, HostListener } from '@angular/core';
declare var fullpage: any;
import { ViewportScroller } from "@angular/common";
import {options, fullpage_api} from 'fullpage.js/dist/fullpage.extensions.min';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: false,
    autoHeight: false,
    autoWidth: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      }
    }
  }

  // Constructor (if needed)
  constructor(private scroller: ViewportScroller) {}

  scrolled: boolean = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const threshold = 200; // Adjust this value as needed
    this.scrolled = scrollOffset > threshold;
  }

  ngOnInit(): void {
    // new fullpage('#fullpage', {
    //   licenseKey: 'gplv3-license',
    //   sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE'],
    //   anchors: ['section1', 'section2', 'section3'],
    //   menu: '#menu',
    //   autoScrolling:true
    // });

    // $(document).on('click', '#moveTo', function(){
    //   alert('t')
    //   fullpage_api.moveSectionDown();
    // });
  }


}
