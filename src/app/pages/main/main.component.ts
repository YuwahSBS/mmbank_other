import { slideAnimation } from '../animation';
import { SharedService } from 'app/shared/shared.service';
import { Component, OnInit, Renderer2, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
declare var fullpage: any;
import { fullpage } from '../../../../node_modules/fullpage.js';
import {options, fullpage_api} from '../../../../node_modules/fullpage.js/dist/fullpage.extensions.min';
import * as $ from 'jquery';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { trigger, transition, style, animate } from '@angular/animations';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AutoHeightService } from 'ngx-owl-carousel-o/lib/services/autoheight.service';

interface Location {
  address: string;
  phoneNumber: string;
  title: string;
}

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [slideAnimation]
})

export class MainComponent implements AfterViewInit  {
  private toggleButton: any;
  private sidebarVisible: boolean;
  scrolled: boolean = false;
  defaultadd: boolean = true;
  language: string = ''
  languages: any = ['en', 'mm']
  zoom: number = 15;

  openState: boolean = true
  
  title = 'My first AGM project';
  latitude: any = 16.856247182773313
  longitude: any = 96.17112832656602

  branchname: string = 'Parami Branch'
  branchaddress: any = ''
  phoneno: any = ''

  sig : boolean = false
  personal: boolean = true
  corporate: boolean = false
  sme: boolean = false

  selectedTabImage: string = 'default-image-url'; 

  markers: marker[] = [
    {
      lat: 16.85555524050408,
      lng: 96.17127800700473,
      label: 'Parami Branch',
      draggable: false,
      visible: true,
      opacity: 0.6,
      address: 'No(289-B) +(290), Parami Road, Ward (4), South Okkalapa Township, Yangon, Myanmar.',
      phoneno: '01-8500631, 569341, 569619'
    },
    {
      lat: 16.806857,
      lng: 96.139617,
      label: 'Myaynigone Branch',
      draggable: true,
      visible: true,
      opacity: 0.4,
      address: 'No(279), Corner of U Wisara Road & Shan Kone Street, Myaynigone, Sanchaung Township, Yangon, Myanmar.',
      phoneno: '01-2306050, 2306051, 2306053, 2306054, 2306055.'
    },
    {
      lat: 16.8077677,
      lng: 96.1357757,
      label: 'Mahar Myaing Branch',
      draggable: true,
      visible: false,
      opacity: 0.7,
      address: 'No(31), Corner of Pyay Road, & Mahar Myaing Street, Yangon',
      phoneno: ''
    },
    {
      lat: 16.775805761882868,
      lng: 96.16149994572987,
      label: 'Pansodan Branch',
      draggable: true,
      visible: true,
      opacity: 0.4,
      address: 'Building (181/187), Pansodan Street, Kyaukdata Township, Yangon, Myanmar.',
      phoneno: '01-391822, 391823, 391824, 391825.'
    },
    {
      lat: 16.84805131324774,
      lng: 96.15705808627764,
      label: 'Kabar Aye Branch',
      draggable: true,
      visible: true,
      opacity: 0.4,
      address: 'No(54-A), Kabar Aye Pagoda Road, Ward (10), Mayangone Township, Yangon, Myanmar.',
      phoneno: '01-663016, 657942, 657944, 657946, 657947'
    },
    {
      lat: 16.777209,
      lng: 96.169925,
      label: 'Bo Myat Tun Branch',
      draggable: true,
      visible: true,
      opacity: 0.4,
      address: 'No (245), Shine Tower, Bo Myat Htun Street, Ward (10), Botahtaung Township, Yangon, Myanmar.',
      phoneno: '01-9010556, 9010557, 9010558, 9010559, 9010560.'
    },
    {
      lat: 16.848089639114367,
      lng: 96.18239715767137,
      label: 'Thit Sar Road Branch',
      draggable: true,
      visible: true,
      opacity: 0.4,
      address: 'No (11/13), Thitsar Road, (10) Quarter, South Okkalapa Township, Yangon, Myanmar.',
      phoneno: '01-8500790, 8500791, 8500792, 8500793, 8500794.'
    },
    {
      lat: 16.79819664720236,
      lng: 96.1760680645462,
      label: 'Banyardala Branch',
      draggable: true,
      visible: true,
      opacity: 0.4,
      address: 'No (293/295), Banyardala Road, Ahyoegone Quarter, Tarmway Township, Yangon, Myanmar. ',
      phoneno: '01-8604450, 8604451, 8604452, 8604453, 8604454'
    },
    {
      lat: 16.774457,
      lng: 96.144896,
      label: 'Phone Gyi St Branch',
      draggable: true,
      visible: true,
      opacity: 0.4,
      address: 'No(36), Phonegyi Street (Lower Block), Lanmadaw Township, Yangon, Myanmar.',
      phoneno: '01-2301814, 2301815, 2301816, 2301817, 2301818.'
    },
    {
      lat: 16.772629,
      lng: 96.155949,
      label: 'Shwe Bon Thar Branch',
      draggable: true,
      visible: true,
      opacity: 0.4,
      address: 'No (50), Ground Floor, Shwebonthar Street (Lower Block), Pabedan Township, Yangon, Myanmar.',
      phoneno: '01-253218, 253272, 253619.'
    },
    {
      lat: 16.874652,
      lng: 96.055456,
      label: 'Hlaing Thar Yar Branch',
      draggable: true,
      visible: true,
      opacity: 0.4,
      address: 'No(254/B), Sein Pann Myaing Street (Near MeeKhwetZay), Hlaingtharyar Township, Yangon, Myanmar.',
      phoneno: ' 01-9648180, 9648181, 9648182.'
    },
    {
      lat: 16.900585, 
      lng: 96.163485,
      label: 'North Okkalapa Branch',
      draggable: true,
      visible: true,
      opacity: 0.4,
      address: 'No (377-1/2), Thudamar Road, Northokkalapa Township, Yangon, Myanmar.',
      phoneno: '01-9699119, 9699129, 9699138'
    },
    {
      lat: 16.494325,
      lng: 97.623193,
      label: 'Mawlamyaing Branch',
      draggable: true,
      visible: true,
      opacity: 0.4,
      address: 'Building (C), Room (1), Tharthana Beit Man Road, Mawlamyaing Football Stadium Shop, Mawlamyaing, Mon State.',
      phoneno: '01-057-202022, 22023, 21107, 21044, 21077, 21117'
    },
    {
      lat: 16.712906,
      lng: 95.926065,
      label: 'Twantay Branch',
      draggable: true,
      visible: true,
      opacity: 0.4,
      address: 'No (147/Ka Gyi), Corner of Min Ye Kyaw Swar Road & General Sein Lwin Road, Min Paing Ward, Twantay Township, Yangon, Myanmar',
      phoneno: '045 - 50962, 50964, 50965, 50966, 50967, 50968'
    }


  ]
selectedBranch: any;


