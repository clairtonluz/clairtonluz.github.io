function setFocus(id) {
	document.getElementById(id).focus();
};

$(document).ready(function () {
	$('.show-sidebar').on('click', function (e) {
		e.preventDefault();
		$('div#main').toggleClass('sidebar-show');
		setTimeout(MessagesMenuWidth, 250);
	});
});

function getPath() {
	var path = document.URL;
	return path.substring(path.lastIndexOf("/"), path.length);
}
