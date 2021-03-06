export const UIelement = (element, id = null) => {
	const UIprototype = (element == 'body') ? document.body : document.createElement(element);

	const UItext = (text) => {
		(element == 'input') ? UIprototype.value = text : UIprototype.innerText = text;
	};

	const addClass = (...items) => {
		items.forEach(item => {
			UIprototype.classList.add(item);
		});
	};

	const removeClass = (...items) => {
		items.forEach(item => {
			UIprototype.classList.remove(item);
		});
	};

	if (id != null) UIprototype.id = id;

	return Object.assign(UIprototype, { UItext, addClass, removeClass });
};