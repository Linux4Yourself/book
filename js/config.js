// Секция локальной настройки для содержания книги.
book = {
	// ревизия книги. (develop | release | tag (releases/v.0.0.1))
	// выставить в релизной ветке.
	revision: 'develop',
	revisionShort: 'dev',
}

const exrtraUrl =  `${book.revisionShort}-extra/#/`;

// источник метаданных пакетов.
const pkgsUrlBase = `packages`;
const pkgsSrc = `${pkgsUrlBase}/packages.json`;
const wgetList = `${pkgsUrlBase}/wget-list`;
const md5Sums = `${pkgsUrlBase}/md5sums`;

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
