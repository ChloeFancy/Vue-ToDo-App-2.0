import vue from 'vue'
import vuex from 'vuex'
vue.use(vuex);

export default new vuex.Store({
   state:{
       todos: [
           {
               title: 'todo A', project: '编译原理作业',
               done: false, editing: false, inited: true,
           },
           {
               title: 'todo B', project: '系统结构实验',
               done: false, editing: false, inited: true,
           },
           {
               title: 'todo C', project: 'project C',
               done: false, editing: false, inited: true,
           },
           {
               title: 'todo D', project: 'project D',
               done: false, editing: false, inited: true,
           }
       ]
   },
   mutations:{
       deleteIt(state,index){
           state.todos.splice(index,1);
       },
       change(state,payload){
           var {index,changes} = payload.change;
           for(let key in changes) {
               state.todos[index][key] = changes[key];
           }
           console.log(state.todos[index]);
       },
       addNew(state){
           state.todos.unshift(new createTodo('',''));
       }
   },
    getters:{
        getTodos(state){
          return [].concat(state.todos);
        },
        pending_count(state){
            return state.todos.reduce((prev,cur)=>{
                if(!cur.done){
                    prev+=1;
                }
                return prev;
            },0);
        },
        completed_count(state){
            return state.todos.reduce((prev,cur)=>{
                if(cur.done){
                    prev+=1;
                }
                return prev;
            },0);
        }
    }
});

function createTodo(title, project){
    this.title = title;
    this.project = project;
    this.done = false;
    this.editing = false;
    this.inited = false;
}
