/**
Generate a .wav file of Tetris-Theme-A (Gameboy).
Copyright (C) 2017 Jens Ungerer

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.

This program is based on the music-sheet at
[https://www.youtube.com/watch?v=s-6B8H8Ieuk].
The speed of the song was inspired by the video at
[https://www.youtube.com/watch?v=NmCCQxVBfyM].
*/
const BeepScript = require('beepscript')
const bs = new BeepScript()

const durationFourQuarter = (10 / 3) * 0.95
const DURATION_BRAKE = 0.025 //
const DURATION_HALF = 0.475 // (1/2)-0,025
const DURATION_QUARTER = 0.225 // (1/4)-0.025
const DURATION_EIGHTH = 0.100 // (1/8)-0.025
// const DURATION_SEMIQUAVER = 0.0375 // (1/16)-0.025
const DURATION_QUARTER_PLUS_HALF = 0.350 // ((1/4)*1.5)-0.025

function partOne() {
	//1
	bs.sleep(DURATION_BRAKE * durationFourQuarter)
	bs.beep('E5', DURATION_QUARTER * durationFourQuarter)

	bs.sleep(DURATION_BRAKE * durationFourQuarter)
	bs.beep('B4', DURATION_EIGHTH * durationFourQuarter)

	bs.sleep(DURATION_BRAKE * durationFourQuarter)
	bs.beep('C5', DURATION_EIGHTH * durationFourQuarter)

	bs.sleep(DURATION_BRAKE * durationFourQuarter)
	bs.beep('D5', DURATION_QUARTER * durationFourQuarter)

	bs.sleep(DURATION_BRAKE * durationFourQuarter)
	bs.beep('C5', DURATION_EIGHTH * durationFourQuarter)

	bs.sleep(DURATION_BRAKE * durationFourQuarter)
	bs.beep('B4', DURATION_EIGHTH * durationFourQuarter)

	//2
	bs.sleep(DURATION_BRAKE * durationFourQuarter)
	bs.beep('A4', DURATION_QUARTER * durationFourQuarter)

	bs.sleep(DURATION_BRAKE * durationFourQuarter)
	bs.beep('A4', DURATION_EIGHTH * durationFourQuarter)

	bs.sleep(DURATION_BRAKE * durationFourQuarter)
	bs.beep('C5', DURATION_EIGHTH * durationFourQuarter)

	bs.sleep(DURATION_BRAKE * durationFourQuarter)
	bs.beep('E5', DURATION_QUARTER * durationFourQuarter)

	bs.sleep(DURATION_BRAKE * durationFourQuarter)
	bs.beep('D5', DURATION_EIGHTH * durationFourQuarter)

	bs.sleep(DURATION_BRAKE * durationFourQuarter)
	bs.beep('C5', DURATION_EIGHTH * durationFourQuarter)

	//3
	bs.sleep(DURATION_BRAKE * durationFourQuarter)
	bs.beep('B4', DURATION_QUARTER_PLUS_HALF * durationFourQuarter)

	bs.sleep(DURATION_BRAKE * durationFourQuarter)
	bs.beep('C5', DURATION_EIGHTH * durationFourQuarter)

	bs.sleep(DURATION_BRAKE * durationFourQuarter)
	bs.beep('D5', DURATION_QUARTER * durationFourQuarter)

	bs.sleep(DURATION_BRAKE * durationFourQuarter)
	bs.beep('E5', DURATION_QUARTER * durationFourQuarter)

	//4
	bs.sleep(DURATION_BRAKE * durationFourQuarter)
	bs.beep('C5', DURATION_QUARTER * durationFourQuarter)

	bs.sleep(DURATION_BRAKE * durationFourQuarter)
	bs.beep('A4', DURATION_QUARTER * durationFourQuarter)

	bs.sleep(DURATION_BRAKE * durationFourQuarter)
	bs.beep('A4', DURATION_EIGHTH * durationFourQuarter)

	bs.sleep(DURATION_BRAKE * durationFourQuarter)
	bs.beep('A4', DURATION_EIGHTH * durationFourQuarter)

	bs.sleep(DURATION_BRAKE * durationFourQuarter)
	bs.beep('B4', DURATION_EIGHTH * durationFourQuarter)

	bs.sleep(DURATION_BRAKE * durationFourQuarter)
	bs.beep('C5', DURATION_EIGHTH * durationFourQuarter)

	//5
	bs.sleep(DURATION_BRAKE * durationFourQuarter)
	bs.beep('D5', DURATION_QUARTER_PLUS_HALF * durationFourQuarter)

	bs.sleep(DURATION_BRAKE * durationFourQuarter)
	bs.beep('F5', DURATION_EIGHTH * durationFourQuarter)

	bs.sleep(DURATION_BRAKE * durationFourQuarter)
	bs.beep('A5', DURATION_QUARTER * durationFourQuarter)

	bs.sleep(DURATION_BRAKE * durationFourQuarter)
	bs.beep('G5', DURATION_EIGHTH * durationFourQuarter)

	bs.sleep(DURATION_BRAKE * durationFourQuarter)
	bs.beep('F5', DURATION_EIGHTH * durationFourQuarter)

	//6
	bs.sleep(DURATION_BRAKE * durationFourQuarter)
	bs.beep('E5', DURATION_QUARTER_PLUS_HALF * durationFourQuarter)

	bs.sleep(DURATION_BRAKE * durationFourQuarter)
	bs.beep('C5', DURATION_EIGHTH * durationFourQuarter)

	bs.sleep(DURATION_BRAKE * durationFourQuarter)
	bs.beep('E5', DURATION_QUARTER * durationFourQuarter)

	bs.sleep(DURATION_BRAKE * durationFourQuarter)
	bs.beep('D5', DURATION_EIGHTH * durationFourQuarter)

	bs.sleep(DURATION_BRAKE * durationFourQuarter)
	bs.beep('C5', DURATION_EIGHTH * durationFourQuarter)

	//7
	bs.sleep(DURATION_BRAKE * durationFourQuarter)
	bs.beep('B4', DURATION_QUARTER * durationFourQuarter)

	bs.sleep(DURATION_BRAKE * durationFourQuarter)
	bs.beep('B4', DURATION_EIGHTH * durationFourQuarter)

	bs.sleep(DURATION_BRAKE * durationFourQuarter)
	bs.beep('C5', DURATION_EIGHTH * durationFourQuarter)

	bs.sleep(DURATION_BRAKE * durationFourQuarter)
	bs.beep('D5', DURATION_QUARTER * durationFourQuarter)

	bs.sleep(DURATION_BRAKE * durationFourQuarter)
	bs.beep('E5', DURATION_QUARTER * durationFourQuarter)

	//8
	bs.sleep(DURATION_BRAKE * durationFourQuarter)
	bs.beep('C5', DURATION_QUARTER * durationFourQuarter)

	bs.sleep(DURATION_BRAKE * durationFourQuarter)
	bs.beep('A4', DURATION_QUARTER * durationFourQuarter)

	bs.sleep(DURATION_BRAKE * durationFourQuarter)
	bs.beep('A4', DURATION_QUARTER * durationFourQuarter)

	bs.sleep(DURATION_BRAKE * durationFourQuarter)
	bs.sleep(DURATION_QUARTER * durationFourQuarter)
}

