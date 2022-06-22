/***********************************/
/***** Familiarity Rating Task *****/
/***********************************/

/*
Here, participants are presented with
disyllabic and trisyllabic combinations, and must determine
which of the combinations presented to them belongs to the language
they heard in the first part of the study.

There are 34 total trials (randomized):
22 2-AFC Trials
12 4-AFC Trials


*/


var twoafc_count = 0;
var fourafc_count = 0;


//2 counterbalanced sets of timeline variables for the 2AFC trials
var twoAFC_array1 = [
		{word1: 'sounds/test/monalu.wav', word2: 'sounds/test/naniri.wav', correct:0, tptype:'third', length: 'triplet', trialnumber: 'one'},
		{word1: 'sounds/test/monasi.wav', word2: 'sounds/test/namosi.wav', correct:1, tptype:'third', length: 'triplet', trialnumber: 'two'},
		{word1: 'sounds/test/silumo.wav', word2: 'sounds/test/silugi.wav', correct:0, tptype:'third', length: 'triplet', trialnumber: 'three'},
		{word1: 'sounds/test/komolu.wav', word2: 'sounds/test/lusina.wav', correct:1, tptype:'third', length: 'triplet', trialnumber: 'four'},
		{word1: 'sounds/test/tafuko.wav', word2: 'sounds/test/gitaru.wav', correct:0, tptype:'one', length: 'triplet', trialnumber: 'five'},
		{word1: 'sounds/test/surufu.wav', word2: 'sounds/test/rigimi.wav', correct:1, tptype:'one', length: 'triplet', trialnumber: 'six'},
		{word1: 'sounds/test/rupuni.wav', word2: 'sounds/test/fifumi.wav', correct:0, tptype:'one', length: 'triplet', trialnumber: 'seven'},
		{word1: 'sounds/test/lumoti.wav', word2: 'sounds/test/fitisu.wav', correct:1, tptype:'one', length: 'triplet', trialnumber: 'eight'},
		{word1: 'sounds/test/monalu.wav', word2: 'sounds/test/timosi.wav', correct:0, tptype:'third', length: 'triplet', trialnumber: 'nine'},
		{word1: 'sounds/test/fifumi.wav', word2: 'sounds/test/namosi.wav', correct:1, tptype:'third', length: 'triplet', trialnumber: 'ten'},
		{word1: 'sounds/test/silumo.wav', word2: 'sounds/test/narisi.wav', correct:0, tptype:'third', length: 'triplet', trialnumber: 'eleven'},
		{word1: 'sounds/test/surufu.wav', word2: 'sounds/test/lusina.wav', correct:1, tptype:'third', length: 'triplet', trialnumber: 'twelve'},
		{word1: 'sounds/test/tafuko.wav', word2: 'sounds/test/filuna.wav', correct:0, tptype:'one', length: 'triplet', trialnumber: 'thirteen'},
		{word1: 'sounds/test/tapuni.wav', word2: 'sounds/test/rigimi.wav', correct:1, tptype:'one', length: 'triplet', trialnumber: 'fourteen'},
		{word1: 'sounds/test/rupuni.wav', word2: 'sounds/test/monasi.wav', correct:0, tptype:'third', length: 'triplet', trialnumber: 'fifteen'},
		{word1: 'sounds/test/sukomi.wav', word2: 'sounds/test/fitisu.wav', correct:1, tptype:'one', length: 'triplet', trialnumber: 'sixteen'},
		{word1: 'sounds/test/nalu.wav', word2: 'sounds/test/mosu.wav', correct:0, tptype:'third', length:'pair', trialnumber: 'seventeen'},
		{word1: 'sounds/test/nasi.wav', word2: 'sounds/test/mosi.wav', correct:1, tptype:'third', length:'pair', trialnumber: 'eighteen'},
		{word1: 'sounds/test/lumo.wav', word2: 'sounds/test/fulu.wav', correct:0, tptype:'third', length:'pair', trialnumber: 'nineteen'},
		{word1: 'sounds/test/nina.wav', word2: 'sounds/test/sina.wav', correct:1, tptype:'third', length:'pair', trialnumber: 'twenty'},
		{word1: 'sounds/test/fuko.wav', word2: 'sounds/test/taru.wav', correct:0, tptype:'one', length:'pair', trialnumber: 'twentyone'},
		{word1: 'sounds/test/luru.wav', word2: 'sounds/test/rigi.wav', correct:1, tptype:'one', length:'pair', trialnumber: 'twentytwo'}
		];

