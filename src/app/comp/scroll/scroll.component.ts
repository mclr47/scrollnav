
import { ActivatedRoute,Router } from '@angular/router';
// import { FragmentService } from './../../service/fragment.service';
import { Component, OnInit , ChangeDetectionStrategy,ChangeDetectorRef,
  ElementRef, ViewChild, HostListener, AfterViewInit } from '@angular/core';
import {FixedSizeVirtualScrollStrategy, VIRTUAL_SCROLL_STRATEGY,VirtualScrollStrategy,
  
  ScrollDispatcher, CdkVirtualScrollViewport} from '@angular/cdk/scrolling';
import {  Input, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {Location, LocationStrategy, PathLocationStrategy, PlatformLocation,
 } from '@angular/common';
// 
// export class CustomVirtualScrollStrategy extends FixedSizeVirtualScrollStrategy {
  // constructor() {
    // super(50, 250, 500);
    // super();
//     @param itemSize — The size of the items in the virtually scrolling list.
// @param minBufferPx — The minimum amount of buffer (in pixels) before needing to render more
// @param maxBufferPx — The amount of buffer (in pixels) to render when rendering more.
//   }
// }
// 
export interface HashExist {
  hashVisible: boolean;
  hashName?: string;
}
@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
   providers: [{provide: VIRTUAL_SCROLL_STRATEGY,useClass:ScrollDispatcher},Location,
     {provide: LocationStrategy, useClass: PathLocationStrategy}],
     
   
// providers: [Location, {provide: LocationStrategy, useClass: ScrollComponent}],
})
export class ScrollComponent implements OnInit , AfterViewInit{
  // items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
  items = Array.from({length: 11}).map((_, i) => `Item #${i}`);
  //  Position:String = 'start'|'mid'| 'end'
  start=0;
  scrollToPage = ['aaa','bbb','ccc','ddd','eee','fff','ggg','hhh','iii','jjj','kkk'] ;
  activeScrollIndex:Observable<number>;
  activatedRouteFragment = this.activatedRoute.fragment;
  activeFragmentSnapShot;
  windowLocation;
  indexFocus;
  activeFragment$: BehaviorSubject<string> = new BehaviorSubject(window.location.hash.valueOf());
  spyHash: HashExist= { hashVisible: false};   
  spyHashCurrent: HashExist;

  @ViewChild(CdkVirtualScrollViewport) viewPort: CdkVirtualScrollViewport; 
  //  @HostListener('window:scroll',['$event']) onScrollEvent($event){
  //   window.onhashchange (locationHashChanged)
  //  }

  constructor(
    // private fragmentService:FragmentService,
    private renderer: Renderer2, 
    @Inject(PLATFORM_ID) private platformId: Object,
    public activatedRoute:ActivatedRoute ,
    private router:Router,
    private ref: ChangeDetectorRef,
    private scrollDispatcher:ScrollDispatcher,
    private platformLocation : PlatformLocation,
    private location :Location) { 
      // this.activatedRoute.fragment.subscribe(
      //   (frag)=>{
      //     console.log(frag);
      //     this.activeFragment = frag;
      //   }
      // );
      // this.ref.detectChanges();
      // this.activatedRoute.snapshot.fragment.valueOf();
      // this.location.
      // this.platformLocation.onHashChange(this.locationChangeListener)
        // console.log(hash);
       
      
    }

