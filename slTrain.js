/**********************/
/** SL TRAINING TASK **/
/**********************/
/*

This is where participants are
trained on the statistical
language.

There are two three-minute training blocks.
During each training block, the stream will
stop two times. Participants must click
any button within a speciifed timeout window
to have the sequence re-commence. If no
button press is logged, the sequence moves
on automatically and it is marked as a timeout.

Stephen Van Hedger, June 2022
*/


//AUDIO FILES//


//Approach....list just the individual syllables...then an array with the words, listing syllable positions...then based on the words...expand, shuffle (no repeat), push individual syllables
var audimg_pairs = [
	{sound: `sounds/syllables/fe_SWS.wav`, img: 'images/fi_C.png'},
	{sound: `sounds/syllables/fu_SWS.wav`, img: 'images/fu_C.png'},
	{sound: `sounds/syllables/ge_SWS.wav`, img: 'images/gi_C.png'},
	{sound: `sounds/syllables/ko_SWS.wav`, img: 'images/ko_C.png'},
	{sound: `sounds/syllables/lu_SWS.wav`, img: 'images/lu_C.png'},
	{sound: `sounds/syllables/me_SWS.wav`, img: 'images/me_C.png'},
	{sound: `sounds/syllables/mo_SWS.wav`, img: 'images/mo_C.png'},
	{sound: `sounds/syllables/na_SWS.wav`, img: 'images/na_C.png'},
	{sound: `sounds/syllables/ni_SWS.wav`, img: 'images/ni_C.png'},
	{sound: `sounds/syllables/pu_SWS.wav`, img: 'images/pu_C.png'},
	{sound: `sounds/syllables/re_SWS.wav`, img: 'images/re_C.png'},
	{sound: `sounds/syllables/ru_SWS.wav`, img: 'images/ru_C.png'},
	{sound: `sounds/syllables/si_SWS.wav`, img: 'images/si_C.png'},
	{sound: `sounds/syllables/su_SWS.wav`, img: 'images/su_C.png'},
	{sound: `sounds/syllables/ta_SWS.wav`, img: 'images/ta_C.png'},
	{sound: `sounds/syllables/ti_SWS.wav`, img: 'images/ti_C.png'}
];

var SLSTREAM = []; //for preloading
for(var i=0; i<audimg_pairs.length; i++){
	SLSTREAM.push(audimg_pairs[i].sound);
};

var syll_idx = 0; //will be updated

//there are eight words, so let's make an array with 1-8 and repeat/shuffle 48x
var wordOrder = jsPsych.randomization.repeat([1,2,3,4,5,6,7,8], 48);

//function to ensure that there are no consecutive repeats of words
function noRepeats(array){
	var tempValue;
	for(var i=0; i<array.length; i++){
		if(array[i] == array[i+1]){
			tempValue = array.splice(i, 1);
			if(Math.round(Math.random()) == 0){
				array.unshift(tempValue[0])
			} else {
				array.push(tempValue[0])
			}
			i=-1; //restart the process? i.e., go back to beginning of array
	}
}
	return array;
};

var shuffledArray = noRepeats(wordOrder);

var finalTrainTimeline = [];

