function goTo(id) {
	document.getElementById(id).scrollIntoView({behavior: 'smooth'});
}

function expand_handler(event){
	setTimeout(function(){
		document.body.innerHTML += '<div class="mcontainer"><div class="expandable-container"><div class="expandable"></div></div></div>';
		expandable_container = (document.getElementsByClassName('expandable-container'))[0];
		expandable = (expandable_container.getElementsByClassName('expandable'))[0];
		panel = (document.getElementsByClassName('back-panel'))[0];
		grid = (document.getElementsByClassName('grid'))[0];
		fab = document.getElementById('fab');
		grid.style.display = 'none';
		fab.href = 'javascript: close_expand();';
		fab.innerHTML = '<i class="large material-icons">close</i>';
		document.getElementById('fab_label').innerHTML = 'Close';
		expandable_container.style.overflow = 'hidden';
		var x = event.clientX;
		var y = event.clientY;
		x -= expandable.parentElement.parentElement.offsetLeft;
		y -= expandable.parentElement.parentElement.offsetTop;
		console.log('x '+x+' y '+y)
		expandable.style.top = y-25+'px';
		expandable.style.left = x-25+'px';
		expandable.style.transform = 'scale(50)';
		panel.style.visibility = 'visible';
		panel.style.height = '240px';
		window.scrollTo(0, 0);
		setTimeout(function(){
			expandable_container.style.backgroundColor = '#fff'
			expandable_container.style.boxShadow = '0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24)';
			expandable.style.zIndex = -1;
		}, 500);
	}, 300);
};

function close_expand(){
	grid = (document.getElementsByClassName('grid'))[0];
	fab = document.getElementById('fab');
	expandable_container = (document.getElementsByClassName('expandable-container'))[0];
	expandable = (expandable_container.getElementsByClassName('expandable'))[0];
	panel = (document.getElementsByClassName('back-panel'))[0];
	panel.style.height = '2px';
	expandable_container.style.backgroundColor = '';
	expandable_container.style.boxShadow = '';
	expandable.style.zIndex = 20;
	expandable.style.transform = 'scale(1)';
	setTimeout(function(){
		grid.style.display = 'inline-block';
		panel.style.visibility = 'hidden';
		expandable_container.parentElement.removeChild(expandable_container);
		cells = document.getElementsByClassName('grid-cell');
		for(var i=0;i<cells.length;i++)
			cells[i].onclick = expand_handler;
	}, 500);
	fab.href = 'https://github.com/Hrily/MaterialRippleTransition';
	fab.innerHTML = '<img src="images/github-icon.png" width="60%" style="position: relative; top:50%; transform: translateY(-50%);" />'
	document.getElementById('fab_label').innerHTML = 'View on GitHub';
};

function show(){
	setTimeout(function(){
		$('.logo').css({'top': '40%'});
		$('.panel').css({'visibility': 'visible', 'height': '80%'});
		$('nav').css('visibility', 'visible');
		setTimeout(function(){$('body').css('backgroundColor', '#e9eaed');}, 70);
		$('.button-collapse').sideNav()
		$('#menu-btn').css('opacity', '1');
		$('.mcontainer').css({'opacity': '1', 'margin-top': '0'});
		// $('#header').css({'opacity': '1', 'top': '40px'});
	}, 500);
}

// cells = document.getElementsByClassName('grid-cell');
// for(var i=0;i<cells.length;i++)
// 	cells[i].onclick = expand_handler;