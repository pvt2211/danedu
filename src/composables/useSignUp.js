import { ref } from "vue";
import {
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "@/config/firebaseConfig";

const error = ref(null);
const isPending = ref(false);

async function signup(email, password, fullName) {
  isPending.value = true;
  error.value = null;
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    if (!response) {
      throw new Error("Could not create a new user");
    }
    await updateProfile(response, { displayName: fullName });

    return response;
  } catch (err) {
    error.value = err.code;
  } finally {
    isPending.value = false;
  }
}

export function useSignUp() {
  return { error, isPending, signup };
}
