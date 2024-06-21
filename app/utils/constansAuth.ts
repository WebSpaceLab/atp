export const roleUserOptions = [
  { label: 'Admin', value: 'admin' },
  { label: 'User', value: 'user' },
  { label: 'Coach', value: 'coach' },
  { label: 'Editor', value: 'editor' }
] as const

export const roleUserValues = ['admin', 'user', 'coach', 'editor'] as const satisfies Exclude<typeof roleUserOptions[number]['value'], undefined>[] 