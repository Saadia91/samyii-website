window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/*
window.onload = function() {

	var background = document.getElementById('hero-image')

	var i = 0;

	var images = ['came1.jpg)', 'came2.jpg)', 'came3.jpg)']

	setInterval(function(){
		background.style.background = "url(photography/" + images[i];
		i++;
		if(i === 3) i = 0;

	}, 2000);
}
*/