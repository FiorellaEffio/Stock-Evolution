import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

const routerOptions = [
  { path: '/',
    redirect: '/landing'
  },
  { path: '/landing', component: 'Landing' },
  { path: '/signin', component: 'Signin' },
  { path: '/signup', component: 'Signup' },
  { path: '/home', component: 'Home', meta: { requiresAuth: true } },
  { path: '/leo', name: 'leo', component: 'Leo', meta: { requiresAuth: true } },
  { path: '/inform', component: 'Inform', meta: { requiresAuth: true } },
  { path: '/economistas', component: 'Economistas', meta: { requiresAuth: true } },
  { path: '/input', component: 'Input', meta: { requiresAuth: true } },
  { path: '/sectores', name: 'sectores', component: 'Sectores', meta: { requiresAuth: true } },
  { path: '/nivel', name: 'nivel', component: 'nivel', meta: {requiresAuth: true} },
  { path: '/sab', name: 'Sab', component: 'Sab', meta: {requiresAuth: true} },
  { path: '/level_one', name: 'level_one', component: 'level-one', meta: {requiresAuth: true} },
  { path: '*', component: 'NotFound' }
]

const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`@/components/${route.component}.vue`)
  }
})

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = firebase.auth().currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth && !isAuthenticated) next('/')
  else if (!requiresAuth && isAuthenticated) next('leo')
  else next()
})

export default router
