
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
      { path: '', name: 'notes-list', component: () => import('pages/notes/List') },
      { path: 'create', name: 'notes-create', component: () => import('pages/notes/Create') },
      { path: 'edit/:noteId', name: 'notes-edit', component: () => import('pages/notes/Create') }
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
