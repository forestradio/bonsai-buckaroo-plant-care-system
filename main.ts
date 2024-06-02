let reading = 0
music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
//  !!!!!Pause für 5 Minuten (300.000 Millisekunden)
basic.forever(function on_forever() {
    
    reading = pins.analogReadPin(AnalogPin.P1)
    led.plotBarGraph(reading, 1023)
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(reading)
    }
    
    if (reading < 500) {
        while (reading < 500) {
            music.playTone(262, music.beat(BeatFraction.Whole))
            pins.digitalWritePin(DigitalPin.P2, 1)
            basic.pause(5000)
            pins.digitalWritePin(DigitalPin.P2, 0)
            reading = pins.analogReadPin(AnalogPin.P1)
            led.plotBarGraph(reading, 1023)
            if (input.buttonIsPressed(Button.A)) {
                basic.showNumber(reading)
            }
            
        }
    } else {
        basic.clearScreen()
        //  LEDs ausschalten
        basic.pause(3600000)
    }
    
})
