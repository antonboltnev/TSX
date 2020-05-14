import { Component, Prop, Vue } from 'vue-property-decorator';
import { VueComponent } from '../shims-vue';

import styles from './HelloWorld.css?module'

@Component
export default class HelloWorld extends VueComponent {

  @Prop()
  private msg!: string;
  @Prop()
  private localNum!: number;


  someData: string = 'Some Data';
  someNum: number = 0;

  get computedProp() {
      return 1
  }

  method1() {
      this.someNum++;
  }

  render() {
    return (
      <div class={styles.hello}>
        <h1>{ this.msg }</h1>
          <p>SomeNum: {this.someNum}</p>
          <button onClick={() => this.method1()}>Click</button>
        <p>{this.localNum}</p>
      </div>
    )
  }
}
