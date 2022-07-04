// contains methods used in more than one place
export default {
    methods: {
        // used to format the date and time, two options available:
        // short-> DD/MM/YYYY
        // not short-> DD/MM/YYYY HH:MM

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

        // counts the cards displayed inside the lists
        countCards() {
            let j = 0
            // retrieves all the cards
            const x = document.getElementsByClassName('card-to-count')
            let el
            // checks if the card is displayed or not
            for (el of x) {
                if (window.getComputedStyle(el).display !== 'none') {
                    j += 1
                }
            }
            return j // returns the total count
        },
    }
}
