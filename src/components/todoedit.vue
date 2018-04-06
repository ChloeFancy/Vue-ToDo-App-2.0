<template>
	<li>
		<div class='editing' @change="changeBuffer">
			<my-input labelName='title' :initVal="title">
				<span slot='labelName'>Title</span>
			</my-input>
			<my-input labelName='project' :initVal="project">
				<span slot='labelName'>Project</span>
			</my-input>

    		<closesaveBtn @closeAndSave="closeAndSave"></closesaveBtn>
		</div>
	</li>

</template>
<script>
	import myInput from './myInput'
	import closesaveBtn from './closesaveBtn'
	export default{
		props: ['todoIndex'],
		components: {
			closesaveBtn,myInput
		},
		data(){
		    return {
                title: this.$store.state.todos[this.todoIndex].title,
                project: this.$store.state.todos[this.todoIndex].project,
			}
		},
		methods:{
            changeBuffer(change){
                this[change.key] = change.value;
            },
            closeAndSave(){
                this.$store.commit({
					type:'change',
					changes:{
						index: this.todoIndex,
						changes: {
							editing: false,
							inited: true,
							title: this.titleBuffer,
							project: this.projectBuffer,
						}
					}
                });
			}
		}
	}
</script>