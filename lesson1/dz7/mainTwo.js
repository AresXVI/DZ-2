
const svetofor = prompt('Выберите цвета: (red, yellow, green)')
class Component {
    constructor(selector) {
        this.$element = document.querySelector(selector)
    }
    hide() {
        this.$element.style.display = 'none'
    }
    show() {
        this.$element.style.display = 'block'
    }
}

class Block extends Component {
    constructor(options) {
        super(options.selector)
        this.$element.style.width = this.$element.style.height = options.razmer + 'px'
        this.$element.style.background = options.cvet
    }
}

class Circle extends Block {
    constructor(options) {
        super(options)
        this.$element.style.borderRadius = options.krug + '%'
    }
}
const circle1 = new Circle ({
    selector: '#block1',
    razmer: 150,
    cvet: 'red',
    krug: 50
})

const circle2 = new Circle ({
    selector: '#block2',
    razmer: 150,
    cvet: 'yellow',
    krug: 50
})

const circle3 = new Circle({
    selector: '#block3',
    razmer: 150,
    cvet: 'green',
    krug: 50
})
circle1.hide()
circle2.hide()
circle3.hide()
if (svetofor === 'red'.toLocaleLowerCase().trim()) {
    circle1.show()
} else if (svetofor === 'yellow'.toLocaleLowerCase().trim()) {
    circle2.show()
} else if (svetofor === 'green'.toLocaleLowerCase().trim()) {
    circle3.show()
} else {
    alert('Выберите цвета которые есть !!!')
}