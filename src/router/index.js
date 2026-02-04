import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path:'/user',
      name:'user',
      component: () => import('../views/UserView.vue') 
    },
    {
      path:'/form',
      name:'form',
      component: () => import('../views/FormView.vue')
    },
    {
      path:'/form2',
      name:'form2',
      component: () => import('../views/Form2View.vue')
    },
    {
      path:'/listUsers',
      name:'listUsers',
      component: () => import('../views/ListUsersView.vue')
    }
  ],
})

export default router
