import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-searchBox',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {

  @Input()

    public placeholder:string='';

  @Output()

    public transmiter=new EventEmitter<string>();

  public listening(value:string){

    this.transmiter.emit(value)

  }





}
