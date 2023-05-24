import { Component } from '@angular/core';
import { LibComponent } from 'lib'
import { TestClass, TestInterface } from './types'

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<lib-lib />`,
  imports: [
    LibComponent
  ],
})
export class AppComponent {
  title = 'test';
  tc: TestClass = new TestClass()
  ti: TestInterface = {
    url: '',
    count: 0
  }
}