var twoAFC_array2 = [
		{word1: 'sounds/test/naniri.wav', word2: 'sounds/test/monalu.wav', correct:1, tptype:'third', length: 'triplet', trialnumber: 'one'},
		{word1: 'sounds/test/namosi.wav', word2: 'sounds/test/monasi.wav', correct:0, tptype:'third', length: 'triplet', trialnumber: 'two'},
		{word1: 'sounds/test/silugi.wav', word2: 'sounds/test/silumo.wav', correct:1, tptype:'third', length: 'triplet', trialnumber: 'three'},
		{word1: 'sounds/test/lusina.wav', word2: 'sounds/test/komolu.wav', correct:0, tptype:'third', length: 'triplet', trialnumber: 'four'},
		{word1: 'sounds/test/gitaru.wav', word2: 'sounds/test/tafuko.wav', correct:1, tptype:'one', length: 'triplet', trialnumber: 'five'},
		{word1: 'sounds/test/rigimi.wav', word2: 'sounds/test/surufu.wav', correct:0, tptype:'one', length: 'triplet', trialnumber: 'six'},
		{word1: 'sounds/test/fifumi.wav', word2: 'sounds/test/rupuni.wav', correct:1, tptype:'one', length: 'triplet', trialnumber: 'seven'},
		{word1: 'sounds/test/fitisu.wav', word2: 'sounds/test/lumoti.wav', correct:0, tptype:'one', length: 'triplet', trialnumber: 'eight'},
		{word1: 'sounds/test/timosi.wav', word2: 'sounds/test/monalu.wav', correct:1, tptype:'third', length: 'triplet', trialnumber: 'nine'},
		{word1: 'sounds/test/namosi.wav', word2: 'sounds/test/fifumi.wav', correct:0, tptype:'third', length: 'triplet', trialnumber: 'ten'},
		{word1: 'sounds/test/narisi.wav', word2: 'sounds/test/silumo.wav', correct:1, tptype:'third', length: 'triplet', trialnumber: 'eleven'},
		{word1: 'sounds/test/lusina.wav', word2: 'sounds/test/surufu.wav', correct:0, tptype:'third', length: 'triplet', trialnumber: 'twelve'},
		{word1: 'sounds/test/filuna.wav', word2: 'sounds/test/tafuko.wav', correct:1, tptype:'one', length: 'triplet', trialnumber: 'thirteen'},
		{word1: 'sounds/test/rigimi.wav', word2: 'sounds/test/tapuni.wav', correct:0, tptype:'one', length: 'triplet', trialnumber: 'fourteen'},
		{word1: 'sounds/test/monasi.wav', word2: 'sounds/test/rupuni.wav', correct:1, tptype:'third', length: 'triplet', trialnumber: 'fifteen'},
		{word1: 'sounds/test/fitisu.wav', word2: 'sounds/test/sukomi.wav', correct:0, tptype:'one', length: 'triplet', trialnumber: 'sixteen'},
		{word1: 'sounds/test/mosu.wav', word2: 'sounds/test/nalu.wav', correct:1, tptype:'third', length:'pair', trialnumber: 'seventeen'},
		{word1: 'sounds/test/mosi.wav', word2: 'sounds/test/nasi.wav', correct:0, tptype:'third', length:'pair', trialnumber: 'eighteen'},
		{word1: 'sounds/test/fulu.wav', word2: 'sounds/test/lumo.wav', correct:1, tptype:'third', length:'pair', trialnumber: 'nineteen'},
		{word1: 'sounds/test/sina.wav', word2: 'sounds/test/nina.wav', correct:0, tptype:'third', length:'pair', trialnumber: 'twenty'},
		{word1: 'sounds/test/taru.wav', word2: 'sounds/test/fuko.wav', correct:1, tptype:'one', length:'pair', trialnumber: 'twentyone'},
		{word1: 'sounds/test/rigi.wav', word2: 'sounds/test/luru.wav', correct:0, tptype:'one', length:'pair', trialnumber: 'twentytwo'}
		];