  customOptions: OwlOptions = {
    loop: true,
      autoplay: true,
      center: true,
      dots: true,
      autoHeight: false,
      autoWidth: false,
    navText: [
      '<img src="assets/images/is-less-than.png" width="40px" alt="">',
      ' <img src="assets/images/is-greater-than.png" width="40px" alt="">'
    ],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      760: {
        items: 1
      },
      1000: {
        items: 1
      }
    },
    nav: false
  }

  

// @ViewChild('owlCarousel') owlCarousel: any;

// triggerRefresh() {
//   if (this.owlCarousel) {
//     this.owlCarousel.refresh();
//   }
// }

simpleSlider = 40;
    doubleSlider = [20, 60];
    state_default: boolean = true;
    focus: any;

  constructor(private element : ElementRef, public shared_ : SharedService) {
    this.selectedBranch = '';
    this.sidebarVisible = false;
   }

   locations: Location[] = [
    { title: 'Parami Branch', address: 'No(289-B) +(290), Parami Road, Ward (4), South Okkalapa Township, Yangon, Myanmar. ', phoneNumber: '01-8500631, 569341, 569619' },
    { title: 'Kabar Aye Branch', address: 'No(54-A), Kabar Aye Pagoda Road, Ward (10), Mayangone Township, Yangon, Myanmar. ', phoneNumber: '01-663016, 657942, 657944, 657946, 657947.' },
    { title: 'Bo Myat Htun Branch', address: 'No (245), Shine Tower, Bo Myat Htun Street, Ward (10), Botahtaung Township, Yangon, Myanmar.', phoneNumber: '01-9010556, 9010557, 9010558, 9010559, 9010560.' },
    { title: 'Myaynigone Branch', address: 'No(279), Corner of U Wisara Road & Shan Kone Street, Myaynigone, Sanchaung Township, Yangon, Myanmar.', phoneNumber: '01-2306050, 2306051, 2306053, 2306054, 2306055.' },
    { title: 'Thitsar Road Branch', address: 'No (11/13), Thitsar Road, (10) Quarter, South Okkalapa Township, Yangon, Myanmar.', phoneNumber: '01-8500790, 8500791, 8500792, 8500793, 8500794.' },
    { title: 'Banyardala Branch', address: 'No (293/295), Banyardala Road, Ahyoegone Quarter, Tarmway Township, Yangon, Myanmar. ', phoneNumber: '01-8604450, 8604451, 8604452, 8604453, 8604454.' },
    { title: 'Pansodan Branch', address: 'Building (181/187), Pansodan Street, Kyaukdata Township, Yangon, Myanmar. ', phoneNumber: '01-391822, 391823, 391824, 391825.' },
    { title: 'Phonegyi Street Branch', address: 'No(36), Phonegyi Street (Lower Block), Lanmadaw Township, Yangon, Myanmar.', phoneNumber: '01-2301814, 2301815, 2301816, 2301817, 2301818.' },
    { title: 'Shwebonthar Branch', address: 'No (50), Ground Floor, Shwebonthar Street (Lower Block), Pabedan Township, Yangon, Myanmar.', phoneNumber: '01-253218, 253272, 253619.' },
  ];

  selectedLocation: Location | null = null;

   ngAfterViewInit(): void {
    this.language = 'en'
    const navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];

    const fullPageInstance = new fullpage('#fullpage', {
      scrollbar: false,
      licenseKey: 'gplv3-license',
      anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
      credits: { 
        enabled: false, 
        label: 'Made with fullPage.js',
        position: 'right'
      },
      afterLoad: (origin, destination, direction) => {
        this.handleSectionScroll();
      },
      onLeave: (origin, destination, direction) => {
        this.handleSectionScroll();
      }
      
    });

    // window.addEventListener('scroll', () => this.handleWindowScroll());

    let depositbtn = document.getElementById('deposit');
    let loanbtn = document.getElementById('loan');
    let servicebtn = document.getElementById('service');
    let promobtn = document.getElementById('promo');
    let branchbtn = document.getElementById('branch');
    let getPromobtn = document.getElementById('getPromo');
    let main = document.getElementById('mainLogo');
    let deposit_link = document.getElementById('deposit_link');
    let loan_link = document.getElementById('loan_link');
    let about_link = document.getElementById('about_link');


    if(depositbtn){
      depositbtn.addEventListener('click', () => {
        fullPageInstance.moveTo(2,1);
      });
    }
    if(deposit_link){
      deposit_link.addEventListener('click', () => {
        fullPageInstance.moveTo(2,1);
        this.sidebarClose()
      });
    }
    if(about_link){
      about_link.addEventListener('click', () => {
        fullPageInstance.moveTo(2,1);
        this.sidebarClose()
      });
    }
    if(loanbtn){
      loanbtn.addEventListener('click', () => {
        fullPageInstance.moveTo(3,1);
      });
    }
    if(loan_link){
      loan_link.addEventListener('click', () => {
        fullPageInstance.moveTo(3,1);
        this.sidebarClose()
      });
    }
    // if(servicebtn){
    //   servicebtn.addEventListener('click', () => {
    //     fullPageInstance.moveTo(4,1);
    //   });
    // }
    if(promobtn){
      promobtn.addEventListener('click', () => {
        fullPageInstance.moveTo(4,1);
      });
    }
    if(branchbtn){
      branchbtn.addEventListener('click', () => {
        fullPageInstance.moveTo(5,1);
      });
    }
    if(getPromobtn){
      getPromobtn.addEventListener('click', () => {
        fullPageInstance.moveTo(4,1);
      });
    }
    if(main){
      main.addEventListener('click', () => {
        fullPageInstance.moveTo(1,1);
      });
    }
   }

   sidebarOpen() {
    const toggleButton = this.toggleButton;
    const html = document.getElementsByTagName('html')[0];
    setTimeout(function(){
        toggleButton.classList.add('toggled');
    }, 500);
    html.classList.add('nav-open');
    this.sidebarVisible = true;
  };
  sidebarClose() {
      const html = document.getElementsByTagName('html')[0];
      this.toggleButton.classList.remove('toggled');
      this.sidebarVisible = false;
      html.classList.remove('nav-open');
  };
  sidebarToggle() {
      if (this.sidebarVisible === false) {
          this.sidebarOpen();
      } else {
          this.sidebarClose();
      }
  };

  //  initOwlOptions() {
  //   console.log('intitlsdfj')
  //   this.customOptions = {
  //     loop: true,
  //     autoplay: true,
  //     center: true,
  //     dots: false,
  //     autoHeight: false,
  //     autoWidth: false,
  //     navText: [
  //       '<img src="assets/images/is-less-than.png" width="40px" alt="">',
  //       '<img src="assets/images/is-greater-than.png" width="40px" alt="">'
  //     ],
  //     responsive: {
  //       0: {
  //         items: 1
  //       },
  //       400: {
  //         items: 1
  //       },
  //       760: {
  //         items: 1
  //       },
  //       1000: {
  //         items: 1
  //       }
  //     },
  //     nav: false
  //   };
  // }


   onLocationChange(selectedLocation: Location) {
    console.log('Selected Location:', selectedLocation);
    this.selectedLocation = selectedLocation;
    this.defaultadd = false
  }

  onTabChange(event: NgbTabChangeEvent) {
    console.log('Tab changed:', event.nextId);
    if( event.nextId == 'ngb-tab-0'){
      //this.sig = true
      this.personal = true
      this.corporate = false
      this.sme = false
    }
    if( event.nextId == 'ngb-tab-1'){
      this.personal = false
      //this.sig = false
      this.corporate = true
      this.sme = false
    }
    if( event.nextId == 'ngb-tab-2'){
      this.personal = false
      //this.sig = false
      this.corporate = false
      this.sme = true
    }
    // if( event.nextId == 'ngb-tab-3'){
    //   this.sme = true
    //   this.sig = false
    //   this.personal = false
    //   this.corporate = false
    // }
}

