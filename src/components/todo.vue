<template>
	<li>
		<div class='viewing'>
			<div class='title'>{{todo.title}}</div>
	    	<div class='project'>{{todo.project}}</div>

	    	<div>
		    	<img src="../images/edit.png" @click='edit' alt='no img'>
	    		<img src="../images/delete.png" @click='deleteTodo' alt='no img'>
	    	</div>

	    	<button @click='complete' :class="[todo.done?'completed': 'pending']">
    			{{todo.done?'completed': 'pending'}}
    		</button>
		</div>
	</li>

</template>
<script>
    import vue from 'vue'
    import vuex from 'vuex'
    vue.use(vuex);

	export default{
		props: ['todoIndex'],
		computed:{
		    todo(){
		        //只用来读
		        return this.$store.state.todos[this.todoIndex];
			},
		},
		methods: {
			edit: function(){
        this.$store.commit({
            type:'change',
            change:{
                index: this.todoIndex,
                changes: {
                    editing: true,
                }
            }
        });
			},
			complete: function(){
        this.$store.commit({
            type:'change',
            change:{
                index: this.todoIndex,
                changes: {
                    done: !this.todo.done
                }
            }
        });
        if(this.todo.done)
            this.$emit('todoDone');
			},
			deleteTodo: function(){
        this.$emit('showDelete',this.todoIndex);
			}
		}
	}
</script>
