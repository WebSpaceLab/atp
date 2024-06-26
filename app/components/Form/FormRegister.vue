<script setup lang="ts">
  const { state, loading } = storeToRefs(useRegisterStore())

  const isOpenAgreementModel = ref<boolean>(false)
  const previewPassword = ref<boolean>(false)
  const previewConfirmPassword = ref<boolean>(false)
  const lang = ref<string>('en')

  function agreement(value: boolean) {
    state.value.isAgree = value
    isOpenAgreementModel.value = false
  }
</script>

<template>
  <UForm :schema="registerSchema" :state="state" class="w-full space-y-4" @submit="useRegisterStore().register" >
    <UFormGroup required label="Username" name="username">
      <UInput color="primary" v-model="state.username" />
    </UFormGroup>

    <UFormGroup required label="First Name" name="firstName">
      <UInput color="primary" v-model="state.firstName" />
    </UFormGroup>

    <UFormGroup required class="w-full" label="Last Name" name="lastName">
      <UInput color="primary" v-model="state.lastName" />
    </UFormGroup>

    <UFormGroup required label="Email" name="email">
      <UInput color="primary" v-model="state.email" type="email" />
    </UFormGroup>

    <UFormGroup required class="w-full" label="Password" name="password">
      <UButtonGroup size="sm" class="w-full" orientation="horizontal">
        <UInput color="primary" v-model="state.password" :type="previewPassword ? 'text' : 'password'" class="w-full"/>

        <UButton variant="solid" color="gray"   @click="previewPassword = !previewPassword">
          <Icon v-if="previewPassword" name="i-ion-eye" class="text-lg" />
          <Icon v-else name="i-ion-eye-off" class="text-lg" />
        </UButton>
      </UButtonGroup>
    </UFormGroup>

    <UFormGroup required class="w-full " label="Confirm Password" name="confirmPassword">
      <UButtonGroup size="sm" class="w-full" orientation="horizontal">
        <UInput v-model="state.confirmPassword" :type="previewConfirmPassword ? 'text' : 'password'" class="w-full"/>
        <UButton variant="solid" color="gray"  @click="previewConfirmPassword = !previewConfirmPassword">
          <Icon v-if="previewConfirmPassword" name="i-ion-eye" class="text-lg"/>
          <Icon v-else name="i-ion-eye-off" class="text-lg" />
        </UButton>
      </UButtonGroup>
    </UFormGroup>

    <UCheckbox required color="primary" v-model="state.isAgree">
      <template #label>
        <span class="italic">I accept the 
          <UButton variant="link" label="Terms and Conditions" class="p-0" @click="isOpenAgreementModel = true" />
        </span>
      </template>
    </UCheckbox>

    <UButton type="submit" :loading="loading" block :disabled="!state.isAgree">
      Register
    </UButton>
  </UForm>
  
  <UModal v-model="isOpenAgreementModel">
    <div class="w-full relative  p-4">
      <div class="absolute top-2 right-4 flex items-center space-x-2">
        <p class="text-sm text-bold">lang:</p>

        <USelect label="Language" v-model="lang" :options="locales" />
      </div>

      <h2 class="text-xl font-semibold pb-4">Terms and Conditions</h2>

      <div class="w-full overflow-y-auto h-80 overflow-y-scroll p-4 bg-gray-100 dark:bg-gray-800 text-justify rounded">
        <ContentDoc :path="`/terms/${lang}`" />
      </div>

      <div class="w-full mt-4 flex justify-between">
        <UButton variant="solid" color="red" label="Odrzuć" @click="agreement(false)" />

        <UButton variant="solid" color="primary" label="Zgadzam się" @click="agreement(true)" />
      </div>
    </div>
  </UModal>
</template>