configureCarousel(){
  
}





  // getimage(type : any){
  //   alert('y')
  //   if(type == 'sig'){
  //     this.sig = true
  //     this.personal = false
  //     this.corporate = false
  //     this.sme = false
  //   }
  //   if(type == 'personal'){
  //     this.personal = true
  //     this.sig = false
  //     this.corporate = false
  //     this.sme = false
  //   }
  //   if(type == 'corporate'){
  //     this.corporate = true
  //     this.sig = false
  //     this.personal = false
  //     this.sme = false
  //   }
  //   if(type == 'sme'){
  //     this.sme = true
  //     this.sig = false
  //     this.personal = false
  //     this.corporate = false
  //   }
  // }

  

  handleSectionScroll() {
    const navbar = document.getElementById('navbar'); // Replace 'navbar' with the actual ID of your navbar
    const activeSection = document.querySelector('.fp-section.active');
    const threshold = 200; // Adjust this value as needed

    if (activeSection) {
      const sectionIndex = Array.from(activeSection.parentElement.children).indexOf(activeSection);
      if (sectionIndex === 0) {
        navbar.classList.remove('scrolled_');
        return; // Exit early if the first section is active
      }

      const sectionRect = activeSection.getBoundingClientRect();
      if (sectionRect.top < threshold) {
        navbar.classList.add('scrolled_');
      } else {
        navbar.classList.remove('scrolled_');
      }
    }
  }

  switchLanguage(language: string) {
    let body_ = document.querySelector('#first') as HTMLElement
    let box = document.getElementById('box-container') as HTMLElement
    this.shared_.switchLanguage(language)
    this.language = language
  }

  showLanguage() {
    let box = document.getElementById('box-container') as HTMLElement
    if (box.style.display == 'block') {
      box.style.display = "none"
      //this.closeSideBar();
      box.style.overflow = "hidden";
    } else {
      box.style.display = "block"
      box.style.overflow = "hidden";
    }
  }

  onBranchSelect() {
    const selectedBranch = this.markers.find(branch => branch.label === this.selectedBranch);
    console.log(selectedBranch);
    this.latitude = Number(selectedBranch.lat)
    this.longitude = Number(selectedBranch.lng)

    this.branchname = selectedBranch.label;
    this.branchaddress = selectedBranch.address;
    this.phoneno = selectedBranch.phoneno
    this.openState = true
    this.defaultadd = false
  }

  gotomap(lat: number, long: number, bname: string, baddress: string) {
    console.log(lat, long, 'testlatlong')
    this.latitude = Number(lat)
    this.longitude = Number(long)

    this.branchname = bname;
    this.branchaddress = baddress;
    this.openState = true
  }

  

  
}

interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
  visible: boolean;
  opacity: number;
  address: string;
  phoneno: string
}
function formChanges() {
  throw new Error('Function not implemented.');
}
