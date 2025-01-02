class Cars {
    constructor(options){
        this.model = options.model
        this.color = options.color
        this.wheels = options.wheels
    }

    start() {
        console.log('Машина заведена');
    }
}

class Truck extends Cars {
    constructor(options)  {
        super(options)
        this.cargo_capacity = options.cargo_capacity // грузоподъёмность
    }
}

class SportCar extends Cars{
    constructor(options) {
        super(options)
        this.max_speed = options.max_speed // максимальная скорость
    }
}

class ElectricCar extends Cars {
    constructor(options) {
        super(options)
        this.battery_capacity = options.battery_capacity // ёмкость батареи
    }
}

const truck = new Truck ({
    model: 'Volvo',
    color: 'white',
    wheels: 6,
    cargo_capacity: 10 + ' t'
}) 

const sportCar = new SportCar ({
    model: 'Ferrair',
    color: 'red',
    wheels: 4,
    max_speed: 350 + ' km/h'
})

const electricCar = new ElectricCar ({
    model: 'Tesla',
    color: 'black',
    wheels: 4,
    battery_capacity: 100 + ' kVt/h'
})
console.log(truck);
truck.start()
console.log(sportCar);
sportCar.start()
console.log(electricCar);
electricCar.start()