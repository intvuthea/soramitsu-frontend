<template>
    <div class="content">
        Home

		{{ currentUser }}
    </div>
</template>
<style lang="scss">
	.content {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		position: relative;

        font-size: 36px;
        font-weight: bold;
	}
</style>

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