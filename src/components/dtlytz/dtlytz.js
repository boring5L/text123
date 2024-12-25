import { useRouter } from 'vue-router'
  
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
        dataArray:Array.from({length:25},(_,i)=>`数据${i + 1}`)
      };
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
  },
  mounted(){
       
  }
}
      




  
    
