import {
  Component,
  OnInit,
  Input,
  Output,
  ElementRef,
  Renderer,
  EventEmitter,
  ViewChild
} from '@angular/core';

import { ScrollSignal } from '../data/scroll-signal.class';
import { NgxScrollSignalService } from '../service/ngx-scroll-signal.service'

@Component({
  selector: 'ngx-scroll-signal',
  templateUrl: './ngx-scroll-signal.component.html',
  styleUrls: ['./ngx-scroll-signal.component.css'],
  host: {
    'class': 'ngx-scroll-signal',
    '[attr.id]': 'id',
  }
})
export class NgxScrollSignalComponent implements OnInit {

  @ViewChild('filler') filler: ElementRef;

  // State
  private _defaultBaseColor = '#ecf0f1';
  private _defaultFillerColor = '#2ecc71';
  private _defaultOpacity = 1;

  private _position: string = null;
  private _baseColor: string = null;
  private _signalColor: string = null;
  private _opacity: number = null;

  @Input()
  get position(): string { return this._position; }
  set position(position: string){ this._position = position; }

  @Input('base-color')
  get baseColor(): string { return this._baseColor || this._defaultBaseColor; }
  set baseColor(baseColor: string){ this._baseColor = baseColor; }

  @Input('signal-color')
  get signalColor(): string { return this._signalColor || this._defaultFillerColor; }
  set signalColor(signalColor: string){ this._signalColor = signalColor; }

  @Input()
  get opacity(): number { return this._opacity || this._defaultOpacity; }
  set opacity(opacity: number){ this._opacity = opacity; }

  @Output('on-end') onEnd = new EventEmitter<boolean>();

  // TODO(anas) : Provide cross browser implementation for currentPosition
  @Output('on-scroll') currentPosition = new EventEmitter<number>();

  get isHorizontal(): boolean {
    return this.position === 'x' || this.position === '0' || this.position === 'horizontal';
  }

  get isVertical(): boolean {
    return this.position === 'y' || this.position === '1' || this.position === 'vertical';
  }

  // Life cycle hooks & events

  ngOnInit() {

    this.ngxScrollSignal.windowScroll
      .subscribe((signal: ScrollSignal) =>{

        let fillerDimension = 0, endIndicator = 0;

        if ( this.isHorizontal ) {

          endIndicator = signal.windowWidth;
          fillerDimension = ( (signal.scrollY + signal.windowHeight) * signal.windowWidth / signal.documentHeight );
          this.renderer.setElementStyle(this.filler.nativeElement, 'width', fillerDimension + 'px');
          this.renderer.setElementStyle(this.filler.nativeElement, 'height', '10px');

        } else {

          endIndicator = signal.windowHeight;
          fillerDimension = ( (signal.scrollY + signal.windowHeight) * signal.windowHeight / signal.documentHeight );
          this.renderer.setElementStyle(this.filler.nativeElement, 'height', fillerDimension + 'px');
          this.renderer.setElementStyle(this.filler.nativeElement, 'width', '10px');

        }

        if ( fillerDimension >= endIndicator ) {
          this.onEnd.emit(true);
        }

      });

  }

  constructor(public renderer: Renderer,
              public ngxScrollSignal: NgxScrollSignalService) {
  }


}
