
const helloName = {
	spokenWord: 'Hello',	
};
(function () {
	helloName.speak = function (personName) {
		return (helloName.spokenWord + " " + personName);
	}
}());

const byeName = {
	spokenWord: 'Good Bye'
};

(function () {
	byeName.speak = function (personName) {
		return (byeName.spokenWord + " " + personName);
	}
}());

(function () {
	var names = ['Jack', 'Jenny', 'Smith', 'Ruby', 'James', 'Yaakov', 'John', 'Simba', 'Jude', 'Anderson'];
	for (var i = 0; i < names.length; i++) {
		var name = names[i];
		var firstLetter = name.charAt(0).toLowerCase();
		if (firstLetter === 'j' || firstLetter === 'J') {
			console.log(byeName.speak(name));
		} else {
			console.log(helloName.speak(name));
		}
	}
})();