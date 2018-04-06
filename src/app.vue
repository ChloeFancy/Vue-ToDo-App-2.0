<template>
    <div>
    <div id='cover' v-show='deleteAlert||done'></div>
    <transition name='pop'>
        <pop-window
            v-if='deleteAlert'
            class='deleteWindow'
        >
            <div slot='innerImg'>
                <div class='gang'></div>
                <div class='dot'></div>
            </div>
            <div slot='title'>Are you sure?</div>
            <div slot='content'>This To-Do will be permanently deleted!</div>
            <div slot='buttons'>
                <button @click='deleteAlert=false;'>Cancel</button>
                <button @click='deleteTodo'>Yes, delete it!</button>
            </div>
        </pop-window>
    </transition>

    <transition name='pop'>
        <pop-window
            v-if='done'
            class='SuccessWindow'
        >
            <div slot='innerImg' class='check'></div>
            <div slot='title'>Success!</div>
            <div slot='content'>To-Do completed!</div>
            <div slot='buttons'>
                <button @click='done=false;'>OK</button>
            </div>
        </pop-window>
    </transition>

        <todo-list
            @showDelete='showDelete'
            @todoDone='done=true;'
        >
        </todo-list>
    </div>
</template>

<script>
import todoList from './components/todoList';
import popWindow from './components/popWindow';

import vue from 'vue'
import vuex from 'vuex'
vue.use(vuex);
import store from './store/store'

    export default{
        name: 'app',
        store,
        components: {
            todoList,popWindow,
        },
        data(){
            return{
                deleteAlert: false,
                currentIndex: -1,
                done: false,
            };
        },
        methods: {
            showDelete(todoIndex){
                this.deleteAlert = true;
                this.currentIndex = todoIndex;
            },
            deleteTodo(){
                this.$store.commit('deleteIt',this.todoIndex);
                this.currentIndex = -1;
                this.deleteAlert=false;
            }
        },
        mounted(){
            //移动端的问题
            // var cssEl = document.createElement('style');
            // document.documentElement.firstElementChild.appendChild(cssEl);
            //
            // function setPxPerRem(){
            //     var dpr = 1;
            //     //把viewport分成10份的rem，html标签的font-size设置为1rem的大小;
            //     var pxPerRem = document.documentElement.clientWidth * dpr / 10;
            //     cssEl.innerHTML = '@media screen and max-width: 768px{html{font-size:' + pxPerRem + 'px!important;}}';
            // }
            // setPxPerRem();
        }
    }



    window.onload = function(){var cover = document.getElementById('cover');
    cover.style.height = (document.documentElement.offsetHeight||document.body.offsetHeight)+'px';}
</script>

