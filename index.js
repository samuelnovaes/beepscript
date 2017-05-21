#!/usr/bin/env node

var header = require("waveheader");
var fs = require("fs");
var path = require("path");

var tone = {
	play: function(freq, lengthInSecs) {
		freq = freq || 400;
		lengthInSecs = lengthInSecs || 1;
		var cycle = Math.round(44100/freq);
		var samplesLeft = lengthInSecs * 44100;
		var cycles = samplesLeft/cycle;
		var ret = [];
		for(var i = 0; i < cycles; i++) {
			ret = ret.concat(generateCycle(cycle, 30));
		}
		return ret;
	},
	sleep: function(lengthInSecs) {
		lengthInSecs = lengthInSecs || 1;
		var cycle = Math.round(44100 * lengthInSecs);
		return generateCycle(cycle, 0);
	}
};

function generateCycle(cycle, volume) {
	var data = [];
	var tmp;
	for(var i = 0; i < cycle; i++) {
		tmp = volume * Math.sin((i/cycle) * Math.PI * 2);
		data[i] = Math.round(tmp);
	}
	return data;
}

function play(index, loop){
	loop = loop || 1;
	var res = [];
	var actions = eval(objeto[index]);
	for(var i = 0; i < loop; i++){
		actions.forEach(function(item){
			res = res.concat(item);
		});
	}
	return res;
}

function beep(freq, time){
	return tone.play(freq, time);
}

function note(nota, octavo, time){
	if(nota != undefined){
		octavo = octavo == undefined ? 4 : octavo;
		nota = nota.split(' ').join('');
		var notas = {
			"c": 16,
			"c#": 17,
			"d": 18,
			"d#": 19,
			"e": 21,
			"f": 22,
			"f#": 23,
			"g": 25,
			"g#": 26,
			"a": 27,
			"a#": 29,
			"b": 30
		}
		var frequencia = notas[nota] * Math.pow(2, octavo);
		return beep(frequencia, time);
	}
	else{
		return beep(440, 1);
	}
}

function sleep(time){
	return tone.sleep(time);
}

if(!process.argv[2]){
	console.log("Usage: beepscript [FILE]");
}
else if(!fs.existsSync(process.argv[2])){
	console.log("No such file or directory "+process.argv[2]);
}
else{
	var res = [];
	var fileString = fs.readFileSync(process.argv[2], "utf-8");
	fileString = ('{"'+fileString.toLowerCase().split('\n').join('').split('\t').join('').split(' ').join('').split('"').join("'").split(/\/\*.+?\*\/|\/\/.*(?=[\n\r])/g).join('').split('{').join('":"{').split('{').join('[').split('}').join(']","').split(')').join('),').split(',]').join(']')+'}').split(',"}').join('}');
	var objeto = JSON.parse(fileString);
	var main = eval(objeto["main"]);
	main.forEach(function(item){
		res = res.concat(item);
	});

	var wavFile = path.join(path.dirname(process.argv[2]), path.parse(process.argv[2]).name+".wav");
	var writer = new fs.createWriteStream(wavFile);
	writer.write(header());
	writer.write(new Buffer(res));
	writer.end();
	console.log("Script compiled to "+wavFile);
}