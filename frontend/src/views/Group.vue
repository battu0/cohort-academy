<script>
import { useCounterStore } from "../stores/counter";

export default {
	name: "GroupView",
	data() {
		return {
			isLoading: true,
			group: {},
			courses: [],
		};
	},
	async mounted() {
		console.log("Mounted");
		// this.group = await this.fetchGroup(this.$route.params.groupId);
		// this.isLoading = false;
		const groupId = this.$route.params.groupId;
		console.log("groupId:", groupId);
		this.group = await this.fetchGroup(groupId);
		console.log("group:", this.group);
		this.isLoading = false;
		// fetch COURSES
		this.courses = await this.fetchCourses();
	},
	setup() {
		const store = useCounterStore();
		const fetchGroup = store.fetchGroup;
		const fetchCourses = store.fetchCourses;
		const enrollCourse = store.enrollCourse;
		return {
			store,
			fetchGroup,
			fetchCourses,
			enrollCourse,
		};
	},
	methods: {
		async enrollCourseAndUpdateGroup({ groupId, courseId, enrollmentDate }) {
			await this.enrollCourse({ groupId, courseId, enrollmentDate });
			this.updateGroup();
		},

		async updateGroup() {
			this.group = await this.fetchGroup(this.$route.params.groupId);
		},
	},
};
</script>

<template lang="pug">
.group
		p(v-if="isLoading") Please wait ...
		div(v-else)
			h1 Group Detail
			p {{ group.name }}
	
			h2 Group History
			div(v-if="group.enrollments.length")
				ol
					li(v-for="enrollment in group.enrollments")
						| {{ enrollment.group.name }} has enrolled {{ enrollment.course.name }}
			p(v-else) No enrollments
			h2 Create new enrollment 
			div(v-if="courses.length")
				h3 Courses 
				ol 
					li(v-for="course in courses")
						| {{ course.name }} is being taught under the {{ course.subject }}
						button.enroll(@click="enrollCourseAndUpdateGroup({groupId: group._id, courseId: course._id, enrollmentDate: group.enrollments.enrollmentDate})") Enroll Course 
</template>
