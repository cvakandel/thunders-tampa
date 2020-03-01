import { Component, OnInit, HostListener } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  sideBarOpen :boolean;
  mode:string;
  screenWidth: number;
  private screenWidth$ = new BehaviorSubject<number>(window.innerWidth);

  constructor() {}

  ngOnInit() {
    this.getScreenWidth().subscribe(width => {
      if (width < 640) {
       //this.showToggle = 'show';
       this.mode = 'over';
       this.sideBarOpen = false;
     }
     else if (width > 640) {
       //this.showToggle = 'hide';
       this.mode = 'side';
       this.sideBarOpen = true;
     }
   });
  }

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    this.screenWidth$.next(event.target.innerWidth);
  }
  getScreenWidth(): Observable<number> {
    return this.screenWidth$.asObservable();
  }
  sideBarToggler(message: string) {
    console.log(this.sideBarOpen);
    
    this.sideBarOpen = !this.sideBarOpen;
  
    
    console.log(this.sideBarOpen);

  }
}
