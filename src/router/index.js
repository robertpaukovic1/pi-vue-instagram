
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '@/store'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      needsUser: true
    }
  },
  {
    path: '/login',
    name: 'Login',

    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'Signup',

    component: () => import(/* webpackChunkName: "signup" */ '../views/Signup.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


router.beforeEach((to, from, next) => {

  console.log('Stara ruta', from.name, '->', to.name, 'korisnik', store.currentUser)

  const noUser = store.currentUser === null;

  if (noUser && to.meta.needsUser) {
    console.error("NE DOPUŠTAM");
  }
  else {
    next();
  }

})




export default router
