function setRight (value: number) {
    if (right != value) {
        radio.sendValue("right", value)
        right = value
    }
}
function setLeft (value: number) {
    if (left != value) {
        radio.sendValue("left", value)
        left = value
    }
}
let left = 0
let right = 0
radio.setGroup(1)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        setLeft(255)
        setRight(-255)
    } else if (input.buttonIsPressed(Button.B)) {
        setLeft(-255)
        setRight(255)
    } else if (input.buttonIsPressed(Button.AB)) {
        setLeft(0)
        setRight(0)
    } else {
    	
    }
})
