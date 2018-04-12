class Bike {
    constructor(
        public price: number,
        public max_speed: string,
        public miles = 0
    ) { }
    displayinfo = function () {
        console.log(this.price, this.max_speed, this.miles)
    }
    ride = function (times) {
        for (var i = 0; i < times; i++) {
            this.miles += 10;
            console.log("riding", this.miles)
        }
        return this;
    }
    reverse = function (times) {
        if (this.miles > 5) {
            for (var i = 0; i < times; i++) {
                this.miles -= 5;
                console.log("reversing", this.miles)
            }
        }
        return this;
    }
}

const bike1 = new Bike(200, "25mph");
bike1.ride(3).reverse(1).displayinfo();

const bike2 = new Bike(500, "40mph");
bike2.ride(2).reverse(2).displayinfo();

const bike3 = new Bike(700, "60mph");
bike3.reverse(3).displayinfo();