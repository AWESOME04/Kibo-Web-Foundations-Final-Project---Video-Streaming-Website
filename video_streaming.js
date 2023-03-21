<script>
	// Code to play video when the "Watch Video" link is clicked
	var videoLinks = document.querySelectorAll(".video a");
	for (var i = 0; i < videoLinks.length; i++) {
		videoLinks[i].addEventListener("click", function(event) {
			event.preventDefault();
			var video = this.parentNode.querySelector("video");
			video.play();
		});
	}
</script>

