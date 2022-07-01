
export default {
    methods: {
        formatDate(val, short=false){
          let date= val.toString().slice(0,10).split('-')
            let time;
            let month;
            let day;
            let year;
            let hour;
            let minutes;
            if(!date[1]){
                date= val.toString().slice(0,15).split(' ')
                 time= val.toString().slice(16,).split(':')
                month = date[1];
                 day = date[2];
                 year = date[3];
                 hour = time[0];
                 minutes = time[1];
            } else {
                 time = val.toString().slice(11,).split(':')
                 month = date[1];
                 day = date[2];
                 year = date[0];
                 hour = time[0];
                 minutes = time[1];
            }
          if(short){
              return  day +'/'+month + '/' + year
          }else {
              return  day +'/'+month + '/' + year + ' ' + hour + ':' + minutes
          }

      },
      formatMyDate(val){
        return  "Date:" + val
      },
      formatPosition(val){
        return String(val).replaceAll(' ', '+')
      }
    }
}
