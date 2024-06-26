export default defineNuxtRouteMiddleware(async (to, from) => {
    const { loggedIn } = useUserSession()
    const { openLoginModal } = useAuthModal()

    if (!loggedIn.value) {
        openLoginModal()
        return await navigateTo('/')
    }
})