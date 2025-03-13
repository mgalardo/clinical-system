import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/empresas', component: () => import('pages/Empresas.vue') },
      { path: '/especialidades', component: () => import('pages/Especialidades.vue') },
      { path: '/pacientes/ativos', component: () => import('pages/pacientes/PacientesAtivos.vue') },
      { path: '/pacientes/interessados', component: () => import('pages/pacientes/PacientesInteressados.vue') },
      { path: '/agendamentos', component: () => import('pages/Agenda.vue') },
      { path: '/profissionais', component: () => import('pages/Profissionais.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/BlankLayout.vue'),
    children: [
      { path: '/pacientes/primeiro-contato', component: () => import('pages/pacientes/PrimeiroContato.vue') },
      { path: '/login', component: () => import('pages/LoginPage.vue') }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
