import { Component, Prop, Vue } from 'vue-property-decorator';
import { VueComponent } from '../shims-vue';
import './TaskForm.css'

@Component

export default class TaskForm extends VueComponent {


    render() {
        return (
            <div class='task-form'></div>
        )
    }
}