  ngOnInit(): void {
    console.log('active fragment$$$$$ ' + this.activeFragment$.getValue())
    // window.onload = this.isVisible();
       // window.onhashchange = this.locationHashChanged;
    // this.activatedRoute.fragment.subscribe(
    //   (frag)=>{
    //     console.log(frag);
    //     this.activeFragment = frag;
    //     const fragmentElement = document.querySelector('#'+frag);
    //     if ( fragmentElement ){
          
    //         setTimeout(() => {
    //         fragmentElement.scrollIntoView({behavior: 'smooth', block: 'start', 
    //         inline: 'nearest'});
    //         this.scroll(this.scrollToPage.indexOf(frag));
    //         }, 0);
    //     }
    // this.renderer.listen(window,'onhashchange', (event)=>{
    //      console.log('********* changing hash ******************')
     
    // window.onhashchange = this.funcOnHashChange;
    // this.activatedRouteFragment.subscribe(
    //   (frag)=>{
    //     console.log(frag);
    //     if(frag!=null && frag!=undefined)
    //       {  console.log(this.scrollToPage.indexOf(frag));
    //         // this.scroll(this.scrollToPage.indexOf(frag));}
    //   } 
    // }
    // );
  // this.renderer.listen(window, 'scroll', (event) => {
    
  //     // console.log (window.location.hash.valueOf().toString());
  //     // this.windowLocation=window.location.hash.valueOf().toString()
  //     this.scrollToPage.forEach( (val)=>{
  //       console.log('value of renderer '+val);
  //       console.log('#'+val);
  //       console.log(this.scrollToPage.indexOf(val));
  //     if (this.isVisible(document.querySelector('#'+val) as HTMLElement)) {
  //       this.activeFragment$.next(val);
  //       // this.activatedRoute.snapshot.fragment
  //       this.scroll(this.scrollToPage.indexOf(val));}
  //     }
  //     )});
    //   }
    // );
    // this.ref.detectChanges();
  //   window.addEventListener("onhashchange", function () {
  //     alert("Here");
  // });
  //  this.renderer.listen(window,'onhashchange', (event)=>{
  //    console.log('********* changing hash ******************')
  //  });
//     this.renderer.listen(window,'scroll', (event) => {
//       console.log('......renderer scrolled ....onInit');
//       // if ( this.isVisible(document.querySelector('#iii')).hashVisible ===true){
//       //   console.log('hash identified at iiiiiiiiii')
//       // }
//       // else {console.log('hash not found')}
//       console.log(this.spyHash.hashName);
// //  console.log(location.hash.valueOf());
//     //  this.viewPort.scrollToIndex(
//       //  this.scrollToPage.indexOf(    this.getCurrentHash().toString().substring(8) ))
//       // this.ref.detectChanges();
//       console.log(this.getCurrentHash());
//         //   if (this.isVisible(document.querySelector('#ddd') as HTMLElement)) {
//         // this.activeFragment$.next('ddd');}
//     });
    // this.scrollToPage.includes
    // console.log (window.location.hash.valueOf.toString());
    // this.ref.detectChanges();
    this.renderer.listen(window, 'scroll', (event) => {
      // console.log (window.location.hash.valueOf().toString());
      // this.windowLocation=window.location.hash.valueOf().toString()
      // this.scrollToPage.filter((val,index)=>{
      //   if (this.isVisible(document.querySelector('#'+
      //   this.activeFragment$.getValue()) as HTMLElement))

      // })
      console.log('Platform location .....&&&&& '+this.platformLocation.href);
       this.location.subscribe((frag )=>
      console.log(frag + 'this comes from location *****class constructor and service******'));
      // console.log ('Platform location: ****'+this.platformLocation.getBaseHrefFromDOM());
      if (this.isVisible(document.querySelector('#aaa') as HTMLElement)) {
        this.activeFragment$.next('aaa');
        this.router.navigate(['./scroll'],{fragment:'aaa'});
        // this.activatedRoute.snapshot.fragment
        this.scroll(0);
      } else if (this.isVisible(document.querySelector('#bbb') as HTMLElement)) {
         this.activeFragment$.next('bbb');
         this.router.navigate(['./scroll'],{fragment:'bbb'});
        this.scroll(1);
      } else if (this.isVisible(document.querySelector('#ccc') as HTMLElement)) {
        this.activeFragment$.next('ccc');
        this.router.navigate(['./scroll'],{fragment:'ccc'});
        this.scroll(2);
      } 
      else if (this.isVisible(document.querySelector('#ddd') as HTMLElement)) {
         this.activeFragment$.next('ddd');
         this.router.navigate(['./scroll'],{fragment:'ddd'});
        this.scroll(3);
      } 
      else if (this.isVisible(document.querySelector('#eee') as HTMLElement)) {
         this.activeFragment$.next('eee');
         this.router.navigate(['./scroll'],{fragment:'eee'});
        this.scroll(4);
      } 
      else if (this.isVisible(document.querySelector('#fff') as HTMLElement)) {
        this.activeFragment$.next('fff');
        this.router.navigate(['./scroll'],{fragment:'fff'});
        this.scroll(5);
      } 
      else if (this.isVisible(document.querySelector('#ggg') as HTMLElement)) {
         this.activeFragment$.next('ggg');
         this.router.navigate(['./scroll'],{fragment:'ggg'});
        this.scroll(6);
      } 
      else if (this.isVisible(document.querySelector('#hhh') as HTMLElement)) {
         this.activeFragment$.next('hhh');
         this.router.navigate(['./scroll'],{fragment:'hhh'});
        this.scroll(7);
      } 
      else if (this.isVisible(document.querySelector('#iii') as HTMLElement)) {
         this.activeFragment$.next('iii');
         this.router.navigate(['./scroll'],{fragment:'iii'});
        this.scroll(8);
      } 
      else if (this.isVisible(document.querySelector('#jjj') as HTMLElement)) {
        this.activeFragment$.next('jjj');
        this.router.navigate(['./scroll'],{fragment:'jjj'});
        console.log(this.isVisible(document.querySelector('#jjj') as HTMLElement))
        this.scroll(9);
      } 
      else if (this.isVisible(document.querySelector('#kkk') as HTMLElement)) {
         this.activeFragment$.next('kkk');
         this.router.navigate(['./scroll'],{fragment:'kkk'});
        this.scroll(10);
      } 
    
      //  this.ref.detectChanges();
    
    });


  }

