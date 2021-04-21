/**
 * Настройки docsify
 * https://docsify.js.org/#/ru-ru/configuration
 * 
 */
window.$docsify = {
	name: 'Linux для себя',
	repo: 'https://github.com/Linux4Yourself/Linux4Yourself.Book',
	coverpage: false,
	loadNavbar: true,
	loadSidebar: true,
	loadSidebar: '_sidebar.md',
	maxLevel: 2,
	subMaxLevel: 3,
	auto2top: true,
	homepage: 'index.md',
	autoHeader: true,
	executeScript: true,
	notFoundPage: {
		'/': '_404.md',
	},
	search: {
		placeholder: 'Поиск',
	},
	alias: {
		'/.*/_sidebar.md': '/_sidebar.md',
	},
}

// Секция локальной настройки для содержания книги.
book = {
	scriptsUrl: 'https://raw.githubusercontent.com/Linux4Yourself/Linux4Yourself.Book.Scripts',
	// ревизия книги. (develop | release | tag (releases/v.0.0.1))
	// выставить в релизной ветке.
	revision: 'develop',
}
