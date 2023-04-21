<script>
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
	name: "GroupsView",
	data() {
		return {
			isLoading: true,
			groups: [],
		};
	},
	async mounted() {
		this.groups = await this.fetchGroups();
		this.isLoading = false;
	},
	methods: {
		...mapActions(useCounterStore, ["fetchGroups"]),
	},
};
</script>

<template lang="pug">
.groups 
h1 Groups
	p(v-if="isLoading") Please wait ...
	p(v-else) There are {{ groups.length }} groups in the system 

	ol 
		li(v-for="group in groups")
			a(:href="`/groups/${group._id}`") {{ group.name }}
</template>
