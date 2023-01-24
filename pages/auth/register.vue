<script setup>
import { useAuthStore } from '@/stores/useAuthStore'

const client = useSupabaseClient();

const auth = useAuthStore()

let form = reactive({
    user_name: '',
    email: '',
    password: ''
});

let signupError = ref();
let user = ref();

const signup = async () => {
    const { data, error } = await client.auth.signUp({
        email: form.email,
        password: form.password,
        options: {
            data: {
                user_name: form.user_name,
            }
        }
    })
    signupError.value = error;
}

watchEffect(() => {
    if (user.value) {

    }
})
</script>

<template>

    <Head>
        <Title>Register</Title>
        <Meta name="description" content="Create an account" />
    </Head>
    <NuxtLayout name="guest">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 class="mt-6 text-3xl font-bold tracking-tight text-center text-green-500">Create an account
            </h2>
        </div>
        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="px-4 py-8 bg-black/80 border border-green-400 shadow sm:rounded-lg sm:px-10">
                <form class="space-y-6" @submit.prevent="signup">
                    <div>
                        <label for="username" class="block text-sm font-medium text-gray-100">Username</label>
                        <div class="mt-1">
                            <input id="username" v-model="form.user_name" name="username" type="text"
                                autocomplete="username" required
                                class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm">
                        </div>
                    </div>
                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-100">Email address</label>
                        <div class="mt-1">
                            <input id="email" v-model="form.email" name="email" type="email" autocomplete="email"
                                required
                                class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm">
                        </div>
                    </div>
                    <div>
                        <label for="password" class="block text-sm font-medium text-gray-100">Password</label>
                        <div class="mt-1">
                            <input id="password" v-model="form.password" name="password" type="password"
                                autocomplete="current-password" required
                                class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm">
                        </div>
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox"
                                class="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500">
                            <label for="remember-me" class="block ml-2 text-sm text-gray-900">Remember me</label>
                        </div>

                        <div class="text-sm">
                            <a href="#" class="font-medium text-green-600 hover:text-green-500">Forgot your
                                password?</a>
                        </div>
                    </div>

                    <div>
                        <button type="submit"
                            class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                            <span v-if="!auth.loading">Sign up</span>
                            <span v-else>Signing up ...</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </NuxtLayout>
</template>
