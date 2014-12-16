function galleryProjects() {	
	var currentImgWidth
		, nextImgWidth
		, prevImgWidth
		, currentLeft = 0
		, nextLeft
		, prevLeft=0
		, numImgs = $('.imgContainer img').length			
		, currentImg = 1
		, nextImg
		, prevImg=0;
	galleryPlay();
	function galleryPlay() {

		$('.imgContainer img').eq(0).css('opacity','1');
		
		clickedForward();
		clickedBack();
		clickedLabel();
		setInterval(function(){		
			
			$('.imgContainer img').each(function(){
				$(this).css('opacity','0');
			});
			nextImg = currentImg + 1;
			$('.imgContainer img').eq(currentImg).css('opacity','1');	
			$('.imgSelect input').eq(currentImg).prop('checked', true);
			
			if (currentImg==0){
				nextLeft=0;
			} if (currentImg>=numImgs){
				currentImg=0;
				currentLeft=0;
				nextImg=1;
				nextLeft=0;
				$('.imgContainer img').eq(currentImg).css('opacity','1');
				$('.imgSelect input').eq(currentImg).prop('checked', true);
			} else {
				currentLeft = Math.round($('.imgContainer').position().left);
				currentImgWidth = $('.imgContainer figure img').eq(currentImg-1).width()
				nextImgWidth = $('.imgContainer figure img').eq(nextImg-1).width()
				nextLeft = currentLeft - currentImgWidth/2 - nextImgWidth/2;
			}
			
			$('.imgContainer').css('left',nextLeft+"px");
			currentImg++;
			//alert(currentImg+' '+currentImgWidth+' '+nextImg+' '+nextImgWidth+' '+currentLeft+' '+nextLeft);
		}, 10000);
		function clickedLabel() {
			$('.imgSelect label').click(function() {
				var index = $('.imgSelect label').index(this);
				nextLeft=0;
				currentImg=0;
				currentLeft=0;
				$('.imgContainer img').each(function(){
					$(this).css('opacity','0');
				});
				$('.imgContainer img').each(function(j){
					if(j==index){
						$('.imgContainer img').eq(currentImg).css('opacity','1');
						$('.imgSelect input').eq(currentImg).prop('checked', true);
						currentImgWidth = $('.imgContainer figure img').eq(currentImg).width()
						nextImgWidth = $('.imgContainer figure img').eq(nextImg).width()
						$('.imgContainer').css('left',nextLeft+"px");

						//for next loop
						currentImg++;
						return false;				
					}
					nextImg = currentImg + 1;
					currentLeft = nextLeft;
					currentImgWidth = $('.imgContainer figure img').eq(currentImg).width()
					nextImgWidth = $('.imgContainer figure img').eq(nextImg).width()
					nextLeft = currentLeft - currentImgWidth/2 - nextImgWidth/2;
					currentImg++;
					
				});
			});
		}
		function clickedForward() {
			$('.imgWindow .forward').click(function() {
				$('.imgContainer img').each(function(){
					$(this).css('opacity','0');
				});
				$('.imgSelect input').each(function(){
					if(this.checked) {
						nextImg = currentImg + 1;
						$('.imgContainer img').eq(currentImg).css('opacity','1');
						$('.imgSelect input').eq(currentImg).prop('checked', true);
						
						if (currentImg==0){
							nextLeft=0;
						} if (currentImg>=numImgs){
							currentImg=0;
							currentLeft=0;
							nextImg=1;
							nextLeft=0;
							$('.imgContainer img').eq(currentImg).css('opacity','1');
							$('.imgSelect input').eq(currentImg).prop('checked', true);
						} else {
							currentLeft = Math.round($('.imgContainer').position().left);
							currentImgWidth = $('.imgContainer figure img').eq(currentImg-1).width()
							nextImgWidth = $('.imgContainer figure img').eq(nextImg-1).width()
							nextLeft = currentLeft - currentImgWidth/2 - nextImgWidth/2;
						}

						$('.imgContainer').css('left',nextLeft+"px");
						currentImg++;
						return false
					}		
				});
			});
		}
		function clickedBack() {
			$('.imgWindow .back').click(function() {
				$('.imgContainer img').each(function(){
					$(this).css('opacity','0');
				});
				
				if(currentImg<=0){
					currentImg=0;
					nextImg=1;
					prevLeft=0;
					currentLeft=0;
					$('.imgContainer img').eq(currentImg).css('opacity','1');
					$('.imgSelect input').eq(currentImg).prop('checked', true);
				} if (currentImg==1){
					currentImg=1;
					nextImg=2;
					currentLeft=0;
					currentImgWidth = $('.imgContainer figure img').eq(currentImg-1).width()
					prevImgWidth = $('.imgContainer figure img').eq(prevImg-1).width();
					prevLeft = currentLeft + currentImgWidth/2 + prevImgWidth/2;
					$('.imgContainer img').eq(currentImg-1).css('opacity','1');
					$('.imgSelect input').eq(currentImg-1).prop('checked', true);		
				} else {
					currentLeft = Math.round($('.imgContainer').position().left);
					prevImg = currentImg -1;
					currentImgWidth = $('.imgContainer figure img').eq(currentImg-1).width()
					prevImgWidth = $('.imgContainer figure img').eq(prevImg-1).width();
					prevLeft = currentLeft + currentImgWidth/2 + prevImgWidth/2;
					$('.imgContainer').css('left',prevLeft+"px");
					//alert(currentImg+' '+prevImg+' '+currentImgWidth+' '+prevImgWidth+' '+currentLeft+' '+nextLeft)
					currentImg = currentImg - 1;
					nextImg = nextImg - 1;
					$('.imgContainer img').eq(prevImg-1).css('opacity','1');
					$('.imgSelect input').eq(prevImg-1).prop('checked', true);
				}
				//alert(prevImg+' '+currentImg+' '+nextImg)
				prevImg = prevImg - 1;
				
			});
		}
	}
}