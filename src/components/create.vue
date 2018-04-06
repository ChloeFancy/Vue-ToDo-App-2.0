<template>
	<li>
		<div class='create' >
			<my-input labelName='title' :initVal='title' @change="changeBuffer">
				<span slot='labelName'>Title</span>
			</my-input>
			<my-input labelName='project' :initVal='project' @change="changeBuffer">
				<span slot='labelName'>Project</span>
			</my-input>
			<div>
				<closesaveBtn @closeAndSave="closeAndSave">
					<span slot='close'>Save</span>
				</closesaveBtn>
			    <button @click='cancel' v-if="!notInited">Cancel</button>
			</div>
		</div>
	</li>
</template>

<script>
	import closesaveBtn from './closesaveBtn'
	import myInput from './myInput'
    import vue from 'vue'
    import vuex from 'vuex'
    vue.use(vuex);
	export default{
		props: ['todoIndex'],
		components: {
			closesaveBtn,myInput
		},
    data(){
      return {
        todo: this.$store.state.todos[this.todoIndex],
        title: null,
        project: null,
      }
    },
    mounted(){
		  this.title = this.todo.title;
		  this.project = this.todo.project;
    },
		computed:{
        notInited(){
            return this.todo.inited;
			  },
		},
    methods:{
      changeBuffer(change){
          this[change.key] = change.value;
      },
      cancel(){
          this.$store.commit('deleteIt',this.todoIndex);
      },
      closeAndSave(){
        this.$store.commit({
          type:'change',
          change:{
            index: this.todoIndex,
            changes: {
              editing: false,
              inited: true,
              title: this.title,
              project: this.project,
            }
          }
        });
      }
    }
	}
</script>
