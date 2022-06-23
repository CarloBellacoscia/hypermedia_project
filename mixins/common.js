
export default {
    methods: {
        formatDate(val){
          const temp= val.toString().slice(0,10).split('-')
          const month = temp[1];
          const day = temp[2];
          // const year = temp[0];
        return  day +'/'+month
      },
      formatMyDate(val){
        return  "Date:" + val
      }
    }
}