for(var i=0; i<shuffledArray.length; i++){
	if(shuffledArray[i] == 1){
		//this is word FE_TI_SU
		finalTrainTimeline.push(audimg_pairs[0]);
		finalTrainTimeline.push(audimg_pairs[15]);
		finalTrainTimeline.push(audimg_pairs[13]);
	} else if (shuffledArray[i] == 2){
		//this is word LU_SI_NA
		finalTrainTimeline.push(audimg_pairs[4]);
		finalTrainTimeline.push(audimg_pairs[12]);
		finalTrainTimeline.push(audimg_pairs[7]);
	} else if(shuffledArray[i] == 3){
		//this is word MO_NA_LU
		finalTrainTimeline.push(audimg_pairs[6]);
		finalTrainTimeline.push(audimg_pairs[7]);
		finalTrainTimeline.push(audimg_pairs[4]);
	} else if(shuffledArray[i] == 4){
		//this is word NA_MO_SI
		finalTrainTimeline.push(audimg_pairs[7]);
		finalTrainTimeline.push(audimg_pairs[6]);
		finalTrainTimeline.push(audimg_pairs[12]);
	} else if(shuffledArray[i] == 5){
		//this is word RI_GI_MI
		finalTrainTimeline.push(audimg_pairs[10]);
		finalTrainTimeline.push(audimg_pairs[2]);
		finalTrainTimeline.push(audimg_pairs[5]);
	} else if(shuffledArray[i] == 6){
		//this is word RU_PU_NI
		finalTrainTimeline.push(audimg_pairs[11]);
		finalTrainTimeline.push(audimg_pairs[9]);
		finalTrainTimeline.push(audimg_pairs[8]);
	} else if(shuffledArray[i] == 7){
		//this is word SI_LU_MO
		finalTrainTimeline.push(audimg_pairs[12]);
		finalTrainTimeline.push(audimg_pairs[4]);
		finalTrainTimeline.push(audimg_pairs[6]);
	} else {
		//this is word TA_FU_KO
		finalTrainTimeline.push(audimg_pairs[14]);
		finalTrainTimeline.push(audimg_pairs[1]);
		finalTrainTimeline.push(audimg_pairs[3]);
	}
};

console.log(finalTrainTimeline);


////////////
// TRIALS //
////////////

//General Instructions
var sl_instruct = {
	type: 'html-keyboard-response',
	stimulus: '<p>In this part of the study, you will hear a stream of sounds.</p>'+
			  '<p>Please focus on these sounds, as you may be asked questions about them later.</p>'+
			  '<p>Occasionally, the sounds will pause for up to four seconds. When this happens, please press SPACEBAR as quickly as you can.</br>This helps ensure that you are paying attention to the sounds.</p>'+
			  '<p>This part of the study will take about 6 minutes to complete, and you will be given the opportunity to take a short break.</p>'+
			  '<p><strong>Press SPACEBAR to begin</strong></p>',
	choices: [' ']
};


//1. Fixation
var fixation = {
	type: 'html-keyboard-response',
	stimulus: '<p style="font-size: 40px;">+</p>',
	choices: jsPsych.NO_KEYS,
	trial_duration: 1000
};


//2. Reading Screen
var sl_screen = {
	type: 'audio-keyboard-response',
	stimulus: jsPsych.timelineVariable('sound'),
	prompt: function(){var curimg = finalTrainTimeline[syll_idx].img; console.log(curimg); return "<img src="+curimg+"></>";},
	trial_ends_after_audio: true,
	choices: jsPsych.NO_KEYS,
	on_finish: function(){syll_idx += 1;}
};


var takebreak = {
	timeline: [{
		type: 'html-button-response',
		stimulus: '<p>You may take a short break if you wish.</p>',
		choices: ['Continue']
	}],
	conditional_function: function(){
		if(syll_idx == (finalTrainTimeline.length)/2){
			return true;
		} else {
			return false;
		}
	}
}

var timeoutOptions = [200, 400, 900, 1000];
var tidx = 0;

var pauses = {
	timeline: [{
		type: 'html-keyboard-response',
		stimulus: '',
		choices: [' '],
		trial_duration: 4000,
		on_finish: function(data){
			if(data.response !== null){
				var timeout = 0;
				console.log("no timeout!")
			} else {
				var timeout = 1;
				console.log("timeout!")
			}
			jsPsych.data.addDataToLastTrial({
				designation: 'timeout-trial',
				timeout: timeout
		})
	}
}],
	conditional_function: function(){
		if(timeoutOptions[tidx] == syll_idx){
			tidx +=1; //update index
			return true;
		} else {
			return false;
		}
	}
};

//Define Training Procedure Timeline
var sl_train_proc = {
	timeline: [takebreak, sl_screen, pauses],
	timeline_variables: finalTrainTimeline,
	randomize_order: false //do not randomize!
};

///////////////////////
//FINAL TIMELINE VARS//
///////////////////////

var slTrain = {
	timeline: [sl_instruct, fixation, sl_train_proc]
};



//function for returning the audio folder for preloading
function return_slTrain_folder(){
		return SLSTREAM;
};
