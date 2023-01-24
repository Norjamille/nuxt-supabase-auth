<script setup>
import { useAuthStore } from '@/stores/useAuthStore';

const auth = useAuthStore()
const user = useSupabaseUser();

const logout = async () => {
    try {
        await auth.handleLogOut()
        console.log(auth.error);
        auth.user = null
    } catch (error) {
        console.log(error)
    }
}

watchEffect(() => {
    if (user.value) {
        auth.user = user.value
    }
})
</script>
<template>

    <Head>
        <Title>Welcome</Title>
        <Meta name="description" content="Sign in" />
    </Head>
    <div class="h-screen bg-black/95">
        <div class="isolate">
            <div class="px-6 pt-6 lg:px-8">
                <div>
                    <nav class="flex items-center justify-between h-9" aria-label="Global">
                        <div class="flex lg:min-w-0 lg:flex-1" aria-label="Global">
                            <a href="#" class="-m-1.5 p-1.5">
                                <svg class="h-14" viewBox="0 0 109 113" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0625L99.1935 40.0625C107.384 40.0625 111.952 49.5226 106.859 55.9372L63.7076 110.284Z"
                                        fill="url(#paint0_linear)" />
                                    <path
                                        d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0625L99.1935 40.0625C107.384 40.0625 111.952 49.5226 106.859 55.9372L63.7076 110.284Z"
                                        fill="url(#paint1_linear)" fill-opacity="0.2" />
                                    <path
                                        d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z"
                                        fill="#3ECF8E" />
                                    <defs>
                                        <linearGradient id="paint0_linear" x1="53.9738" y1="54.9738" x2="94.1635"
                                            y2="71.8293" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#249361" />
                                            <stop offset="1" stop-color="#3ECF8E" />
                                        </linearGradient>
                                        <linearGradient id="paint1_linear" x1="36.1558" y1="30.5779" x2="54.4844"
                                            y2="65.0804" gradientUnits="userSpaceOnUse">
                                            <stop />
                                            <stop offset="1" stop-opacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </a>
                        </div>
                        <div class="flex lg:hidden">
                            <button type="button"
                                class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                                <span class="sr-only">Open main menu</span>
                                <!-- Heroicon name: outline/bars-3 -->
                                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>
                        </div>
                    </nav>
                </div>
            </div>
            <main>
                <div class="relative px-6 lg:px-8">
                    <div class="max-w-3xl pt-20  mx-auto sm:pt-48 ">
                        <div>
                            <div>
                                <h1 class="text-4xl font-bold tracking-tight sm:text-center text-white sm:text-6xl">
                                    <span class="text-teal-300"> Nuxt 3</span> / <span class="text-green-400">Supabase
                                        Authentication</span>
                                </h1>
                                <p class="mt-6 text-lg leading-8 text-green-200 sm:text-center">
                                    Authentication Preset for Nuxt 3 and Supabase
                                </p>
                                <div class="flex mt-8 gap-x-4 sm:justify-center">
                                    <template v-if="!user">
                                        <NuxtLink to="/auth/login"
                                            class="inline-block rounded-lg bg-green-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-green-600 hover:bg-green-700 hover:ring-green-700">
                                            Login
                                            <span class="text-green-200" aria-hidden="true">&rarr;</span>
                                        </NuxtLink>
                                        <NuxtLink to="/auth/register"
                                            class="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-green-300 ring-1 ring-green-400 hover:ring-green-300">
                                            Register
                                            <span class="text-green-400" aria-hidden="true">&rarr;</span>
                                        </NuxtLink>
                                    </template>
                                    <button v-else @click="logout" type="button"
                                        class="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                        <span v-if="!auth.loading"> Log out</span>
                                        <span v-else="auth.loading">loading</span>
                                        <span class="text-gray-400" aria-hidden="true">&rarr;</span>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
        </div>

    </div>
</template>
