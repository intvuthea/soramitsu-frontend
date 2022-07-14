<template>
    <div class="content">
		Hello: {{ currentUser?.username }} <br>
		Ip: {{ currentUser?.ip }}
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

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
			getCurrentUser: 'auth/getCurrentUser'
		})
	}
}
</script>