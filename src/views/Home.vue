<template>
  <div class="text-red-600">home</div>
</template>

<script>
// @ is an alias to /src
import { getCities, database } from "@/config/firebaseConfig";
export default {
  name: "Home",
  async created() {
    const res = await getCities(database);
    console.log(res);
  },
};
</script>
