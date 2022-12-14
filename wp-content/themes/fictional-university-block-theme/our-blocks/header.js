wp.blocks.registerBlockType("ourblocktheme/fictional-university-header", {
	title: "Fictional University Header",
	edit: function () {
		return wp.element.createElement("div", {className: "our-placeholder-block"}, "Fictional University Header" +
			" Placeholder")
	},
	save: function () {
		return null
	}
})