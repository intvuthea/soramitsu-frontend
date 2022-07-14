export default [
    {
        path: '',
        name: 'home',
        component: () => import('@/views/home/HomePage'),
        meta: {
            required_auth: true
        }
    }
]