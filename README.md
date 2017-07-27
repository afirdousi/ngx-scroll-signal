# ngx-scroll-signal
[![npm version](https://badge.fury.io/js/ngx-scroll-signal.svg)](https://badge.fury.io/js/ngx-scroll-signal)
[![Dependency Status](https://david-dm.org/afirdousi/ngx-scroll-signal.svg)](https://david-dm.org/afirdousi/ngx-scroll-signal)

>This library helps you add page scroll signal on top or the left of your page.

![Demo](ngx-scroll-signal-demo.gif)

## Installation
```js
npm install ngx-scroll-signal --save
```

### Its that simple to use

```js
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxScrollSignalModule } from 'ngx-scroll-signal';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxScrollSignalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Options

| position     	| type       	| Set the position to be vertical or horizontal  	| 'x' or '0' or 'horizontal' 	| 'y' or '1' or 'vertical' 	|
|--------------	|-------------- |------------------------------------------------	|----------------------------	|--------------------------	|
| base-color   	| property      | Set the base color of the scroll signal line   	| Hex or RGB or Color name   	|                          	|
| signal-color 	| property      | Set the progress bar / filler color            	| Hex or RGB or Color name   	|                          	|
| opacity      	| property      | Sets the opacity of both base and signal color 	|                            	|                          	|
| on-end       	| event         | Event fired as a end of page flag              	|                            	|                          	|

## Defaults

| base-color   	| #ecf0f1 	|
|--------------	|---------	|
| signal-color 	| #2ecc71 	|




## License

MIT

## P.S
I will be using this library as a reference in my future talks/workshops on how you can start things from scratch
when you are new to Angular, ngc, rollup, systemjs e.t.c. I plan to release a webpack version of the same thing.
Feel free to use this library and open PRs but you will find things done in a super naive way (which is on purpose).


