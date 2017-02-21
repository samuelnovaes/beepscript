# BeepScript

> It may not work on Windows.

Script language to create wave musics

# How to install

```sh
[sudo] npm install -g beepscript
```

# How to compile
```sh
beepscript mymusic.bs
```
It will generate a .wav file automatically in the same directory

#Syntaxe
```javascript
sequence {
    /*Commands...*/
}
```
#Commands
- **beep(frequency, duration)** (Duration in seconds, frequency in Hz)
- **sleep(duration)** (Duration in seconds)
- **play(sequence, loop)** (Sequence must be betwen quotes)
- **note(note, octave, duration)** (Note must be betwen quotes, octave is an integer number, duration in secods)
- **Supported notes:** C, C#, D, D#, E, F, F#, G, G#, A, A#, B

#Comments
```javascript
/* This is a comment */
```
Comments must be between /* and */

#Example
mymusic.bs
```
main {                     /* Main sequence */
    play('sequence1', 3)   /* Play the sequence1 3 times */
    beep(600)              /* Beep 600 Hz frequency for 1 second */
    beep()                 /* Beep 440 Hz frequency for 1 second */
    sleep(0.5)             /* Sleep for 0.5 seconds */
    beep(400, 0.3)         /* Beep 400 Hz frequency for 0.3 seconds */
    sleep()                /* Sleep for 1 second */
    play('sequence2')      /* Play the sequence2 one time */
    note('C#', 3, 0.5)     /* Play the note C# in octave 3 for 0.5 seconds */
    note('B', 5)           /* Play the note B in octave 5 for 1 second */
    note()                 /* Play the note A in octave 4 for 1 second */
}                          /* Close main sequence */

sequence1 {
    sleep(0.5)
    beep(600, 0.3)
    beep(500, 0.3)
    beep(400, 0.3)
    beep(500, 0.3)
}

sequence2 {
    note('C', 4, 0.5)
    note('F#', 3)
    note('F', 4, 0.3)
    sleep(2) 
}
```
