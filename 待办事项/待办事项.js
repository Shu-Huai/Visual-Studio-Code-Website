var atodoApp = new Vue({
    el: "#todoApp",
    data: {
        list: [],
        inputValue: ""
    },
    methods: {
        Add: function () {
            this.list.push(this.inputValue);
            this.inputValue = "";
        },
        Remove: function (index) {
            this.list.splice(index, 1);
        },
        Clear: function () {
            this.list.splice(0);
        }
    },
})