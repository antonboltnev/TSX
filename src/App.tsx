import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld';
import DatePicker from "./components/DatePicker";
import TaskForm from "./components/TaskForm";

import './App.css'

@Component
export default class App extends Vue {
  render() {
    return (
      <div id="app">
        {/*<HelloWorld msg="Welcome to Your Vue.js + TypeScript App" localNum={1}/>*/}
        <DatePicker />
        <TaskForm />
      </div>
    )
  }
}
