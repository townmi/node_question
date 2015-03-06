$(function(){

	$("#red").on("click", function(){

		$.ajax({
			type: "post",
			url: "http://127.0.0.1:3000/reg",
			data: {
				"login":true
			},
			dataType: "json",
			success: function (data) {

				if(data.login){
					window.location.href = "/";
				}

			},
			error: function (msg) {
			   		
			   	// console.log(msg);

			}
		})

	})

})