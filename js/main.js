window.addEventListener('DOMContentLoaded', function() {

function myFirstApp(name,age) {

	alert('Привет, меня зовут ' + name + ' и это моя первая программа!');

	function showSkills() {
		let skills = ['HTML5', 'CSS3', 'Photoshop', 'English'];
		document.write('<b>' + 'Я владею:' + '</b>' + '<br>' + '<br>');

		for (let i = 0; i < skills.length; i++) {
			if(i == skills.length - 1) {
				// В конце последнего элемента массива ставится точка
      			document.write( (i + 1) + '. ' + skills[i] + '.' + '<br>');
      		} else {
      			/* В конце каждого элемента массива, кроме последнего 
      			ставится точка с запятой */
         		document.write( (i + 1) + '. ' + skills[i] + ';' + '<br>');
      		}
		}
	}

	showSkills();

	function checkAge() {
		if (age > 18) {
			alert(name + ',' + ' Вы нам подходите.');
		} else {
			alert(name + ',' + ' Вы нам не подходите.');
		}
	}

	checkAge()

	function calcPow(num) {
		result = num * num;
	}

	calcPow(5);
	console.log(result);
}

myFirstApp('Вячеслав', 39);

});