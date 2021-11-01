<template>
  <div class="w-full h-screen flex items-center justify-center">
    <form
      class="
        bg-gray-200
        w-96
        h-auto
        rounded-lg
        pt-8
        pb-8
        px-8
        flex flex-col
        items-center
      "
      autocomplete="on"
      @submit.prevent="onSubmit"
    >
      <label class="font-light text-4xl mb-4"
        >dan<span class="font-bold">edu</span></label
      >
      <input
        v-model="fullName"
        type="text"
        class="w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4"
        placeholder="Họ và tên"
        autocomplete="username"
      />
      <input
        v-model="email"
        type="email"
        class="w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4"
        placeholder="Email"
        autocomplete="username"
      />
      <input
        v-model="password"
        type="password"
        class="w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4"
        placeholder="Mật khẩu"
        autocomplete="current-password"
      />
      <div v-if="error">
        <span class="text-red-500">{{ error }}</span>
      </div>
      <button
        v-if="!isPending"
        type="submit"
        class="
          w-full
          h-12
          rounded-lg
          bg-green-600
          text-gray-200
          uppercase
          font-semibold
          hover:bg-green-700
          text-gray-100
          transition
          mb-4
        "
        @click="$router.push('/register')"
      >
        Đăng ký
      </button>
      <button
        v-else
        type="button"
        disable
        class="
          w-full
          h-12
          rounded-lg
          bg-gray-600
          text-gray-200
          uppercase
          font-semibold
          text-gray-100
          transition
          mb-4
          cursor-not-allowed
        "
      >
        Đang tải ...
      </button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useSignUp } from "@/composables/useSignUp";
export default {
  setup() {
    const { error, isPending, signup } = useSignUp();

    const fullName = ref("");
    const email = ref("");
    const password = ref("");

    async function onSubmit() {
      await signup(email.value, password.value, fullName.value);
      console.log(error.code);
    }

    return { fullName, email, password, error, isPending, onSubmit };
  },
};
</script>
