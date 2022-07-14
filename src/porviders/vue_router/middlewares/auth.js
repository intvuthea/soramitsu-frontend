import VueCookies from 'vue-cookies';

export function authenticated({to, router}) {
    const isRequiredAuth = to?.meta?.required_auth ?? false;
    const isToLoginRoute = to.name == 'auth.login';

    if (isRequiredAuth || isToLoginRoute) {
        const isToken = VueCookies.isKey('token')

        if (isRequiredAuth && !isToken) {
            router.push({name: 'auth.login', query: {
                next: to.name
            }})
        } else if (isToLoginRoute && isToken) {
            router.back()
        }
    }
}
