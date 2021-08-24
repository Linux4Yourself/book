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

allPackages.forEach(pkg => {
	const type = 'core';
	const url = (pkg.downloadUrl ? pkg.downloadUrl: pkg.url).trim();
	const dir = `docs/packages/${type}/${pkg.name}`;

	if (!fs.existsSync(dir)) {
		fs.mkdirSync(dir);
	}

	fs.writeFileSync(`${dir}/.url`, url, 'utf-8');
	fs.writeFileSync(`${dir}/.version`, pkg.version, 'utf-8');
	fs.writeFileSync(`${dir}/.name`, `${pkg.name}-${pkg.version}`, 'utf-8');
	const scripts = [];
	
	fs.readdirSync(dir).forEach(file => {
		if (!file.startsWith('.')) {
			scripts.push(file);
		}
	});

	fs.writeFileSync(`${dir}/.scripts`, scripts.join('\n'), 'utf-8');
	res.push(`${type}/${pkg.name}`);
});


fs.writeFileSync(`docs/packages/index`, res.join('\n'), 'utf-8');
