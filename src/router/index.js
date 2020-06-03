import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Kung Fu Tea | Order Online',

    component: function () {
      return import('@/views/Home.vue')
    }
  },
  {
    path: '/order',
    name: 'Menu | Kung Fu Tea',

    component: function () {
      return import('@/views/Order.vue')
    }
  },
  {
    path: '/order-continue',
    name: 'Order | Kung Fu Tea',

    component: function () {
      return import('@/views/Order-Continue.vue')
    }
  },
  {
    path: '/thank-you',
    name: 'Order Success | Kung Fu Tea',

    component: function () {
      return import('@/views/Thank-You.vue')
    }
  },
  {
    path: '/confirm-order',
    name: 'Confirm Order | Kung Fu Tea',

    component: function () {
      return import('@/views/Confirm-Order.vue')
    }
  },
  {
  path: '/order-history',
  name: 'Order History | Kung Fu Tea',

  component: function () {
    return import('@/views/Order-History.vue')
  }
},
  {
  path: '/register',
  name: 'Register | Kung Fu Tea',

  component: function () {
    return import('@/views/Signup.vue')
  }
},
{
  path: '/login',
  name: 'Log In | Kung Fu Tea',

  component: function () {
    return import('@/views/Login.vue')
  }
},

  
  

  
]



const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router

router.beforeEach((to, from, next) => {
  let title = to.name;
  const keys = Object.keys(to.params);
  if (keys.length) {
    title = `${to.name}: ${to.params[keys[0]]}`;
    if (to.params[keys[1]]) {
      title += ` ${to.params[keys[1]]}`;
    }
  }
  document.title = title;
  next();
});
