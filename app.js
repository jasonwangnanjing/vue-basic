new Vue({
    el: '#vue-app',
    data: {
        name: 'Shaun',
        job: 'Ninja'
    },
    methods: {
        greet: function(time){
            return 'Good ' + time + ', ' + this.name;
        },
        //between method comma is mandatory
        fight: function (date) {
            console.log("fight method is executed")
            return 'fight' + date  + this.job;

        }
    }
});
