import {Component, Prop, Vue} from 'vue-property-decorator';
import {VueComponent} from '../shims-vue';
import {Action, Mutation, State} from 'vuex-simple';
import './DatePicker.css'

@Component
export default class DatePicker extends VueComponent {

    @Prop()
    private task!: object;

    @State()
    public daysArr = []

    @Mutation()
    public setDays(days: any) {
        this.daysArr = days
    }

    @Action()
    public getDays() {
        let days = []
        for (let day = 1; day <= this.getNumberOfDays; day++) {
            days.push(
                {
                    name: day,
                    current: day === this.getCurDay,
                    selected: day === this.getCurDay,
                    task: {
                        name: '',
                        done: false
                    }
                }
            )
        }
        console.log(days)
        this.setDays(days)
    }

    nowDate = new Date();


    get getYear() {
        return this.nowDate.getFullYear();
    }

    get getMonth() {
        let arrMonthName = [
            'Январь',
            'Февраль',
            'Март',
            'Апрель',
            'Май',
            'Июнь',
            'Июль',
            'Август',
            'Сентябрь',
            'Октябрь',
            'Ноябрь',
            'Декабрь'
        ];
        let monthName = arrMonthName[this.nowDate.getMonth()];
        return {name: monthName, value: this.nowDate.getMonth()};
    }

    get getCurDay() {
        return this.nowDate.getDate();
    }

    get getNumberOfDays() {
        let monthDays = new Date(this.getYear, this.getMonth.value + 1, 0).getDate();
        return monthDays;
    }

    created() {
        this.getDays()
    }

    render() {
        let weekDays = [
            'пн',
            'вт',
            'ср',
            'чт',
            'пт',
            'сб',
            'вс',
        ]
        let weekArr = weekDays.map((item) => <span>{item}</span>)


        let firstDayOfFirstWeek = new Date(this.getYear, this.getMonth.value, this.daysArr[0].name).getDay()
        if ((firstDayOfFirstWeek - 1) > 0) {
            for (let i = 0; i < firstDayOfFirstWeek - 1; i++) {
                this.daysArr.unshift('')
            }
        }

        function weeksArray(arr: any, chunk: number) {
            var i, j, tmp = [];
            for (i = 0, j = arr.length; i < j; i += chunk) {
                tmp.push(arr.slice(i, i + chunk));
            }
            return tmp;
        }


        let week = weeksArray(this.daysArr, 7)
        console.log(week)

        let week1 = week[0].map((item) => <span class={item.current ? 'selected' : ''}><div
            class='selected-circle'></div><span>{item.name}</span></span>)
        let week2 = week[1].map((item) => <span class={item.current ? 'selected' : ''}><div
            class='selected-circle'></div><span>{item.name}</span></span>)
        let week3 = week[2].map((item) => <span class={item.current ? 'selected' : ''}><div
            class='selected-circle'></div><span>{item.name}</span></span>)
        let week4 = week[3].map((item) => <span class={item.current ? 'selected' : ''}><div
            class='selected-circle'></div><span>{item.name}</span></span>)
        let week5 = week[4].map((item) => <span class={item.current ? 'selected' : ''}><div
            class='selected-circle'></div><span>{item.name}</span></span>) || null

        return (
            <div class='date-picker'>
                <div class="month">
                    {this.getMonth.name + ' ' + this.getYear}
                </div>
                <div class="week-days">
                    {weekArr}
                </div>
                <div class="days">
                    <div class="week">{week1}</div>
                    <div class="week">{week2}</div>
                    <div class="week">{week3}</div>
                    <div class="week">{week4}</div>
                    <div class="week">{week5}</div>
                </div>
            </div>
        )
    }
}
