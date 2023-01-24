<script setup>
import { useAuthStore } from '@/stores/useAuthStore';

const auth = useAuthStore();

let form = reactive({
    email: '',
    password: ''
});


const login = async () => {
    await auth.handleSignIn(form);
}
</script>

<template>

    <Head>
        <Title>Sign in</Title>
        <Meta name="description" content="Sign in" />
    </Head>
    <NuxtLayout name="guest">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 class="mt-6 text-3xl font-bold tracking-tight text-center text-green-500">Sign in to your account
            </h2>
        </div>
        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="px-4 py-8 bg-black/50 border border-green-400 shadow sm:rounded-lg sm:px-10">
                <template v-if="auth.error">
                    <div class="mb-2 text-sm  text-red-600">
                        <span>
                            {{ auth.error }}
                        </span>
                    </div>
                </template>
                <form class="space-y-6" @submit.prevent="login">
                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-100">Email address</label>
                        <div class="mt-1">
                            <input v-model="form.email" id="email" name="email" type="email" autocomplete="email"
                                required
                                class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm">
                        </div>
                    </div>
                    <div>
                        <label for="password" class="block text-sm font-medium text-gray-100">Password</label>
                        <div class="mt-1">
                            <input v-model="form.password" id="password" name="password" type="password"
                                autocomplete="current-password" required
                                class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm">
                        </div>
                    </div>
                    <div>
                        <button type="submit" :disabled="auth.loading"
                            class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                            <span v-if="!auth.loading">Sign in</span>
                            <span v-else>Signing in ...</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </NuxtLayout>
</template>
