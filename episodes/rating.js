// BY SLAVLEND

const dislikeBtn = document.querySelector(".dislike_btn"),
	  likeBtn = document.querySelector(".like_btn")

function updateLikeImages(episode) {
	console.log(getClientLiked(), getClientDisLiked())
	if (getClientLiked(episode) === 'true'){
		likeBtn.src = "./images/like.png"
	}
	else {
		console.log('src')
		likeBtn.src = "./images/notliked.png"
	}
	if (getClientDisLiked(episode) === 'true') {
		dislikeBtn.src = "./images/dislike.png"
	}
	else {
		dislikeBtn.src = "./images/notdisliked.png"
	}
}

updateLikeImages(window.location.pathname.split("/").pop())

// toggle like function
function toggleLike() {
	var path = window.location.pathname;
	var page = path.split("/").pop();
	var episode = page;
	if (getClientLiked(episode) === 'true'){
		saveClient(episode + "Liked", 'false')		
	}
	else {
		saveClient(episode + "Liked", 'true')
		if (getClientDisLiked(episode) === 'true'){
			saveClient(episode + "DisLiked", 'false')
		}		
	}
	updateLikeImages(episode)
}

// toggle dislike function
function toggleDisLike() {
	var path = window.location.pathname;
	var page = path.split("/").pop();
	var episode = page;	
	if (getClientDisLiked(episode) === 'true'){
		saveClient(episode + "DisLiked", 'false')		
	}
	else {
		saveClient(episode + "DisLiked", 'true')
		if (getClientLiked(episode) === 'true'){
			saveClient(episode + "Liked", 'false')
		}		
	}
	updateLikeImages(episode)
}

// save client
function saveClient(key, value) {
	localStorage.setItem(key, value)
}

// function for get liked
function getClientLiked(episode) {
	if (localStorage.getItem(episode + "Liked") !== null)
	{
		return localStorage.getItem(episode + "Liked")
	}
	else {
		return 'false'
	}
}

// function for get disliked
function getClientDisLiked(episode) {
	if (localStorage.getItem(episode + "DisLiked") !== null)
	{
		return localStorage.getItem(episode + "DisLiked")
	}
	else {
		return 'false'
	}
}

// set if not exist
if (dislikeBtn) {
	dislikeBtn.addEventListener('click', toggleDisLike)
}
if (video) {
	likeBtn.addEventListener('click', toggleLike)
}