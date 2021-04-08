
import { ActivatedRoute,Router } from '@angular/router';
// import { FragmentService } from './../../service/fragment.service';
import { Component, OnInit , ChangeDetectionStrategy,ChangeDetectorRef,
  ElementRef, ViewChild, HostListener, AfterViewInit } from '@angular/core';
import {FixedSizeVirtualScrollStrategy, VIRTUAL_SCROLL_STRATEGY,
  ScrollDispatcher, CdkVirtualScrollViewport} from '@angular/cdk/scrolling';
import {  Input, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
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
@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
  //  providers: [{provide: VIRTUAL_SCROLL_STRATEGY}]
  //   //  useClass: CustomVirtualScrollStrategy
  //   }]
})
export class ScrollComponent implements OnInit , AfterViewInit{
  // items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
  items = Array.from({length: 11}).map((_, i) => `Item #${i}`);
  //  Position:String = 'start'|'mid'| 'end'
  start=0;
  scrollToPage = ['aaa','bbb','ccc','ddd','eee','fff','ggg','hhh','iii','jjj','kkk'] ;
  activeScrollIndex:Observable<number>;
  activeFragment;
  activeFragmentSnapShot;
  indexFocus;
  activeFragment$: BehaviorSubject<string> = new BehaviorSubject(window.location.hash.valueOf().toString());

  constructor(
    // private fragmentService:FragmentService,
    private renderer: Renderer2, @Inject(PLATFORM_ID) private platformId: Object,
    public activatedRoute:ActivatedRoute ,
    private router:Router,
    private ref: ChangeDetectorRef,
    private scrollDispatcher:ScrollDispatcher) { 
      // this.activatedRoute.fragment.subscribe(
      //   (frag)=>{
      //     console.log(frag);
      //     this.activeFragment = frag;
      //   }
      // );
      // this.ref.detectChanges();
      this.activatedRoute.snapshot.fragment.valueOf();
    }

