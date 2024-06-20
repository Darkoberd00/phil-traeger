export default defineNuxtRouteMiddleware((to, from) => {
    console.log('Route changed from', from, 'to', to)
})
