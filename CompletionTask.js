/*********************************/
/***** Completion Task *****/
/*********************************/
/*

The Completion task presents participants with either
2 or 3-syllable sequences, with one of the syllables in
each sequence replaced with white noise. On each trial,
participants are played the sound sequence missing a syllable,
and are then played three syllables. Participants must
select the syllable that they think best completes the sequence.

Outputs the final procedure variable (COMPLETION_FINAL) as
well as a folder for audio preloading (return_completion_sounds();) and
for image preloading (return_completion_images();).

Simply push COMPLETION_FINAL to your timeline in your html file,
and assign a variable to the preloading audio folder and preloading image folder -
e.g., var completion_sounds = return_completion_sounds();

*/

//three counterbalanced set of timeline variables a participant may be assigned
	var COMPLETION_VAR1 = [
	{pattern: 'sounds/test/moqmlu.wav', option1: 'sounds/syllables/na_SWS.wav', option2: 'sounds/syllables/ni_SWS.wav', option3: 'sounds/syllables/ge_SWS.wav',correct:0, image: 'images/sqms.png', tp_type:'third', length: 'triplet', trialnumber: 'thirtyfive'},
	{pattern: 'sounds/test/namoqm.wav', option1: 'sounds/syllables/su_SWS.wav', option2: 'sounds/syllables/si_SWS.wav', option3: 'sounds/syllables/fu_SWS.wav',correct:1, image: 'images/ssqm.png', tp_type:'third', length: 'triplet', trialnumber: 'thirtysix'},
	{pattern: 'sounds/test/qmfuko.wav', option1: 'sounds/syllables/fe_SWS.wav', option2: 'sounds/syllables/lu_SWS.wav', option3: 'sounds/syllables/ta_SWS.wav',correct:2, image: 'images/qmss.png', tp_type:'one', length: 'triplet', trialnumber: 'thirtyseven'},
	{pattern: 'sounds/test/riqmmi.wav', option1: 'sounds/syllables/ge_SWS.wav', option2: 'sounds/syllables/ti_SWS.wav', option3: 'sounds/syllables/si_SWS.wav',correct:0, image: 'images/sqms.png', tp_type:'one', length: 'triplet', trialnumber: 'thirtyeight'},
	{pattern: 'sounds/test/ruqm.wav', option1: 'sounds/syllables/mo_SWS.wav', option2: 'sounds/syllables/pu_SWS.wav', option3: 'sounds/syllables/ko_SWS.wav',correct:1, image: 'images/sqm.png', tp_type:'one', length: 'pair', trialnumber: 'thirtynine'},
	{pattern: 'sounds/test/qmti.wav', option1: 'sounds/syllables/re_SWS.wav', option2: 'sounds/syllables/pu_SWS.wav', option3: 'sounds/syllables/fe_SWS.wav',correct:2, image: 'images/qms.png', tp_type:'one', length: 'pair', trialnumber: 'forty'},
	{pattern: 'sounds/test/luqm.wav', option1: 'sounds/syllables/mo_SWS.wav', option2: 'sounds/syllables/ta_SWS.wav', option3: 'sounds/syllables/na_SWS.wav',correct:0, image: 'images/sqm.png', tp_type:'third', length: 'pair', trialnumber: 'fortyone'},
	{pattern: 'sounds/test/qmsi.wav', option1: 'sounds/syllables/ru_SWS.wav', option2: 'sounds/syllables/lu_SWS.wav', option3: 'sounds/syllables/me_SWS.wav',correct:1, image: 'images/qms.png', tp_type:'third', length: 'pair', trialnumber: 'fortytwo'}
];

	var COMPLETION_VAR2 = [
	{pattern: 'sounds/test/moqmlu.wav', option1: 'sounds/syllables/ge_SWS.wav', option2: 'sounds/syllables/na_SWS.wav', option3: 'sounds/syllables/ni_SWS.wav',correct:1, image: 'images/sqms.png', tp_type:'third', length: 'triplet', trialnumber: 'thirtyfive'},
	{pattern: 'sounds/test/namoqm.wav', option1: 'sounds/syllables/fu_SWS.wav', option2: 'sounds/syllables/su_SWS.wav', option3: 'sounds/syllables/si_SWS.wav',correct:2, image: 'images/ssqm.png', tp_type:'third', length: 'triplet', trialnumber: 'thirtysix'},
	{pattern: 'sounds/test/qmfuko.wav', option1: 'sounds/syllables/ta_SWS.wav', option2: 'sounds/syllables/fe_SWS.wav', option3: 'sounds/syllables/lu_SWS.wav',correct:0, image: 'images/qmss.png', tp_type:'one', length: 'triplet', trialnumber: 'thirtyseven'},
	{pattern: 'sounds/test/riqmmi.wav', option1: 'sounds/syllables/si_SWS.wav', option2: 'sounds/syllables/ge_SWS.wav', option3: 'sounds/syllables/ti_SWS.wav',correct:1, image: 'images/sqms.png', tp_type:'one', length: 'triplet', trialnumber: 'thirtyeight'},
	{pattern: 'sounds/test/ruqm.wav', option1: 'sounds/syllables/ko_SWS.wav', option2: 'sounds/syllables/mo_SWS.wav', option3: 'sounds/syllables/pu_SWS.wav',correct:2, image: 'images/sqm.png', tp_type:'one', length: 'pair', trialnumber: 'thirtynine'},
	{pattern: 'sounds/test/qmti.wav', option1: 'sounds/syllables/fe_SWS.wav', option2: 'sounds/syllables/re_SWS.wav', option3: 'sounds/syllables/pu_SWS.wav',correct:0, image: 'images/qms.png', tp_type:'one', length: 'pair', trialnumber: 'forty'},
	{pattern: 'sounds/test/luqm.wav', option1: 'sounds/syllables/na_SWS.wav', option2: 'sounds/syllables/mo_SWS.wav', option3: 'sounds/syllables/ta_SWS.wav',correct:1, image: 'images/sqm.png', tp_type:'third', length: 'pair', trialnumber: 'fortyone'},
	{pattern: 'sounds/test/qmsi.wav', option1: 'sounds/syllables/me_SWS.wav', option2: 'sounds/syllables/ru_SWS.wav', option3: 'sounds/syllables/lu_SWS.wav',correct:2, image: 'images/qms.png', tp_type:'third', length: 'pair', trialnumber: 'fortytwo'}
];

	var COMPLETION_VAR3 = [
	{pattern: 'sounds/test/moqmlu.wav', option1: 'sounds/syllables/ni_SWS.wav', option2: 'sounds/syllables/ge_SWS.wav', option3: 'sounds/syllables/na_SWS.wav',correct:2, image: 'images/sqms.png', tp_type:'third', length: 'triplet', trialnumber: 'thirtyfive'},
	{pattern: 'sounds/test/namoqm.wav', option1: 'sounds/syllables/si_SWS.wav', option2: 'sounds/syllables/fu_SWS.wav', option3: 'sounds/syllables/su_SWS.wav',correct:0, image: 'images/ssqm.png', tp_type:'third', length: 'triplet', trialnumber: 'thirtysix'},
	{pattern: 'sounds/test/qmfuko.wav', option1: 'sounds/syllables/lu_SWS.wav', option2: 'sounds/syllables/ta_SWS.wav', option3: 'sounds/syllables/fe_SWS.wav',correct:1, image: 'images/qmss.png', tp_type:'one', length: 'triplet', trialnumber: 'thirtyseven'},
	{pattern: 'sounds/test/riqmmi.wav', option1: 'sounds/syllables/ti_SWS.wav', option2: 'sounds/syllables/si_SWS.wav', option3: 'sounds/syllables/ge_SWS.wav',correct:2, image: 'images/sqms.png', tp_type:'one', length: 'triplet', trialnumber: 'thirtyeight'},
	{pattern: 'sounds/test/ruqm.wav', option1: 'sounds/syllables/pu_SWS.wav', option2: 'sounds/syllables/ko_SWS.wav', option3: 'sounds/syllables/mo_SWS.wav',correct:0, image: 'images/sqm.png', tp_type:'one', length: 'pair', trialnumber: 'thirtynine'},
	{pattern: 'sounds/test/qmti.wav', option1: 'sounds/syllables/pu_SWS.wav', option2: 'sounds/syllables/fe_SWS.wav', option3: 'sounds/syllables/re_SWS.wav',correct:1, image: 'images/qms.png', tp_type:'one', length: 'pair', trialnumber: 'forty'},
	{pattern: 'sounds/test/luqm.wav', option1: 'sounds/syllables/ta_SWS.wav', option2: 'sounds/syllables/na_SWS.wav', option3: 'sounds/syllables/mo_SWS.wav',correct:2, image: 'images/sqm.png', tp_type:'third', length: 'pair', trialnumber: 'fortyone'},
	{pattern: 'sounds/test/qmsi.wav', option1: 'sounds/syllables/lu_SWS.wav', option2: 'sounds/syllables/me_SWS.wav', option3: 'sounds/syllables/ru_SWS.wav',correct:0, image: 'images/qms.png', tp_type:'third', length: 'pair', trialnumber: 'fortytwo'}
];

