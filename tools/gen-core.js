const packages = require('../docs/packages/packages.json');
const fs = require('fs');
const cp = require('child_process');

const updatedPkgs = [];
const downloadsDir = 'downloads';
const downloadsUrl = 'https://lx4u.ru/downloads/packages/';

if (!fs.existsSync(downloadsDir)) {
	fs.mkdirSync(downloadsDir);
}

packages.forEach(pkg => {
	if (pkg !== 'undefined') {

		const distination = `${downloadsDir}/${pkg.fileName}`;
		const patchDistination = `docs/patches/${pkg.fileName}`;
		let command = `curl -L ${pkg.url} --output ${distination} --silent`;

		if (pkg.url.endsWith('.patch')) {
			command = `curl -L ${pkg.url} --output ${patchDistination} --silent`;
		}

		if (!fs.existsSync(`${downloadsDir}/${pkg.fileName}`) && !pkg.url.endsWith('.patch')) {
			cp.execSync(command);
		}

		if (!fs.existsSync(`docs/patches/${pkg.fileName}`) && pkg.url.endsWith('.patch')) {
			cp.execSync(command);
		}

		const statsDestination = pkg.url.endsWith('.patch') ? patchDistination : distination;
		const stats = fs.statSync(statsDestination);
		const md5 = cp.execSync(`md5sum ${statsDestination}`, 'utf-8').toString().split(' ')[0];

		pkg.size = (stats.size / (1024 * 1024)).toFixed(2);
		pkg.md5 = md5;

		console.log(`${pkg.fileName} (${pkg.size} Mb): (${pkg.md5})`);

		const pkgScriptsFolder = `docs/packages/${pkg.name}`;

		if (fs.existsSync(pkgScriptsFolder)) {
			const scripts = [];

			fs.readdirSync(pkgScriptsFolder).forEach(file => {
				if (!file.startsWith('.') && !file.startsWith('README')) {
					const stats = fs.statSync(`${pkgScriptsFolder}/${file}`)
					const fileSizeInBytes = stats.size;
					if (fileSizeInBytes > 0) {
						pkg.multilibSupport = file.startsWith('multi');
						scripts.push(file);
					} else {
						fs.unlinkSync(`${pkgScriptsFolder}/${file}`);
					}
				}
			});
			pkg.scripts = scripts;
		}

		pkg.downloadUrl = `${downloadsUrl}${pkg.fileName}`;

		updatedPkgs.push(pkg);
	}
});

fs.writeFileSync(`docs/packages/packages.json`, JSON.stringify(updatedPkgs, null, '\t'), 'utf-8');
fs.writeFileSync(`docs/packages/wget-list`, updatedPkgs.map(x => `${x.downloadUrl}`).join('\n'), 'utf-8');
fs.writeFileSync(`docs/packages/wget-list.orig`, updatedPkgs.map(x => `${x.url}`).join('\n'), 'utf-8');
fs.writeFileSync(`docs/packages/md5sums`, String(updatedPkgs.map(x => `${x.md5} ${x.fileName}`).join('\n')), 'utf-8');
fs.writeFileSync(`docs/packages/pkg-list`, String(updatedPkgs.map(x => x.fileName).join('\n')), 'utf-8');
