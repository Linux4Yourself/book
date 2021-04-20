window.$docsify = {
	name: 'Linux для себя',
	repo: 'https://github.com/Linux4Yourself/Linux4Yourself.Book',
	coverpage: false,
	// load from _navbar.md
	loadNavbar: true,
	// load from nav.md
	loadNavbar: 'nav.md',
	// load from _sidebar.md
	loadSidebar: true,
	auto2top: true,
	// Change to /home.md
	homepage: 'index.md',
	autoHeader: true,
	executeScript: true,
	notFoundPage: {
		'/': '_404.md',
	},
	search: {
		placeholder: 'Поиск',
	}
}
