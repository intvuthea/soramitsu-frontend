<template>
    <div class="page">
		<div class="card">
			<div class="title">
				Login
			</div>
			<div class="content">		
				<form @submit.prevent="onLoginClick">
					<TextField 
						v-model:value="form.username"
						label="Username"
						:required="true"
					/>
					<TextField
						v-model:value="form.password"
						label="Password"
						:required="true"
						type="password"
					/>
					<div v-if="isLoginFial" class="error-mgs">
						Incorrect username or password
					</div>
					<button class="btn btn-submit" :disabled="isLoginProcessing">{{ isLoginProcessing ? 'Login . . .' : 'Login' }}</button>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	name: "App",
	data() {
		return {
			isLoginProcessing: false,
			isLoginFial: false,
			form: {
				username: 'john',
				password: '123',
			},
		};
	},
	methods: {
		...mapActions({
			login: 'auth/login'
		}),
		async onLoginClick() {
			this.isLoginFial = false
			this.isLoginProcessing = true

			const success = await this.login(this.form)
			
			this.isLoginProcessing = false
			this.isLoginFial = !success
			if (success) {
				const name = this.$route.query?.next ?? 'home'
				this.$router.push({name})
			}
		}
	}
};
</script>