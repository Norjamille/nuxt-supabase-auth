import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        loading: false,
        error: null
    }),
    actions: {
        async handleSignUp(form) {
            const client = useSupabaseAuthClient();
            this.loading = true;
            try {
                const { data, error } = await client.auth.signUp({
                    email: form.email,
                    password: form.password,
                    options: {
                        data: {
                            user_name: form.user_name,
                        }
                    }
                })
                this.loading = false
                if (error) {
                    this.error = error
                } else {
                    navigateTo('/')
                }
            } catch (error) {
                this.error.value = error;
                this.loading = false
            }
        },
        async handleSignIn(form) {
            this.loading = true
            const client = useSupabaseAuthClient();
            try {
                const { data, error } = await client.auth.signInWithPassword({
                    email: form.email,
                    password: form.password
                })
                this.loading = false
                if (error) {
                    this.error = error
                } else {
                    navigateTo('/')
                }
            } catch (error) {
                this.error.value = error;
                this.loading = false
            }
        },
        async handleLogOut() {
            this.loading = true;
            const client = useSupabaseAuthClient();
            const { error } = await client.auth.signOut();
            console.log(error)
            this.loading = false;
        }
    }
})
