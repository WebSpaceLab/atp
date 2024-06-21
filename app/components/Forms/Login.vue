<script setup lang="ts">
import type { FormError } from '#ui/types'

const fields = [{
  name: 'email',
  type: 'text',
  label: 'Email',
  placeholder: 'Enter your email'
}, {
  name: 'password',
  label: 'Password',
  type: 'password',
  placeholder: 'Enter your password'
}, {
  name: 'remember',
  label: 'Remember me',
  type: 'checkbox'
}]

const validate = (state: any) => {
  const errors: FormError[] = []
  if (!state.email) errors.push({ path: 'email', message: 'Email is required' })
  if (!state.password) errors.push({ path: 'password', message: 'Password is required' })
  return errors
}

const providers = [{
  label: 'Continue with GitHub',
  icon: 'i-simple-icons-github',
  color: 'white' as const,
  click: () => {
    console.log('Redirect to GitHub')
  }
}]

function onSubmit (data: any) {
  console.log('Submitted', data)
}
</script>

<!-- eslint-disable vue/multiline-html-element-content-newline -->
<!-- eslint-disable vue/singleline-html-element-content-newline -->
<template>
  <div>
    login form
  </div>
</template>

