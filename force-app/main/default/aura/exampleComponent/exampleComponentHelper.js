({
	blink: function (component) {
		let body = component.find("blinkThis");
		$A.util.toggleClass(body, "blinkoff");
	}
})