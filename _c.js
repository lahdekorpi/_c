window._c = x => {
	if (x instanceof HTMLElement) {
		x.on = (e, o = undefined) => {
			return new Promise(resolve => {
				x.addEventListener(e, resolve, o);
			})
		}
		return x;
	} else {
		return document.querySelectorAll(x);
	}
}
