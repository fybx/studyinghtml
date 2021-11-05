function clearInput(){
	document.getElementById("usernameBox").value = null;
	document.getElementById("passwordBox").value = null;
}

async function auth(){
	var uname = document.getElementById("usernameBox").value;
	let passw = await sha256(document.getElementById("passwordBox").value);

	/* hashlerin hiçbir uygulamaya hardcode edilmemesi gerektiğini unutmayalım =D */
	if (uname === "admin" && passw == "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3"){
		alert("Aferin! Başarıyla giriş yapıldı =D");
		window.open("https://github.com/fybalaban", "_self");
	}
	else {
		alert("Üzgünüm :( Giriş yapılamadı.");
	}
}

async function sha256(message) {
	const msgBuffer = new TextEncoder().encode(message);
	const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
	const hashArray = Array.from(new Uint8Array(hashBuffer));
	const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
	return hashHex;
}