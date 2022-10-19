let X = 0
let Dx = 0
input.onButtonPressed(Button.A, function () {
    X = 0
    while (!(input.buttonIsPressed(Button.B))) {
        for (let Y = 0; Y <= 4; Y++) {
            led.plot(X, Y)
        }
        if (X == 4) {
            Dx = -1
        } else if (X == 0) {
            Dx = 1
        }
        X += Dx
        basic.pause(100)
        basic.clearScreen()
    }
})
