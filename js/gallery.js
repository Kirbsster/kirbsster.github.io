function gallery() {
	var currentLeft = 0;
	var nextLeft = 0;
	var windowWidth = $('#imgWindow').width();
	var numImgs = $('#imgContainer img').length;
	var imgContainer = document.getElementById("imgContainer");
	var imgSelect = document.getElementById("imgSelect");
	var imgInputs = imgSelect.getElementsByTagName("input");
	var i = 0;				
	
	galleryPlay();
	function galleryPlay() {
		$('#imgContainer img').each(function(){
			$(this).css('opacity','0');
		});
		$('#imgContainer img').eq(i).css('opacity','1');
		clicked();
		setInterval(function(){		
			if(i>=numImgs){
				i=0;
				nextLeft=0;
				currentLeft=0;
			}
			$('#imgContainer img').each(function(){
				$(this).css('opacity','0');
			});
			imgContainer.style.left=-nextLeft+"px";
			$('#imgContainer img').eq(i).css('opacity','1');
			imgInputs[i].checked = true;
			var currentImgWidth = $('#imgContainer figure img').eq(i).width()
			var nextImgWidth = $('#imgContainer figure img').eq(i+1).width()
			nextLeft = currentLeft + currentImgWidth/2 + nextImgWidth/2;
			i++;
			currentLeft = nextLeft;
		}, 3000);
		function clicked() {
			$('#imgSelect label').click(function() {
				var cLeft=0;
				var nLeft=0;
				var index = $('#imgSelect label').index(this);
				$('#imgContainer img').each(function(j){
					if(j==index){
						imgContainer.style.left=-nLeft+"px";
						$('#imgContainer img').each(function(){
							$(this).css('opacity','0');
						});
						$('#imgContainer img').eq(j).css('opacity','1');
						i=index;
						nextLeft=nLeft;
						currentLeft=cLeft;
						return false;
					}					
					var curWidth = $('#imgContainer figure img').eq(j).width()
					var nextWidth = $('#imgContainer figure img').eq(j+1).width()
					nLeft = cLeft + curWidth/2 + nextWidth/2;
					cLeft = nLeft;
				});
			});
		}
	}
}