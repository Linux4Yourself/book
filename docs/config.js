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
	homepage: './index.md',
	autoHeader: true,
	executeScript: true,
	mergeNavbar: true,
	el: '#main',
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
	revision: 'release/v.1.1',
	revisionShort: 'rel',
}

const exrtraUrl =  `${book.revisionShort}-extra/#/`;

// источник метаданных пакетов.
const pkgsUrlBase = `https://raw.githubusercontent.com/Linux4Yourself/Linux4Yourself.Book.Packages/${book.revision}/src/packages/core`;
const pkgsSrc = `${pkgsUrlBase}/packages.json`;
const wgetList = `${pkgsUrlBase}/wget-list`;
const md5Sums = `${pkgsUrlBase}/md5sums`;
const scriptsUrlBase = `${book.scriptsUrl}/${book.revision}/src`;

// Получить список всех пакетов из источника.
getPackages = function () {
	return axios.get(pkgsSrc);
}

// Получить пакет по наименованию
getPackage = function (name) {
	return axios.get(pkgsSrc)
		.then(response => (response.data.filter(pkg => pkg.name === name))[0]);
}

getPackageScript = function (name, script) {
	return axios.get(`${pkgsUrlBase}/${name}/${script}`, {
			responseType: 'text'
		})
		.then(response => response.data);
}

selectScript = function(name) {
		return axios.get(`${scriptsUrlBase}/${name}.sh`, {
			responseType: 'text'
		})
		.then(response => response.data);
}