  ngOnInit(): void {

    this.activatedRoute.fragment.subscribe(
      (frag)=>{
        console.log(frag);
        this.activeFragment = frag;
      }
    );
    // this.scrollToPage.includes
    // console.log (window.location.hash.valueOf.toString());
    // this.ref.detectChanges();
    this.renderer.listen(window, 'scroll', (event) => {
      console.log (window.location.hash.valueOf().toString());
      if (this.isVisible(document.querySelector('#aaa') as HTMLElement)) {
        this.activeFragment$.next('aaa');
        // this.activatedRoute.snapshot.fragment
        this.scroll(0);
      } else if (this.isVisible(document.querySelector('#bbb') as HTMLElement)) {
         this.activeFragment$.next('bbb');
        this.scroll(1);
      } else if (this.isVisible(document.querySelector('#ccc') as HTMLElement)) {
        this.activeFragment$.next('ccc');
        this.scroll(2);
      } 
      else if (this.isVisible(document.querySelector('#ddd') as HTMLElement)) {
         this.activeFragment$.next('ddd');
        this.scroll(3);
      } 
      else if (this.isVisible(document.querySelector('#eee') as HTMLElement)) {
         this.activeFragment$.next('eee');
        this.scroll(4);
      } 
      else if (this.isVisible(document.querySelector('#fff') as HTMLElement)) {
        this.activeFragment$.next('fff');
        this.scroll(5);
      } 
      else if (this.isVisible(document.querySelector('#ggg') as HTMLElement)) {
         this.activeFragment$.next('ggg');
        this.scroll(6);
      } 
      else if (this.isVisible(document.querySelector('#hhh') as HTMLElement)) {
         this.activeFragment$.next('hhh');
        this.scroll(7);
      } 
      else if (this.isVisible(document.querySelector('#iii') as HTMLElement)) {
         this.activeFragment$.next('iii');
        this.scroll(8);
      } 
      else if (this.isVisible(document.querySelector('#jjj') as HTMLElement)) {
        this.activeFragment$.next('jjj');
        this.scroll(9);
      } 
      else if (this.isVisible(document.querySelector('#kkk') as HTMLElement)) {
         this.activeFragment$.next('kkk');
        this.scroll(10);
      } 
    
       this.ref.detectChanges();
    
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
    //  if(index==0)
    //      { 
    //       // this.activeFragment$.next('aaa');
    //       // this.scroll(0);
    //       this.router.navigate(['./scroll'],{fragment:this.scrollToPage[0]});
    //     }
    //   else if (index == 1 )  
    //         {  
    //           this.router.navigate(['./scroll'],{fragment:this.scrollToPage[1]});
    //           this.activeFragment$.next('bbb');
    //           // this.scroll(1);
    //         }
    
    //  else if (index == 2 )
    //       {this.router.navigate(['./scroll'], {fragment:this.scrollToPage[2]})
    //       this.activeFragment$.next('ccc');
    //       // this.scroll(2); 
    //       }
    //  else if (index == 3 )
    //       {this.router.navigate(['./scroll'], {fragment:this.scrollToPage[3]})
    //       this.activeFragment$.next('ddd');
    //       // this.scroll(3);
    //     } 
    // else if (index == 4)
    //       {this.router.navigate(['./scroll'], {fragment:this.scrollToPage[4]})
    //       this.activeFragment$.next('eee');
    //       // this.scroll(4);
    //     } 
    // else if (index == 5 )
    //       {this.router.navigate(['./scroll'], {fragment:this.scrollToPage[5]})
    //       this.activeFragment$.next('fff');
    //       // this.scroll(5);
    //     }  
    // else if (index == 6 )
    //       {this.router.navigate(['./scroll'], {fragment:this.scrollToPage[6]})
    //       this.activeFragment$.next('ggg');
    //       // this.scroll(6);
    //     } 
    // else if (index == 7 )
    //       {this.router.navigate(['./scroll'], {fragment:this.scrollToPage[7]})
    //       this.activeFragment$.next('hhh');
    //       // this.scroll(7);
    //     } 
    // else if (index == 8)
    //       {this.router.navigate(['./scroll'], {fragment:this.scrollToPage[8]})
    //       this.activeFragment$.next('iii');
    //       // this.scroll(8);
    //     }   
    // else if (index == 9 )
    //       {this.router.navigate(['./scroll'], {fragment:this.scrollToPage[9]})
    //       this.activeFragment$.next('jjj');
    //       // this.scroll(9);
    //     }                            
          
        });
       
    this.ref.detectChanges();
    this.scrollDispatcher.scrolled()
    .subscribe(event => {
      console.log('scrolled........');
    });
  }
// *******************

  currentElement: string; 

  @ViewChild(CdkVirtualScrollViewport) viewPort: CdkVirtualScrollViewport; 
  // @HostListener('window:scroll',['$event']) onScrollEvent($event){
  //   window.onhashchange = this.locationHashChanged;
  // }
  locationHashChanged(){
 
  }
  

   updateVerticalScroll(event): void {
 
  }

 
  scroll(position) {
   
    // this.viewPort.scrollToIndex(position, 'smooth');
    this.viewPort.scrollToIndex(position);
  }

  isVisible(elem: HTMLElement) {
    if (!(elem instanceof Element)) {
      throw Error('DomUtil: elem is not an element.');
    }

    const style = getComputedStyle(elem);

    if (style.display === 'none') {
      return false;
    }

    if (style.visibility !== 'visible') {
      return false;
    }

    if (+style.opacity < 0.1) {
      return false;
    }

    if (
      elem.offsetWidth +
        elem.offsetHeight +
        elem.getBoundingClientRect().height +
        elem.getBoundingClientRect().width ===
      0
    ) {
      return false;
    }

    const elemCenter = {
      x: elem.getBoundingClientRect().left + elem.offsetWidth / 2,
      y: elem.getBoundingClientRect().top + elem.offsetHeight / 2,
    };

    if (elemCenter.x < 0) {
      return false;
    }

    if (elemCenter.x > (document.documentElement.clientWidth || window.innerWidth)) {
      return false;
    }

    if (elemCenter.y < 0) {
      return false;
    }

    if (elemCenter.y > (document.documentElement.clientHeight || window.innerHeight)) {
      return false;
    }

    let pointContainer: any = document.elementFromPoint(elemCenter.x, elemCenter.y);
    do {
      if (pointContainer === elem) {
        return true;
      }
    } while ((pointContainer = pointContainer.parentNode));

    return false;
  }

}







