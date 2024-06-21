type Sidebar = {
  isShow: boolean
  isRail: boolean
  isRightSide: boolean
  isShowHelperBar: boolean
  links: {
    label: string
    icon: string
    to: string
    type: string
    access: string
  }[]
}

export const useSidebar = () =>  {
  const sidebar = useState<Sidebar>('sidebar', () => ({
    isShow: true,
    isRail: false,
    isRightSide: false,
    isShowHelperBar: true,
    links: [
      {
        label: 'Strona główna',
        icon: 'i-heroicons-home-modern-solid',
        to: '/',
        type: 'basic',
        access: 'user'
      },
      {
        label: 'Panel główny',
        icon: 'i-heroicons-presentation-chart-line-20-solid',
        to: '/dashboard',
        type: 'basic',
        access: 'user',
        name: 'dashboard',
        tree: [
          {
            label: 'Dashboard',
            icon: 'i-heroicons-presentation-chart-line-20-solid',
            to: '/dashboard',
          },
        ]
      },
      {
        label: 'Profile',
        icon: 'i-heroicons-user-plus-solid',
        to: '/dashboard/profile',
        type: 'settings',
        access: 'user',
        name: 'dashboard-profile',
        tree: [
          {
            label: 'Dashboard',
            icon: 'i-heroicons-presentation-chart-line-20-solid',
            to: '/dashboard',
          },
          {
            label: 'Profile',
            icon: 'i-heroicons-user-plus-solid',
            to: '/dashboard/profile',
          },
        ]
      },
      {
        label: 'Users',
        icon: 'i-heroicons-user-group-solid',
        to: '/dashboard/users',
        type: 'settings',
        access: 'admin',
        name: 'dashboard-users',
        tree: [
          {
            label: 'Dashboard',
            icon: 'i-heroicons-presentation-chart-line-20-solid',
            to: '/dashboard',
          },
          {
            label: 'Users',
            icon: 'i-heroicons-user-group-solid',
            to: '/dashboard/users',
          },
        ]
      },
    ]
  }))

  const rightSide = () => {
    sidebar.value.isRightSide = true
  }

  const leftSide = () => {
    sidebar.value.isRightSide = false
  }

  const switchSide = () => {
    sidebar.value.isRightSide = !sidebar.value.isRightSide
  }

  const reduceWidth = () => {
    sidebar.value.isRail = true
  }

  const enlargeWidth = () => {
    sidebar.value.isRail = false
  }

  const toggleWidth = () => {
    sidebar.value.isRail = !sidebar.value.isRail
  }

  return {
    sidebar,
    rightSide,
    leftSide,
    switchSide,
    reduceWidth,
    enlargeWidth,
    toggleWidth
  }
}
