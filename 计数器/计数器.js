var counter = new Vue(
    {
        el: "#counter",
        data: {
            num: 0
        },
        methods: {
            Add: function () {
                this.num++;
            },
            Sub: function () {
                this.num--;
            }
        }
    }
)