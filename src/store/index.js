import { createStore } from 'vuex';
const store = createStore({
    state(){
       return {
        item:[],
       };
    },
    mutations:{
        addItem(state,item){
            state.item.push(item);
        },
        removeItem(state,index){
            state.item.splice(index,1);
        },
    },
    actions:{
        addItem({commit},item){
            commit('addItem',item);
        },
        removeItem({commit},index){
            commit('removeItem',index);
        }
    },
    getters:{
        getItems(state){
            return state.item;
        }
    }
})
export default store;

