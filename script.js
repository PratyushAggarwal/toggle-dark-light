var toggle=false;

$("#circle").on('click',function(){
	if(!toggle){
		toggle=true;
		$("#circle").css('margin-left','101px');
		$("body").css('background-color','black');	
		$("h1").css('color','white');
		
	}else{
		toggle=false;
		$("#circle").css('margin-left','2px');
		$("body").css('background-color','white');	
		$("h1").css('color','black');
	}
});