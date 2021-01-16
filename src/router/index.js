import Vue from 'vue'
import VueRouter from 'vue-router'
import EventCreate from '/src/views/EventCreate.vue'
import EventShow from '/src/views/EventShow.vue'
import EventList from '/src/views/EventList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'event-list',
    component: EventList
  },
  {
    path: '/event/:id',
    name: 'event-show',
    component: EventShow,
    props: true
  },
  {
    path: '/event/create',
    name: 'event-create',
    component: EventCreate
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