function partTwo() {
	//1
	bs.sleep(DURATION_BRAKE * durationFourQuarter)
	bs.beep('E5', DURATION_HALF * durationFourQuarter)

	bs.sleep(DURATION_BRAKE * durationFourQuarter)
	bs.beep('C5', DURATION_HALF * durationFourQuarter)

	//2
	bs.sleep(DURATION_BRAKE * durationFourQuarter)
	bs.beep('D5', DURATION_HALF * durationFourQuarter)

	bs.sleep(DURATION_BRAKE * durationFourQuarter)
	bs.beep('B4', DURATION_HALF * durationFourQuarter)

	//3
	bs.sleep(DURATION_BRAKE * durationFourQuarter)
	bs.beep('C5', DURATION_HALF * durationFourQuarter)

	bs.sleep(DURATION_BRAKE * durationFourQuarter)
	bs.beep('A4', DURATION_HALF * durationFourQuarter)

	//4
	bs.sleep(DURATION_BRAKE * durationFourQuarter)
	bs.beep('G#4', DURATION_HALF * durationFourQuarter)

	bs.sleep(DURATION_BRAKE * durationFourQuarter)
	bs.beep('B4', DURATION_QUARTER * durationFourQuarter)

	bs.sleep(DURATION_BRAKE * durationFourQuarter)
	bs.sleep(DURATION_QUARTER * durationFourQuarter)

	//5
	bs.sleep(DURATION_BRAKE * durationFourQuarter)
	bs.beep('E5', DURATION_HALF * durationFourQuarter)

	bs.sleep(DURATION_BRAKE * durationFourQuarter)
	bs.beep('C5', DURATION_HALF * durationFourQuarter)

	//6
	bs.sleep(DURATION_BRAKE * durationFourQuarter)
	bs.beep('D5', DURATION_HALF * durationFourQuarter)

	bs.sleep(DURATION_BRAKE * durationFourQuarter)
	bs.beep('B4', DURATION_HALF * durationFourQuarter)

	//7
	bs.sleep(DURATION_BRAKE * durationFourQuarter)
	bs.beep('C5', DURATION_QUARTER * durationFourQuarter)

	bs.sleep(DURATION_BRAKE * durationFourQuarter)
	bs.beep('E5', DURATION_QUARTER * durationFourQuarter)

	bs.sleep(DURATION_BRAKE * durationFourQuarter)
	bs.beep('A5', DURATION_HALF * durationFourQuarter)

	//8
	bs.sleep(DURATION_BRAKE * durationFourQuarter)
	bs.beep('G#5', DURATION_HALF * durationFourQuarter)

	bs.sleep(DURATION_BRAKE * durationFourQuarter)
	bs.sleep(DURATION_HALF * durationFourQuarter)
}

partOne()
partOne()
partTwo()

bs.write('tetrisThemeA.wav')
