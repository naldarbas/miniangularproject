
import { Directive, HostBinding, HostListener } from "@angular/core";
@Directive({
    selector:'[navDropdown]'
})
export class DropdownDirective{

    //allow as to bind properties of the element the directive placed
   @HostBinding('class.open') isOpen=false;
    //to listen to click HostListener 
    @HostListener('click') toggelopen(){
        this.isOpen=!this.isOpen;
    }  
}