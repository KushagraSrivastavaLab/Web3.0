function dark() {
	const elements = document.querySelectorAll('.colGrey, #body')
	for (const element of elements) {
		element.classList.add('dark-mode')
		element.classList.remove('colGrey')
	}
	
	document.getElementById('lightImage').style.display ="inline"
	document.getElementById('darkImage').style.display ="none"
	const borders = document.querySelectorAll('.shadowBlack')
	for(const border of borders){
		border.classList.add('shadowWhite')
		border.classList.remove('shadowBlack')
	}
}
function light() {
	const selected = document.querySelectorAll('#body, .dark-mode')
	for (const select of selected) {
		select.classList.add('colGrey')
		select.classList.remove('dark-mode')
	}
	document.getElementById('lightImage').style.display ="none"
	document.getElementById('darkImage').style.display ="inline"
}
function down() {
	document.getElementById('navLinks').style.display="flex";
	document.getElementById('menuImage').style.display ="none"
	document.getElementById('closeImage').style.display ="inline"
}
function up() {
	document.getElementById('navLinks').style.display="none";
	document.getElementById('menuImage').style.display ="inline"
	document.getElementById('closeImage').style.display ="none"
}