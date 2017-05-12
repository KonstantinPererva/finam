$(document).ready(function() {

	$('.tabs__items li a').click(function(event){
		event.preventDefault();
		$('.tabs__items li a').removeClass('active');
		$(this).addClass('active');
		var data = $(this).attr('data-id-tab');
		$('.tab-'+data).fadeIn(100).siblings('div').fadeOut(100);
	});

	$('.currency-market tbody tr,.limit tbody tr,.rox__table-price tr,.list-exchanges tr').hover(function(){
		$(this).toggleClass('bg-pink');
	});

	$('.rox__table-price tr').hover(function(){
		$(this).toggleClass('bg-gray');
	});

	$('#list-exchanges').click(function (event){
		event.preventDefault();
		$('.list-exchanges').slideToggle(300);
	});

	$('.switching a').click(function (){
		event.preventDefault();
		$('.switching a').removeClass('active');
		$(this).addClass('active');
	});

	$('.CQG-screenshots .prev').click(function (){
		event.preventDefault();
		$('.screenshot-1').addClass('active').siblings('.screenshot-2').removeClass('active');
		$('.CQG-screenshots__points-2').removeClass('visible');
		$('.CQG-screenshots__points-1').addClass('visible');
	});

	$('.CQG-screenshots .next').click(function (){
		event.preventDefault();
		$('.screenshot-2').addClass('active').siblings('.screenshot-1').removeClass('active');
		$('.CQG-screenshots__points-1').removeClass('visible');
		$('.CQG-screenshots__points-2').addClass('visible');
	});

	$('.CQG-screenshots__points__icn').hover(function (){
		$(this).siblings('div').fadeIn(150);
	},function (){
		$(this).siblings('div').fadeOut(150);
	});

	var listVideo = [];
	var listVideo2 = [];
	var nameVideo = document.querySelectorAll('.video__data__name');
	var menuVideo = document.createElement('div');
		for (var i = 0; i < nameVideo.length; i++) {
			listVideo.push(nameVideo[i]);
		};

	var previewArr = [];
	var preview = document.getElementsByClassName('preview');
		for (var i = 0; i < preview.length; i++) {
			previewArr.push(preview[i]);
			var src = previewArr[i].getAttribute('data-srcVideo');
			var VideoId = src.substr(17,12);
			previewArr[i].setAttribute('src','https://i.ytimg.com/vi/'+VideoId+'/hqdefault.jpg');
			listVideo[i].setAttribute('data-id',VideoId);
		};	

		for (var i = 0; i < listVideo.length; i++) {
			listVideo2[i] = listVideo[i].cloneNode(true);
			menuVideo.appendChild(listVideo2[i]);
			listVideo2[i].addEventListener("click",toggleVideo);
		};

	$('.arrow-play').click(function(){
		var videoLive = $(this).parent('.img-video').siblings('.video__data').find('.video__data__name').text();
		$('#video-live').html(videoLive);
		var dataSrcVideo = $(this).siblings('.preview').attr('data-srcVideo');
		var VideoId = dataSrcVideo.substr(17,12);
		var menuListCategory = document.getElementById('menuListCategory');
		var videoPlayer = document.getElementById('videoPlayer');
		var div = document.createElement('div');
		div.setAttribute('id','backgroundIframe');
		var iframeVideo = document.createElement('iframe');
		iframeVideo.setAttribute('src','https://www.youtube.com/embed/'+VideoId+'?showinfo=0&autoplay=1&rel=0');
		iframeVideo.setAttribute('allowfullscreen','allowfullscreen');
		div.appendChild(iframeVideo);
		div.addEventListener("click",closeVideo);
		document.getElementById('closeIcon').addEventListener("click",closeVideo);
		videoPlayer.insertBefore(div, videoPlayer.firstChild);
		menuListCategory.insertBefore(menuVideo, menuListCategory.firstChild);
		$('#backgroundIframe,#videoPlayer,.closeIcon,#menuListCategory').fadeIn(150);
		setTimeout(function(){$('body').addClass('no-scroll');},150);
	});

	function closeVideo(){	
		$('#backgroundIframe,#videoPlayer,.closeIcon,#menuListCategory').fadeOut(150);
		setTimeout(function(){$('#backgroundIframe').remove();},150);
		$('body').removeClass('no-scroll');
	};

	function toggleVideo(){
		var VideoId = $(this).attr('data-id');
		$('iframe').attr('src','https://www.youtube.com/embed/'+VideoId+'?showinfo=0&autoplay=1&rel=0');
		var videoLive = $(this).text();
		$('#video-live').html(videoLive);
	};

	$('#videoPlayer__h2').click(function(){
		$('#menuListCategory').slideToggle(150);
		$('#videoPlayer__h2 i').toggleClass('arrow-up');
	});

	$('.arrow-play').hover(function(){
		$(this).parent('.img-video').siblings('.video__data').find('.video__data__name').toggleClass('color-red');
	});
});
