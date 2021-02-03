input.onButtonPressed(Button.A, function () {
    if (left == 255) {
        radio.sendValue("left", 0)
        left = 0
    } else {
        radio.sendValue("left", 255)
        left = 255
    }
})
input.onButtonPressed(Button.B, function () {
    if (right == 255) {
        radio.sendValue("right", 0)
        right = 0
    } else {
        radio.sendValue("right", 255)
        right = 255
    }
})
let right = 0
let left = 0
radio.setGroup(1)