//counterbalance code
var COMPLETION_VAR = jsPsych.randomization.shuffle([COMPLETION_VAR1, COMPLETION_VAR2, COMPLETION_VAR3])[0]


//instructions
var COMPLETION_Intro = {
	type: 'html-button-response',
	stimulus: '<p>You will now listen to sound sequences made up of 2-3 sounds.</p>'+
			  '<p>Each sequence will be missing one sound. A beep will play in the place of this missing sound.</p>'+
			  '<p>On each trial, you will listen to one of these sound sequences. You will then listen to 3 <u>TARGET SOUNDS</u>. Each <u>TARGET SOUND</u> will be labeled with a number (for example, 1) on the screen as they play. Your task is to pick which <u>TARGET SOUND</u> best completes the sound sequence.</p>'+
			  '<p>To pick the <u>TARGET SOUND</u>, you will press the <b>button with the number that corresponds to that <u>TARGET SOUND</u>.</b></p>'+
				'<p>There will be a total of 8 trials.</p>'+
				'<p>When you are ready to begin, press CONTINUE.</p>',
	choices: ['Continue'],
	post_trial_gap: 250
};


//simple fixation
var Fixation = {
	type: 'html-keyboard-response',
	stimulus: '',
	prompt: '<p style=font-size:50px;">+</p>',
	trial_duration: 1000
};


