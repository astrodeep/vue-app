import {  shallowMount, createLocalVue } from '@vue/test-utils'
import App from '@/App.vue'
import VueRouter from 'vue-router'
describe('App.vue', () => {
  it('displays default message', () => {
    shallowMount(App, {
      localVue,
      router
    })

  })
})
const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()


