wp.blocks.registerBlockType("ourblocktheme/blogindex", {
	title: "Fictional University Blog Index",
	edit: function () {
		return wp.element.createElement("div", {className: "our-placeholder-block"}, "Fictional University Blog Index")
	},
	save: function () {
		return null
	}
})