/////////////////////////
// COMPLETION TRIALS ///
////////////////////////

//present the pattern missing a syllable
var PATTERN_present = {
	type: 'audio-keyboard-response',
	stimulus: jsPsych.timelineVariable('pattern'),
	prompt: function() { return '<img src = "' + jsPsych.timelineVariable('image', true) + '" ><p>Pattern</p>'},
	choices: jsPsych.NO_KEYS,
	data: {WORD: jsPsych.timelineVariable('pattern'), CORRECTANS: jsPsych.timelineVariable('correct')},
	trial_duration: 2500,
	response_ends_trial: false
};

//present three potential syllables
var Option1_present = {
	type: 'audio-keyboard-response',
	stimulus: jsPsych.timelineVariable('option1'),
	prompt: function() { return '<img src = "' + jsPsych.timelineVariable('image', true) + '" ><p>1</p>'},
	data: {syllable: jsPsych.timelineVariable('option1')},
	trial_duration: 1500,
	response_ends_trial: false
};

var Option2_present = {
	type: 'audio-keyboard-response',
	stimulus: jsPsych.timelineVariable('option2'),
	data: {syllable: jsPsych.timelineVariable('option2')},
	trial_duration: 1500,
	response_ends_trial: false,
	prompt: function() { return '<img src = "' + jsPsych.timelineVariable('image', true) + '" ><p>2</p>'}
};

var Option3_present = {
	type: 'audio-keyboard-response',
	stimulus: jsPsych.timelineVariable('option3'),
	data: {syllable: jsPsych.timelineVariable('option3')},
	trial_duration: 1500,
  response_ends_trial: false,
	prompt: function() { return '<img src = "' + jsPsych.timelineVariable('image', true) + '" ><p>3</p>'}
//	post_trial_gap: 500
};


//ask for participants to judge which syllable completes the pattern
var COMPLETION_choice = {
	type: 'html-button-response',
	stimulus: function() { return '<img src = "' + jsPsych.timelineVariable('image', true) + '" ><p> Which sound best completes the pattern? (Press the corresponding number)</p>'},
	choices: ['1','2','3'],
	data: {
		designation: 'COMPLETION_RESPONSE',
		word: jsPsych.timelineVariable('pattern'),
		option1: jsPsych.timelineVariable('option1'),
		option2: jsPsych.timelineVariable('option2'),
		option3: jsPsych.timelineVariable('option3'),
		correctanswer: jsPsych.timelineVariable('correct'),
		transitionalpr: jsPsych.timelineVariable('tp_type'),
		trial: jsPsych.timelineVariable('trialnumber'),
		length: jsPsych.timelineVariable('length')
	},
	on_finish: function(data) {
		var button_pressed = data.button_pressed;
		if (button_pressed == data.correctanswer) {
			data.correct = 1;
		} else {
			data.correct = 0;
		}
	},
	post_trial_gap: 1000,
	response_ends_trial: true
};

var Completion_interim = {
	type:'html-button-response',
	stimulus: '<p>Press the button below when you are ready to continue.</p>',
	choices: ['Continue'],
	post_trial_gap: 500
};

//Push everything to the timeline
var COMPLETION_TRIALS_FINAL = {
	timeline: [Fixation, PATTERN_present, Option1_present, Option2_present, Option3_present, COMPLETION_choice, Completion_interim],
	timeline_variables: COMPLETION_VAR,
	randomize_order: true
}


//Final completed array
var COMPLETION_FINAL = {
	timeline: [COMPLETION_Intro, COMPLETION_TRIALS_FINAL]
};

//preloading audio
var COMPLETION_AUD = [
	'sounds/test/moqmlu.wav', 'sounds/test/namoqm.wav', 'sounds/test/qmfuko.wav',
	'sounds/test/riqmmi.wav', 'sounds/test/ruqm.wav', 'sounds/test/qmti.wav',
	'sounds/test/luqm.wav', 'sounds/test/qmsi.wav'
];

//preloading images
var COMPLETION_IMG = [
	'images/qms.png','images/qmss.png','images/sqm.png','images/sqms.png','images/ssqm.png'
];

//Function for Returning Audio Array for Preloading
function return_completion_sounds(){
	return COMPLETION_AUD;
};

//Function for returning images for preloading
function return_completion_images(){
	return COMPLETION_IMG;
};
