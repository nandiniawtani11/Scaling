<html>
	<head>
 		<title>Basic Animations Part 2 - scaling</title>
		<script type="text/javascript">
		
		var width=200;
		var difference=2;
		var interveralID =0;
		//document.getElementById("img1").style.width=width;

		function increase()
		{
			clearInterval(interveralID);
			interveralID=setInterval(zoomIn,10);
		}
		function decrease()
		{
			clearInterval(interveralID);
			interveralID=setInterval(zoomOut,10);
		}
		function zoomIn()
		{
			if(width<400)
			{
				width = width+difference;
				document.getElementById("img1").style.width=width;
				console.log(width);
			}
			else
			{
				clearInterval(interveralID);
			}
		}
		function zoomOut()
		{
			if(width>200)
			{
				width = width-difference;
				document.getElementById("img1").style.width=width;
				console.log(width);
			}
			else
			{
				clearInterval(interveralID);
			}
		}
		</script>
          <style>
            #img1
            {
                display: block;
                margin-top: 200;
                margin-left: auto;
                margin-right: auto;
                 width: 60%;
            }
        </style>
	</head>
	<body style="background-color: rgb(127, 80, 255);">
	
		<br>
		<br>
		<img onmouseover="increase()" onmouseout="decrease()" id="img1" src="heart.jpg" width="200" style="background-color: rgb(127, 80, 255);"/>
	</body>

</html>