// counterbalance code
var twoAFC_array = jsPsych.randomization.shuffle([twoAFC_array1, twoAFC_array2])[0]
//console.log(twoAFC_array);




//4 counterbalanced sets of timeline variables for the 4AFC trials
var fourAFC_array1 = [
	{word1: 'sounds/test/monalu.wav', word2: 'sounds/test/gitaru.wav', word3: 'sounds/test/narisi.wav', word4: 'sounds/test/filuna.wav', correct:0, tptype:'third', length: 'triplet', trialnumber: 'twentythree'},
	{word1: 'sounds/test/gitaru.wav', word2: 'sounds/test/surufu.wav', word3: 'sounds/test/monasi.wav', word4: 'sounds/test/namosi.wav', correct:3, tptype:'third', length: 'triplet', trialnumber: 'twentyfour'},
	{word1: 'sounds/test/naniri.wav', word2: 'sounds/test/narisi.wav', word3: 'sounds/test/silumo.wav', word4: 'sounds/test/sukomi.wav', correct:2, tptype:'third', length: 'triplet', trialnumber: 'twentyfive'},
	{word1: 'sounds/test/lumoti.wav', word2: 'sounds/test/lusina.wav', word3: 'sounds/test/tapuni.wav', word4: 'sounds/test/timosi.wav', correct:1, tptype:'third', length: 'triplet', trialnumber: 'twentysix'},
	{word1: 'sounds/test/tafuko.wav', word2: 'sounds/test/naniri.wav', word3: 'sounds/test/fifumi.wav', word4: 'sounds/test/sukomi.wav', correct:0, tptype:'one', length: 'triplet', trialnumber: 'twentyseven'},
	{word1: 'sounds/test/timosi.wav', word2: 'sounds/test/rigimi.wav', word3: 'sounds/test/silugi.wav', word4: 'sounds/test/monasi.wav', correct:1, tptype:'one', length: 'triplet', trialnumber: 'twentyeight'},
	{word1: 'sounds/test/filuna.wav', word2: 'sounds/test/komolu.wav', word3: 'sounds/test/rupuni.wav', word4: 'sounds/test/lumoti.wav', correct:2, tptype:'one', length: 'triplet', trialnumber: 'twentynine'},
	{word1: 'sounds/test/silugi.wav', word2: 'sounds/test/komolu.wav', word3: 'sounds/test/tapuni.wav', word4: 'sounds/test/fitisu.wav', correct:3, tptype:'one', length: 'triplet', trialnumber: 'thirty'},
	{word1: 'sounds/test/puni.wav', word2: 'sounds/test/puti.wav', word3: 'sounds/test/fufi.wav', word4: 'sounds/test/gisi.wav', correct:0, tptype:'one', length: 'pair', trialnumber: 'thirtyone'},
	{word1: 'sounds/test/rimi.wav', word2: 'sounds/test/fiti.wav', word3: 'sounds/test/mori.wav', word4: 'sounds/test/tiko.wav', correct:1, tptype:'one', length: 'pair', trialnumber: 'thirtytwo'},
	{word1: 'sounds/test/lufi.wav', word2: 'sounds/test/nita.wav', word3: 'sounds/test/mona.wav', word4: 'sounds/test/komo.wav', correct:2, tptype:'third', length: 'pair', trialnumber: 'thirtythree'},
	{word1: 'sounds/test/gina.wav', word2: 'sounds/test/supu.wav', word3: 'sounds/test/misi.wav', word4: 'sounds/test/silu.wav', correct:3, tptype:'third', length: 'pair', trialnumber: 'thirtyfour'}
];

