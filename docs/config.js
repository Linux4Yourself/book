/**
 * Настройки docsify
 * https://docsify.js.org/#/ru-ru/configuration
 * 
 */
window.$docsify = {
	name: 'Linux для себя',
	repo: 'https://github.com/Linux4Yourself/Linux4Yourself.Book',
	coverpage: false,
	loadSidebar: true,
	maxLevel: 2,
	subMaxLevel: 3,
	auto2top: true,
	homepage: './prologue/foreword.md',
	autoHeader: true,
	executeScript: true,
	mergeNavbar: true,
	notFoundPage: {
		'/': '_404.md',
	},
	search: {
		placeholder: 'Поиск',
	},
	alias: {
		'/.*/_sidebar.md': '/_sidebar.md',
	},
	copyCode: {
		buttonText: 'Скопировать  в буфер обмена',
		errorText: 'Ошибка',
		successText: 'Текст скопирован  в буфер обмена'
	},
	requestHeaders: {
		'cache-control': 'max-age=0',
	},
	// https://github.com/imyelo/docsify-pagination
	pagination: {
		previousText: 'Назад',
		nextText: 'Вперёд',
		crossChapter: true,
		crossChapterText: true,
	},
}

// Секция локальной настройки для содержания книги.
book = {
	scriptsUrl: 'https://raw.githubusercontent.com/Linux4Yourself/Linux4Yourself.Book.Scripts',
	// ревизия книги. (develop | release | tag (releases/v.0.0.1))
	// выставить в релизной ветке.
	revision: 'develop',
}

// источник метаданных пакетов.
const pkgsSrc = `https://raw.githubusercontent.com/Linux4Yourself/Linux4Yourself.Book.Packages/${book.revision}/src/core-packages.json`;

// Получить список всех пакетов из источника.
getPackages = function () {
	return axios.get(pkgsSrc);
}

// Получить пакет по наименованию
getPackage = function (name) {
	return axios.get(pkgsSrc)
		.then(response => response.data.filter(pkg => pkg.name === name)[0]);
}
