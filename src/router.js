import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Users from '@/views/Users.vue';
import Add from '@/views/Add.vue';
import EditUser from '@/views/Edit.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    },
    {
      path: '/adduser',
      name: 'adduser',
      component: Add
    },
    {
      path: '/adit/:id',
      component: EditUser
    }
  ],
  linkActiveClass: 'active'
});