var fourAFC_array2 = [
	{word1: 'sounds/test/filuna.wav', word2: 'sounds/test/monalu.wav', word3: 'sounds/test/gitaru.wav', word4: 'sounds/test/narisi.wav', correct:1, tptype: 'third', length: 'triplet', trialnumber: 'twentythree'},
	{word1: 'sounds/test/surufu.wav', word2: 'sounds/test/monasi.wav', word3: 'sounds/test/namosi.wav', word4: 'sounds/test/gitaru.wav', correct:2, tptype: 'third', length: 'triplet', trialnumber: 'twentyfour'},
	{word1: 'sounds/test/sukomi.wav', word2: 'sounds/test/naniri.wav', word3: 'sounds/test/narisi.wav', word4: 'sounds/test/silumo.wav', correct:3, tptype: 'third', length: 'triplet', trialnumber: 'twentyfive'},
	{word1: 'sounds/test/lusina.wav', word2: 'sounds/test/tapuni.wav', word3: 'sounds/test/timosi.wav', word4: 'sounds/test/lumoti.wav', correct:0, tptype: 'third', length: 'triplet', trialnumber: 'twentysix'},
	{word1: 'sounds/test/sukomi.wav', word2: 'sounds/test/tafuko.wav', word3: 'sounds/test/naniri.wav', word4: 'sounds/test/fifumi.wav', correct:1, tptype: 'one', length: 'triplet', trialnumber: 'twentyseven'},
	{word1: 'sounds/test/monasi.wav', word2: 'sounds/test/timosi.wav', word3: 'sounds/test/rigimi.wav', word4: 'sounds/test/silugi.wav', correct:2, tptype: 'one', length: 'triplet', trialnumber: 'twentyeight'},
	{word1: 'sounds/test/lumoti.wav', word2: 'sounds/test/filuna.wav', word3: 'sounds/test/komolu.wav', word4: 'sounds/test/rupuni.wav', correct:3, tptype: 'one', length: 'triplet', trialnumber: 'twentynine'},
	{word1: 'sounds/test/fitisu.wav', word2: 'sounds/test/silugi.wav', word3: 'sounds/test/komolu.wav', word4: 'sounds/test/tapuni.wav', correct:0, tptype: 'one', length: 'triplet', trialnumber: 'thirty'},
	{word1: 'sounds/test/gisi.wav', word2: 'sounds/test/puni.wav', word3: 'sounds/test/puti.wav', word4: 'sounds/test/fufi.wav', correct:1, tptype: 'one', length: 'pair', trialnumber: 'thirtyone'},
	{word1: 'sounds/test/tiko.wav', word2: 'sounds/test/rimi.wav', word3: 'sounds/test/fiti.wav', word4: 'sounds/test/mori.wav', correct:2, tptype: 'one', length: 'pair', trialnumber: 'thirtytwo'},
	{word1: 'sounds/test/komo.wav', word2: 'sounds/test/lufi.wav', word3: 'sounds/test/nita.wav', word4: 'sounds/test/mona.wav', correct:3, tptype: 'third', length: 'pair', trialnumber: 'thirtythree'},
	{word1: 'sounds/test/silu.wav', word2: 'sounds/test/gina.wav', word3: 'sounds/test/supu.wav', word4: 'sounds/test/misi.wav', correct:0, tptype: 'third', length: 'pair', trialnumber: 'thirtyfour'}
];

