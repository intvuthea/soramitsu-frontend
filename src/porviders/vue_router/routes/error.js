export default [
    { 
        path: '/:pathMatch(.*)', 
        name: 'error.404',
        component: () => import('@/views/errors/ErrorPage404')
    }
]