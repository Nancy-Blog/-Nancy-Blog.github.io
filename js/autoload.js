//封装异步加载资源的方法
function loadExternalResource(url, type) {
	return new Promise((resolve, reject) => {
		let tag;
		if (type === "css") {
			tag = document.createElement("link");
			tag.rel = "stylesheet";
			tag.href = url;
		}
		else if (type === "js") {
			tag = document.createElement("script");
			tag.src = url;
		}
		if (tag) {
			tag.onload = () => resolve(url);
			tag.onerror = () => reject(url);
			document.head.appendChild(tag);
		}
	});
}
 
if (screen.width >= 768) {
	Promise.all([
		loadExternalResource("https://cdn.jsdelivr.net/gh/crowya/live2d/live2d/waifu.min.css", "css"),
		loadExternalResource("https://cdn.jsdelivr.net/gh/crowya/live2d/live2d/live2d.min.js", "js"),
		loadExternalResource("https://cdn.jsdelivr.net/gh/crowya/live2d/live2d/waifu-tips.min.js", "js"),
		loadExternalResource("https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css", "css"),
		loadExternalResource("https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js", "js"),
	]).then(() => {
		loadExternalResource("https://cdn.jsdelivr.net/npm/meting@2.0.1/dist/Meting.min.js", "js");
	});
	ap = null;
	Object.defineProperty(document.querySelector('meting-js'), "aplayer", {
		set: function(aplayer) {
        		ap = aplayer;
        		ap_init();
        		initWidget();
		}
	});
}