  ngAfterViewInit(){
    this.activeScrollIndex = this.viewPort.scrolledIndexChange;
    this.viewPort.scrolledIndexChange.subscribe((index)=>
    {console.log(index);
      console.log(this.viewPort.getViewportSize());
      console.log(this.viewPort.getElementRef())
      this.indexFocus = index;

      this.router.navigate(['./scroll'],{fragment:this.scrollToPage[index]});
    
          
        });
       
    // this.ref.detectChanges();
    this.scrollDispatcher.scrolled()
    .subscribe(event => {
      console.log('scrolled........');
       console.log(this.getCurrentHash())
      console.log(this.getCurrentHash())
    });
    // this.scrollDispatcher.ancestorScrolled().subscribe()
   
  }
// *******************

  currentElement: string; 

  // @ViewChild(CdkVirtualScrollViewport) viewPort: CdkVirtualScrollViewport; 
  // @HostListener('window:scroll',['$event']) onScrollEvent($event){
  //   window.onhashchange = this.locationHashChanged;
  // }
  locationHashChanged(){

    // this.activatedRoute.fragment.subscribe(
    //   (frag)=>{
    //     console.log(frag);
    //     this.activeFragment = frag;
    //     const fragmentElement = document.querySelector('#'+frag);
    //     if ( fragmentElement ){
          
    //         setTimeout(() => {
    //         fragmentElement.scrollIntoView({behavior: 'smooth', block: 'start', 
    //         inline: 'nearest'});
    //         this.scroll(this.scrollToPage.indexOf(frag));
    //         }, 0);
    //     }

    //   }
    // );
    // this.scroll(this.scrollToPage.indexOf(location.hash));
    // console.log(this.scrollToPage.indexOf(location.hash));
 
  }
  
  funcOnHashChange(){
    console.log('###### changing the hash ##########')
  }
   updateVerticalScroll(event): void {
 
  }
 getCurrentHash() {
    return decodeURIComponent(this.platformLocation.hash.replace(/^#\/scroll#/, ''));
    // this.platformLocation.onHashChange(hash=>{
    //   console.log(hash);
    // })
  
  }

 locationChangeListener(){
   console.log(this.activatedRoute.fragment)
 }
  scroll(position) {
   
    // this.viewPort.scrollToIndex(position, 'smooth');
    this.viewPort.scrollToIndex(position);
  }

  isVisible(elem: HTMLElement) {
  //  
  
  // 

    if (!(elem instanceof Element)) {
      throw Error('DomUtil: elem is not an element.');
    }

    const style = getComputedStyle(elem);

    if (style.display === 'none') {
      // this.spyHash.hashVisible = false;
       return false;
      
    }

    if (style.visibility !== 'visible') {
      this.spyHash.hashVisible = false;
      // return false;
    }

    if (+style.opacity < 0.1) {
      // this.spyHash.hashVisible = false;
      return false;
    }

    if (
      elem.offsetWidth +
        elem.offsetHeight +
        elem.getBoundingClientRect().height +
        elem.getBoundingClientRect().width ===
      0
    ) {
      // this.spyHash.hashVisible = false;
       return false;
    }

    const elemCenter = {
      x: elem.getBoundingClientRect().left + elem.offsetWidth / 2,
      y: elem.getBoundingClientRect().top + elem.offsetHeight / 2,
    };

    if (elemCenter.x < 0) {
       return false;
      // this.spyHash.hashVisible = false;
    }

    if (elemCenter.x > (document.documentElement.clientWidth || window.innerWidth)) {
       return false;
      // this.spyHash.hashVisible = false;
    }

    if (elemCenter.y < 0) {
       return false;
      // this.spyHash.hashVisible = false;
    }

    if (elemCenter.y > (document.documentElement.clientHeight || window.innerHeight)) {
      return false;
      // this.spyHash.hashVisible = false;
    }

    let pointContainer: any = document.elementFromPoint(elemCenter.x, elemCenter.y);
    do {
      if (pointContainer === elem) {
        console.log(elem.id);
        this.spyHash.hashVisible = true;
        this.spyHash.hashName = elem.id;
        this.activeFragment$.next(elem.id);
        return true;
        // return this.spyHash;
      }
      // return this.spyHash;
    } 
     while ((pointContainer = pointContainer.parentNode));

     return false;
    // return this.spyHash;
  }

}