var fourAFC_array3 = [
	{word1: 'sounds/test/narisi.wav', word2: 'sounds/test/filuna.wav', word3: 'sounds/test/monalu.wav', word4: 'sounds/test/gitaru.wav', correct:2, tptype: 'third', length: 'triplet', trialnumber: 'twentythree'},
	{word1: 'sounds/test/gitaru.wav', word2: 'sounds/test/surufu.wav', word3: 'sounds/test/monasi.wav', word4: 'sounds/test/namosi.wav', correct:3, tptype: 'third', length: 'triplet', trialnumber: 'twentyfour'},
	{word1: 'sounds/test/silumo.wav', word2: 'sounds/test/sukomi.wav', word3: 'sounds/test/naniri.wav', word4: 'sounds/test/narisi.wav', correct:0, tptype: 'third', length: 'triplet', trialnumber: 'twentyfive'},
	{word1: 'sounds/test/lumoti.wav', word2: 'sounds/test/lusina.wav', word3: 'sounds/test/tapuni.wav', word4: 'sounds/test/timosi.wav', correct:1, tptype: 'third', length: 'triplet', trialnumber: 'twentysix'},
	{word1: 'sounds/test/fifumi.wav', word2: 'sounds/test/sukomi.wav', word3: 'sounds/test/tafuko.wav', word4: 'sounds/test/naniri.wav', correct:2, tptype: 'one', length: 'triplet', trialnumber: 'twentyseven'},
	{word1: 'sounds/test/silugi.wav', word2: 'sounds/test/monasi.wav', word3: 'sounds/test/timosi.wav', word4: 'sounds/test/rigimi.wav', correct:3, tptype: 'one', length: 'triplet', trialnumber: 'twentyeight'},
	{word1: 'sounds/test/rupuni.wav', word2: 'sounds/test/lumoti.wav', word3: 'sounds/test/filuna.wav', word4: 'sounds/test/komolu.wav', correct:0, tptype: 'one', length: 'triplet', trialnumber: 'twentynine'},
	{word1: 'sounds/test/tapuni.wav', word2: 'sounds/test/fitisu.wav', word3: 'sounds/test/silugi.wav', word4: 'sounds/test/komolu.wav', correct:1, tptype: 'one', length: 'triplet', trialnumber: 'thirty'},
	{word1: 'sounds/test/fufi.wav', word2: 'sounds/test/gisi.wav', word3: 'sounds/test/puni.wav', word4: 'sounds/test/puti.wav', correct:2, tptype: 'one', length: 'pair', trialnumber: 'thirtyone'},
	{word1: 'sounds/test/mori.wav', word2: 'sounds/test/tiko.wav', word3: 'sounds/test/rimi.wav', word4: 'sounds/test/fiti.wav', correct:3, tptype: 'one', length: 'pair', trialnumber: 'thirtytwo'},
	{word1: 'sounds/test/mona.wav', word2: 'sounds/test/komo.wav', word3: 'sounds/test/lufi.wav', word4: 'sounds/test/nita.wav', correct:0, tptype: 'third', length: 'pair', trialnumber: 'thirtythree'},
	{word1: 'sounds/test/misi.wav', word2: 'sounds/test/silu.wav', word3: 'sounds/test/gina.wav', word4: 'sounds/test/supu.wav', correct:1, tptype: 'third', length: 'pair', trialnumber: 'thirtyfour'}
];

