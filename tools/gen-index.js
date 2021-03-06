const corePackages = require('../docs/packages/packages.json');
const fs = require('fs');

const allPackages = []
corePackages.forEach(pkg => {
	allPackages.push({
		...pkg,
		isExtra: false
	});
});

let res = [];
let readmeAll = [];

function getPriorityText( priority) {
	switch (priority) {
		case 'important': return 'Важный';
		case 'required':  return 'Необходимый';
		case 'optional':  return 'Необязательный';
	}
	return '';
}

function breakLine() {
	return '\r\n\r\n';
}

allPackages.forEach(pkg => {
	const url = (pkg.downloadUrl ? pkg.downloadUrl: pkg.url).trim();
	const dir = `docs/packages/${pkg.name}`;

	if (!fs.existsSync(dir)) {
		fs.mkdirSync(dir);
	}

	fs.writeFileSync(`${dir}/.url`, url, 'utf-8');
	fs.writeFileSync(`${dir}/.version`, pkg.version, 'utf-8');
	fs.writeFileSync(`${dir}/.filename`, pkg.fileName, 'utf-8');
	fs.writeFileSync(`${dir}/.name`, `${pkg.name}-${pkg.version}`, 'utf-8');
	fs.writeFileSync(`${dir}/.name_short`, pkg.name, 'utf-8');

	const downloadLink = `Оригинальное расположение: [${pkg.url}](${pkg.url})`;
	const downloadLinkMirror = `Ссылка для загрузки: [${pkg.downloadUrl}](${pkg.downloadUrl})`;
	const version = `Версия: **${pkg.version}**`;
	const size = `Размер: **${pkg.size}Mb**`;
	const md5 = `MD5: **${pkg.md5}**`;
	const priority = `Приоритет: **${getPriorityText(pkg.priority)}**`;
	const homepage = `Домашняя страница: [${pkg.homeUrl}](${pkg.homeUrl})`;
	const sbu1 = pkg.sbu > 0 && pkg.sbu !== null ? `SBU (Сборка временной системы): **${pkg.sbu}**`: null;
	const sbu2 = pkg.sbu2 > 0 && pkg.sbu2 !== null ? `SBU: **${pkg.sbu2}**`: null;

	const readmeText = `# ${ pkg.name }${breakLine()}${ pkg.description }${breakLine()}${ version }${breakLine()}${ size }${breakLine()}${ priority }${breakLine()}${ downloadLink }${breakLine()}${ downloadLinkMirror }${breakLine()}${ md5 }${breakLine()}${ homepage }${breakLine()}${ sbu1 ? sbu1 + breakLine(): '' }${ sbu2 ? sbu2 + breakLine(): '' }`.trim();

	fs.writeFileSync(`${dir}/README.md`, readmeText, 'utf-8');

	readmeAll.push(`${readmeText}${breakLine()}---`);

	const scripts = [];
	
	fs.readdirSync(dir).forEach(file => {
		if (!file.startsWith('.') && file !== 'README.md') {
			scripts.push(file);
		}
	});

	fs.writeFileSync(`${dir}/.scripts`, scripts.join('\n'), 'utf-8');
	res.push(`${pkg.name}`);
});


fs.writeFileSync(`docs/packages/index`, res.join('\n'), 'utf-8');
fs.writeFileSync(`docs/packages/README.md`, readmeAll.join('\n'), 'utf-8');
