import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import './assents/js/svg'

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)


new Vue({
    el:'#app',
    methods:{
        change(){
            console.log(1)
        }
    }
})

import chai from 'chai'
import spies from 'chai-spies'
import { connect } from 'net';
chai.use(spies)

const expect = chai.expect

{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings'
        }
    }).$mount()
    
    const useElement = vm.$el.querySelector('use')
    console.log(useElement.getAttribute('xlink:href'))
    expect(useElement.getAttribute('xlink:href')).to.equal('#i-settings')
}
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            label: '保存'
        }
    }).$mount()
    const spanElement = vm.$el.querySelector('span')
    expect(spanElement.innerHTML).to.equal('保存')
}
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon:'settings',
            iconPosition: 'right'
        }
    }).$mount(div)
    
    const iconElement = vm.$el.querySelector('svg')
    // console.log(getComputedStyle(iconElement))
    expect(getComputedStyle(iconElement).order).to.eq('1')
    vm.$el.remove()
}
//测试点击事件
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon: 'settings'
        }
    }).$mount()
    const spy = chai.spy(()=>{
        console.log(1,2)
    })
    vm.$on('click',spy)
    vm.$el.click()
    expect(spy).to.have.been.called()
}