var fourAFC_array4 = [
	{word1: 'sounds/test/gitaru.wav', word2: 'sounds/test/narisi.wav', word3: 'sounds/test/filuna.wav', word4: 'sounds/test/monalu.wav', correct:3, tptype: 'third', length: 'triplet', trialnumber: 'twentythree'},
	{word1: 'sounds/test/namosi.wav', word2: 'sounds/test/gitaru.wav', word3: 'sounds/test/surufu.wav', word4: 'sounds/test/monasi.wav', correct:0, tptype: 'third', length: 'triplet', trialnumber: 'twentyfour'},
	{word1: 'sounds/test/narisi.wav', word2: 'sounds/test/silumo.wav', word3: 'sounds/test/sukomi.wav', word4: 'sounds/test/naniri.wav', correct:1, tptype: 'third', length: 'triplet', trialnumber: 'twentyfive'},
	{word1: 'sounds/test/timosi.wav', word2: 'sounds/test/lumoti.wav', word3: 'sounds/test/lusina.wav', word4: 'sounds/test/tapuni.wav', correct:2, tptype: 'third', length: 'triplet', trialnumber: 'twentysix'},
	{word1: 'sounds/test/naniri.wav', word2: 'sounds/test/fifumi.wav', word3: 'sounds/test/sukomi.wav', word4: 'sounds/test/tafuko.wav', correct:3, tptype: 'one', length: 'triplet', trialnumber: 'twentyseven'},
	{word1: 'sounds/test/rigimi.wav', word2: 'sounds/test/silugi.wav', word3: 'sounds/test/monasi.wav', word4: 'sounds/test/timosi.wav', correct:0, tptype: 'one', length: 'triplet', trialnumber: 'twentyeight'},
	{word1: 'sounds/test/komolu.wav', word2: 'sounds/test/rupuni.wav', word3: 'sounds/test/lumoti.wav', word4: 'sounds/test/filuna.wav', correct:1, tptype: 'one', length: 'triplet', trialnumber: 'twentynine'},
	{word1: 'sounds/test/komolu.wav', word2: 'sounds/test/tapuni.wav', word3: 'sounds/test/fitisu.wav', word4: 'sounds/test/silugi.wav', correct:2, tptype: 'one', length: 'triplet', trialnumber: 'thirty'},
	{word1: 'sounds/test/puti.wav', word2: 'sounds/test/fufi.wav', word3: 'sounds/test/gisi.wav', word4: 'sounds/test/puni.wav', correct:3, tptype: 'one', length: 'pair', trialnumber: 'thirtyone'},
	{word1: 'sounds/test/fiti.wav', word2: 'sounds/test/mori.wav', word3: 'sounds/test/tiko.wav', word4: 'sounds/test/rimi.wav', correct:0, tptype: 'one', length: 'pair', trialnumber: 'thirtytwo'},
	{word1: 'sounds/test/nita.wav', word2: 'sounds/test/mona.wav', word3: 'sounds/test/komo.wav', word4: 'sounds/test/lufi.wav', correct:1, tptype: 'third', length: 'pair', trialnumber: 'thirtythree'},
	{word1: 'sounds/test/supu.wav', word2: 'sounds/test/misi.wav', word3: 'sounds/test/silu.wav', word4: 'sounds/test/gina.wav', correct:2, tptype: 'third', length: 'pair', trialnumber: 'thirtyfour'}
];


//counterbalance code
var fourAFC_array = jsPsych.randomization.shuffle([fourAFC_array1, fourAFC_array2, fourAFC_array3, fourAFC_array4])[0]
//console.log(fourAFC_array);

//randomize the arrays
twoAFC_array = jsPsych.randomization.repeat(twoAFC_array, 1);
fourAFC_array = jsPsych.randomization.repeat(fourAFC_array, 1);




//////////////////////////
/////Task Instructions////
/////////////////////////
var AFC_instruct = {
	type: 'html-button-response',
	stimulus: '<p>Welcome to the third part of the study.</p>' +
			  '<p>In each trial, you will listen to either 2 or 4 short sounds. Each sound will be labeled with a number (for example, 1) on the screen. You will then be asked to choose which one is the most familiar based off of the stream of sounds that <b>you heard in the previous part of the study</b>.</p>'+
				'<p>You will choose which sound is the most familiar by pressing the button with the number that corresponds to that sound.</p>'+
				'<p>There are 34 trials in total.</p>',
	choices: ['Begin']
};


//simple fixation
var Fixation = {
	type: 'html-keyboard-response',
	stimulus: '',
	prompt: '<p style=font-size:50px;">+</p>',
	trial_duration: 1000
};





//////////////////////////
//Trials for 2-item AFC//
/////////////////////////

var TWOafc_playone = {
	type: 'audio-keyboard-response',
	stimulus: function(){return twoAFC_array[twoafc_count].word1;},
	data: {word: function(){return twoAFC_array[twoafc_count].word1;}, CORRECTANS: function(){return twoAFC_array[twoafc_count].correct;}},
	trial_ends_after_audio: true,
	response_ends_trial: false,
	prompt: '<p>1</p>',
	post_trial_gap: 850
};

