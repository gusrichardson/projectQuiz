
const dance = {
	old: [
		{
			title: "ballerina",
			pace: "slow",
			gif: "images/ballet.gif",
			read: "Jim Carrey in a tutu imitating a ballerina"
		},
		{
			title: "ballroom dancer",
			pace: "slow",
			gif: "images/ballroom.gif",
			read: "a black and white gif of a man and woman ballroom dancing"
		},
		{
			title: "jitterbug dancer",
			pace: "fast",
			gif: "images/jitterbug.gif",
			read: "a man and woman doing the jitterbug in a crowded gymnasium"
		},
		{
			title: "tap dancer",
			pace: "fast",
			gif: "images/tapdance.gif",
			read: "two men tapdancing on a table"
		},
	],
	new: [
		{
			title: "line-dancer",
			pace: "slow",
			gif: "images/linedance.gif",
			read: "a man and two young girls linedancing in cowboy hats and boots"
		},
		{
			title: "conga-liner",
			pace: "slow",
			gif: "images/congaline.gif",
			read: "elderly people performing a congaline in a living room"
		},
		{
			title: "breakdancer",
			pace: "fast",
			gif: "images/breakdance.gif",
			read: "3 breakdancers spinning on their heads on a wet floor"
		},
		{
			title: "twerker",
			pace: "fast",
			gif: "images/twerking.gif",
			read: "an inflatable air dancer that appears to be twerking"
		},
	],
	unusual: [
		{
			title: "performance artist",
			pace: "slow",
			gif: "images/performanceart.gif",
			read: "a performance artist dressed as a rabbit hits another artist dressed as a panda with a large plush hammer"
		},
		{
			title: "finger tutter",
			pace: "slow",
			gif: "images/fingertutting.gif",
			read: "a fingertutting dancer making mesmerizing movements with his fingers"
		},
		{
			title: "Georgian dancer",
			pace: "fast",
			gif: "images/georgian.gif",
			read: "traditional Georgian dancers spinning rapidly on their feet and on their knees"
		},
		{
			title: "gangnam styler",
			pace: "fast",
			gif: "images/gangnam.gif",
			read: "K-Pop artist Psy performing Gangnam Style"
		},
	]
};





// when user answers opening question and submits 'onclick' will execute triggerQuiz() function
function triggerQuiz() {
	//create a variable that stores a function that grabs the VALUE of the opening question and converts the answer value to lower case
	const question1 = document.opener.question1.value.toLowerCase();

	if (question1 == "yes" || question1 == "yeah" || question1 == "ya") { 
		//if the user answer yes, then go into the document and find the element with the ID of 'Quiz', look at that element's STYLE, find the visibility PROPERTY. Make the visibility property equal to "visible", so that the user can see the rest of the quiz.
		document.getElementById("quiz").style.visibility = "visible";
		document.getElementById("imageResult").style.visibility = "visible";} 
		// if the user answers "no" then go into the document and find the element with an ID of "getout" and change its style to visible, so that the user sees the GIF telling them to get out.
		else if (question1 == "no" || question1 == "nope" || question1 == "nah") {
			document.getElementById("getout").style.visibility = "visible";
			document.getElementById("imageResult").style.visibility = "hidden";
			document.getElementById("refresherButton").style.visibility = "visible";
		} else {
			alert("it's a 'yes' or 'no' question, buddy")
		}
	};


function check() {
	//when the user SUBMITS their quiz, execute check() function so that their Generation and Pace preferences are stored into two variables: userGen and userPace
	const userGen = document.quiz.generation.value;
	const userPace = document.quiz.pace.value;
	//log the user's gen and pace preferences.
	console.log(userGen, userPace);

	//now the console will sort through the Dance object and create an array that's taylored to the user's Gen preferences, e.g. an array of New Dances (both Slow and Fast)

	console.log(dance[userGen]);
	const danceGen = dance[userGen];

//create a variable that stores a function that runs through the users Generation preferences and filters through the Generation options to look for the ones whose Pace is equal to (===) the user's chosen Pace preference.

	const genPaceOptions = danceGen.filter(dancestyle => dancestyle.pace === userPace);

	console.log(genPaceOptions);

	const randomDance = (array) => {
		const randomNumber = Math.floor(Math.random() * array.length);
		return array[randomNumber];
	}

	console.log(randomDance(genPaceOptions));
	const result = randomDance(genPaceOptions);

	//go into document and grab the element with the ID of 'danceImage' and make its src equal to the 'gif:' value of our "Result" variable.
	document.getElementById("danceImage").src = result.gif;
	document.getElementById("danceImage").alt = result.read;
	// document.getElementById("danceCaption").style.visibility = "hidden";
	document.getElementById("refresherButton").style.visibility = "visible";
	document.getElementById("invisibleAnswer").innerHTML = "You are a " + result.title + "!!";
	Object.assign(danceImage.style,{width:"100%", height:"100%"});
};

function refresher() {
	window.location.reload();
};


