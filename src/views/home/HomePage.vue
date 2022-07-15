<template>
    <div class="content">
		<div>
			Hello: {{ currentUser?.username }} <br>
			Ip: {{ currentUser?.ip }}
		</div>

		<button class="btn btn-submit" @click="onLogoutClick()">{{ 'Login' }}</button>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
	computed: {
		...mapState({
			currentUser: (state) => state.auth.currentUser
		})
	},
	created() {
		this.getCurrentUser()
	},
	methods: {
		...mapActions({
			logout: 'auth/logout',
			getCurrentUser: 'auth/getCurrentUser'
		}),
		async onLogoutClick() {
			const isSuccess = await this.logout()
			if (isSuccess) {
				this.$router.push({name: 'auth.login'})
			}
		}
	}
}
</script>