import { useRouter } from 'vue-router'
import { mapGetters } from 'vuex';
  
export default {
   props: {
        data: {
            type: String,
            required: true // 根据需要设置
        }
    },
  name:"dtlytz",
  data(){
      return{
        newItem:'',
        dataArray:Array.from({length:25},(_,i)=>`数据${i + 1}`)
      };
  },
  computed:{
     ...mapGetters(['getItems']),
     item(){
      return this.getItems;
     }
  },
  methods:{
    navigateToDetail(item){
      console.log(item)
      this.$router.push({ name:'Detail', params: {data: item}});
    },
     goToHellowWorld() {
     this.$router.push("/");
    },
    CS(){console.log(this.dataArray)},
    addNewItem(){
      if(this.newItem.trim()){
        this.$store.dispatch('addItem',this.newItem.trim());
        this.newItem = '';
        console.log(this.item)
      }
    },
    removeItem(index){
      this.$store.dispatch('removeItem',index);
    }
  },
  mounted(){
       
  }
}
      




  
    
