/**
 * Настройки docsify
 * https://docsify.js.org/#/ru-ru/configuration
 * 
 */
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

// Секция локальной настройки для содержания книги.
book = {
	scriptsUrl: 'https://raw.githubusercontent.com/Linux4Yourself/Linux4Yourself.Book.Scripts',
	// ревизия книги. (develop | release | tag (releases/v.0.0.1))
	// выставить в релизной ветке.
	revision: 'develop',
}