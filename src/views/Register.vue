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
      @submit.prevent="register"
    >
      <label class="font-light text-4xl mb-4"
        >dan<span class="font-bold">edu</span></label
      >
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
      <button
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
    </form>
  </div>
</template>

<script>
import { createAccount } from "@/config/firebaseConfig";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async register() {
      const res = await createAccount(this.email, this.password);
      console.log(res);
    },
  },
};
</script>
