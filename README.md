# BeepScript

> It does'nt work in Windows

Script language to create wave musics

# How to install

```sh
npm install -g beepscript
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
- **beep(frequency)** (Beep for 1 second)
- **beep()** (Beep 440 Hz for 1 second)
- **sleep(duration)** (Duration in seconds)
- **sleep()** (Sleep for 1 second)
- **play(sequence, loop)** (Sequence must be betwen quotes)
- **play(sequence)** (Play sequence only one time)
- **note(note, octave, duration)** (Note must be betwen quotes, octave is an integer number, duration in secods)
- **note(note, octave)** (Play a note for 1 second)
- **note(note)** (Play a note in octave 4 for 1 second)
- **note()** (Play the note A in octave 4 for 1 second, equivalent to beep())
- **Supported notes:** C, C#, D, D#, E, F, F#, G, G#, A, A#, B

#Comments
```javascript
/* This is a comment */
```
Comments must be between /* and */

#Remember
BeepScript isn't case sensitive and ignores any space. BeepScript doesn't use semicolons. The script below works perfectly.
```javascript
M AIn {
    PLAY('sequ Ence1')
}
Sequence 1 {
    Be E p()
}
```

#Example
mymusic.bs
```javascript
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