var TWOafc_playtwo = {
	type: 'audio-keyboard-response',
	stimulus: function(){return twoAFC_array[twoafc_count].word2;},
	data: {word: function(){return twoAFC_array[twoafc_count].word2;}, CORRECTANS: function(){return twoAFC_array[twoafc_count].correct;}},
	trial_ends_after_audio: true,
	response_ends_trial: false,
	prompt: '<p>2</p>',
	post_trial_gap: 850
};

//2AFC judgement screen
var TWOafc_choice = {
	type: 'html-button-response',
	stimulus:'<p> Which sound was the most familiar? (Press the corresponding number)</p>',
	choices: ['1','2'],
	data: {
		designation: 'AFC_RESPONSE',
		word: function(){return twoAFC_array[twoafc_count].word1;},
		word2: function(){return twoAFC_array[twoafc_count].word2;},
		transitionalpr: function(){return twoAFC_array[twoafc_count].tptype;},
		length: function(){return twoAFC_array[twoafc_count].length;},
		trial: function(){return twoAFC_array[twoafc_count].trialnumber;},
		correctanswer: function(){return twoAFC_array[twoafc_count].correct;}
	},
	on_finish: function(data) {
		var button_pressed = data.button_pressed; ////////
		if (button_pressed == data.correctanswer) {
			data.correct = 1;
		} else {
			data.correct = 0;
		}
		twoafc_count += 1;
	},
	post_trial_gap: 1000,
	response_ends_trial: true
};




//////////////////////////
//Trials for 4-item AFC//
/////////////////////////

var FOURafc_playone = {
	type: 'audio-keyboard-response',
	stimulus: function(){return fourAFC_array[fourafc_count].word1;},
	data: {word: function(){return fourAFC_array[fourafc_count].word1;}, CORRECTANS: function(){return fourAFC_array[fourafc_count].correct;}},
	trial_ends_after_audio: true,
	response_ends_trial: false,
	prompt: '<p>1</p>',
	post_trial_gap: 850
};

var FOURafc_playtwo = {
	type: 'audio-keyboard-response',
	stimulus: function(){return fourAFC_array[fourafc_count].word2;},
	data: {word: function(){return fourAFC_array[fourafc_count].word2;}, CORRECTANS: function(){return fourAFC_array[fourafc_count].correct;}},
	trial_ends_after_audio: true,
	response_ends_trial: false,
	prompt: '<p>2</p>',
	post_trial_gap: 850
};

var FOURafc_playthree = {
	type: 'audio-keyboard-response',
	stimulus: function(){return fourAFC_array[fourafc_count].word3;},
	data: {word: function(){return fourAFC_array[fourafc_count].word3;}, CORRECTANS: function(){return fourAFC_array[fourafc_count].correct;}},
	trial_ends_after_audio: true,
	response_ends_trial: false,
	prompt: '<p>3</p>',
	post_trial_gap: 850
};

var FOURafc_playfour = {
	type: 'audio-keyboard-response',
	stimulus: function(){return fourAFC_array[fourafc_count].word4;},
	data: {word: function(){return fourAFC_array[fourafc_count].word4;}, CORRECTANS: function(){return fourAFC_array[fourafc_count].correct;}},
	trial_ends_after_audio: true,
	response_ends_trial: false,
	prompt: '<p>4</p>',
	post_trial_gap: 850
};


//4AFC judgement screen
var FOURAFC_choice = {
	type: 'html-button-response',
	stimulus:'<p> Which sound was the most familiar? (Press the corresponding number)</p>',
	choices: ['1','2','3','4'],
	data: {
		designation: 'AFC_RESPONSE',
		word1: function(){return fourAFC_array[fourafc_count].word1;},
		word2: function(){return fourAFC_array[fourafc_count].word2;},
		word3: function(){return fourAFC_array[fourafc_count].word3;},
		word4: function(){return fourAFC_array[fourafc_count].word4;},
		length: function(){return fourAFC_array[fourafc_count].length;},
		trial: function(){return fourAFC_array[fourafc_count].trialnumber;},
		length: function(){return fourAFC_array[fourafc_count].length;},
		correctanswer: function(){return fourAFC_array[fourafc_count].correct;}
	},
	on_finish: function(data) {
		var button_pressed = data.button_pressed;
		if (button_pressed == data.correctanswer) {
			data.correct = 1;
		} else {
			data.correct = 0;
		}
		fourafc_count += 1;
	},
	post_trial_gap: 1000,
	response_ends_trial: true
};

