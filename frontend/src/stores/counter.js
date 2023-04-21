import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

export const useCounterStore = defineStore("counter", () => {
	const count = ref(0);
	function INCREMENT() {
		count.value++;
	}
	function DECREMENT() {
		count.value--;
	}
	async function fetchGroups() {
		const request = await axios.get("/groups");
		return request.data;
	}
	async function fetchCourses() {
		const request = await axios.get("/courses");
		return request.data;
	}
	async function fetchGroup(groupId) {
		const request = await axios.get(`/groups/${groupId}`);
		return request.data;
	}
	async function enrollCourse({ groupId, courseId, enrollmentDate }) {
		const request = await axios.post(`./groups/${groupId}/courses`, {
			courseId,
			enrollmentDate,
		});
		return request.data;
	}
	return {
		count,
		INCREMENT,
		DECREMENT,
		fetchGroups,
		fetchGroup,
		fetchCourses,
		enrollCourse,
	};
});
