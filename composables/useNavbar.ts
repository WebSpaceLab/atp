type Navbar ={
    isOpen: boolean
    isMobile: boolean
}

export default function useNavbar() {
    const navbar = useState<Navbar>('navbar', () => ({
        isOpen: false,
        isMobile: false
    }))

    const toggleNavbar = () => {
        navbar.value.isOpen = !navbar.value.isOpen
    }

    const closeNavbar = () => {
        navbar.value.isOpen = false
    }

    const toggleMobile = () => {
        navbar.value.isMobile = !navbar.value.isMobile
    }

    const closeMobile = () => {
        navbar.value.isMobile = false
    }

    return {
        navbar,
        toggleNavbar,
        closeNavbar,
        toggleMobile,
        closeMobile
    }
}