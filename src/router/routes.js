
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },

  {
    path: '/notes',
    component: () => import('layouts/NotesLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Notes.vue') },
      { path: 'create', component: () => import('pages/Note.vue') },
      { path: 'edit/:noteId', component: () => import('pages/Note.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
