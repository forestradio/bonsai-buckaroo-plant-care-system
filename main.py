reading = 0
music.start_melody(music.built_in_melody(Melodies.ENTERTAINER),
    MelodyOptions.ONCE)

def on_forever():
    global reading
    reading = pins.analog_read_pin(AnalogPin.P1)
    led.plot_bar_graph(reading, 1023)
    if input.button_is_pressed(Button.A):
        basic.show_number(reading)
    
    if reading < 500:
        while reading < 500:
            music.play_tone(262, music.beat(BeatFraction.WHOLE))
            pins.digital_write_pin(DigitalPin.P2, 1)
            basic.pause(5000)
            pins.digital_write_pin(DigitalPin.P2, 0)
            reading = pins.analog_read_pin(AnalogPin.P1)
            led.plot_bar_graph(reading, 1023)
            if input.button_is_pressed(Button.A):
                basic.show_number(reading)
    else:
        basic.clear_screen()  # LEDs ausschalten
        basic.pause(3600000)  # !!!!!Pause für 5 Minuten (300.000 Millisekunden)

basic.forever(on_forever)
