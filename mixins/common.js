
export default {
    methods: {
        formatDate(val){
          const date= val.toString().slice(0,10).split('-')
          const time= val.toString().slice(11,).split(':')
          const month = date[1];
          const day = date[2];
          const hour = time[0];
          const minutes = time[1];
          // const year = temp[0];
        return  day +'/'+month + ' ' + hour + ':' + minutes
      },
      formatMyDate(val){
        return  "Date:" + val
      }
    }
}