var TWOAFC_proc = {
	timeline: [Fixation, TWOafc_playone, TWOafc_playtwo, TWOafc_choice]
};

var FOURAFC_proc = {
	timeline: [Fixation, FOURafc_playone, FOURafc_playtwo, FOURafc_playthree, FOURafc_playfour, FOURAFC_choice]
};

//Combine the 2AFC and 4AFC trials
var afc_total_trials = [TWOAFC_proc, TWOAFC_proc, TWOAFC_proc, TWOAFC_proc, TWOAFC_proc, TWOAFC_proc, TWOAFC_proc,
 TWOAFC_proc, TWOAFC_proc, TWOAFC_proc, TWOAFC_proc, TWOAFC_proc, TWOAFC_proc, TWOAFC_proc,
 TWOAFC_proc,TWOAFC_proc, TWOAFC_proc, TWOAFC_proc, TWOAFC_proc, TWOAFC_proc, TWOAFC_proc, TWOAFC_proc,
 FOURAFC_proc,FOURAFC_proc, FOURAFC_proc, FOURAFC_proc, FOURAFC_proc, FOURAFC_proc, FOURAFC_proc, FOURAFC_proc,
 FOURAFC_proc, FOURAFC_proc, FOURAFC_proc, FOURAFC_proc]

 var Afc_trials = jsPsych.randomization.repeat(afc_total_trials, 1)
//console.log(Afc_trials)

var afc_trials = {
 timeline: Afc_trials
};

var RANDOMIZE_twofour_trials = {
	timeline: [AFC_instruct, afc_trials]
};



//Preloading Medis
var AFC_AUD = [
	'sounds/test/fifumi.wav', 'sounds/test/filuna.wav', 'sounds/test/fitisu.wav',
	'sounds/test/fufi.wav', 'sounds/test/fuko.wav', 'sounds/test/fulu.wav',
	'sounds/test/gina.wav', 'sounds/test/gisi.wav', 'sounds/test/gitaru.wav',
	'sounds/test/komo.wav', 'sounds/test/komolu.wav', 'sounds/test/lufi.wav',
	'sounds/test/luru.wav', 'sounds/test/lumoti.wav', 'sounds/test/lumo.wav',
	'sounds/test/lusina.wav', 'sounds/test/misi.wav', 'sounds/test/monalu.wav',
	'sounds/test/monasi.wav', 'sounds/test/mori.wav', 'sounds/test/mosi.wav',
	'sounds/test/mosu.wav', 'sounds/test/nalu.wav', 'sounds/test/namosi.wav',
	'sounds/test/naniri.wav', 'sounds/test/nasi.wav', 'sounds/test/nina.wav',
	'sounds/test/nita.wav', 'sounds/test/puni.wav', 'sounds/test/puti.wav',
	'sounds/test/rigi.wav', 'sounds/test/rigimi.wav', 'sounds/test/rimi.wav',
	'sounds/test/rupuni.wav', 'sounds/test/silugi.wav', 'sounds/test/silumo.wav',
	'sounds/test/sina.wav', 'sounds/test/sukomi.wav', 'sounds/test/supu.wav',
	'sounds/test/surufu.wav', 'sounds/test/tafuko.wav', 'sounds/test/tapuni.wav',
	'sounds/test/taru.wav', 'sounds/test/tiko.wav', 'sounds/test/timosi.wav',
	'sounds/test/fiti.wav', 'sounds/test/mona.wav', 'sounds/test/narisi.wav',
	'sounds/test/silu.wav'
];


function return_AFC_sounds(){
	return AFC_AUD;
};
