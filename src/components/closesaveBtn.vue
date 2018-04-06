<template>
	<button @click='closeSave'>
		<slot name='close'>Close and Save</slot>
	</button>
</template>
<script>
  import vue from 'vue'
  import vuex from 'vuex'
  vue.use(vuex);
	export default{
		methods: {
			closeSave: function(){
        this.$emit('closeAndSave');
			},
		}
	}
</script>
