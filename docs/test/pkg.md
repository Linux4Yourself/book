# {{ package.name }} v.{{ package.version }}

Описание: {{ package.description }}

Ссылка для: скачивания {{ package.url }}

Размер архива: {{ package.size }}

Имя файла: {{ package.fileName }}

md5-сумма файла: {{ package.md5 }}

Страница релизов: {{ package.releasesUrl }}

Домашняя страница: {{ package.homeUrl }}

Приоритет: {{ package.priority }}

Размер устанавливаемых файлов: {{ package.installedSize }}

SBU: {{ package.sbu }}

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				// Поместить в аргумент название пакета.
				this.getPackage('autoconf');
		},
		methods: {
			getPackage: function(name) {
					getPackage(name)
					.then(response => this.package = response);
			}
		}
  })
</script>
