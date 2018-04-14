
function getText(url){
	$("document").ready(function(){
		var div1 = $("#div1");
		if(div1.css("display")=="block")
		{
			div1.css("display", "none");
		}else{			
			div1.css("display", "block");
		}
		$("#div1").addClass("div1");
 		$("#div1").load(url);
	});
}

