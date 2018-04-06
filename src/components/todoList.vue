<template>
	<div>
		<p class='statistic'>
			Completed:
			{{completed_count}}
		</p>
		<p class='statistic'>
			Pending:
			{{pending_count}}
		</p>

		<div id='addNew' title='Add a new todo' @click='addNew'>+</div>
    	<transition-group name='swicthEdit' tag='ul'>
        <span
          v-for='(todo, index) in getTodos'
          :key='index'
          :todoIndex='index'
          :is='!todo.editing&&todo.inited?"todo":"create"'
          @showDelete='showDelete'
          @todoDone="todoDone"
        >
        </span>
    	</transition-group>
    </div>

</template>

<script>
	import todo from './todo'
	import todoedit from './todoedit'
	import create from './create'
    import vue from 'vue'
    import vuex from 'vuex'
    import { mapGetters } from 'vuex'
    vue.use(vuex);

	export default{
		props: [],
		components: {
			todo,
			create,
		},
		computed:{
			...mapGetters([
        'completed_count','pending_count','getTodos'
			]),
		},
		methods: {
			addNew(){
				this.$store.commit('addNew');
			},
			showDelete(todo){
				this.$emit('showDelete', todo);
			},
      todoDone(){
			  this.$emit('todoDone');
      }
		}
	};


</script>
