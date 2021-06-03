Vue.component('package-info', {
	props: {
		package: Object,
		showsbu: Boolean,
		showsbu2: Boolean,
		instsize: Boolean,
	},
	computed: {
		priorityName: function () {
			switch (this.package.priority) {
				case 'important': return 'Важный';
				case 'required': return 'Необходимый';
				case 'optional': return 'Необязательный';
			}
			return '';
		},
	},
	template: `
	<div class="pkg">
		<p>{{ package.description }}</p>
		<p class="pkg-desc">
			Ссылка для скачивания: <a :href="package.url"><b>{{ package.url }}</b></a>
			<br />
			Текущая версия: <b>{{ package.version }}</b>
			<br />
			Домашняя страница: <a :href="package.homeUrl"><b>{{ package.homeUrl }}</b></a>
			<br />
			Важность: <a href="#/prepare/about-priority"><b>{{ priorityName }}</b></a>
			<br />
			Размер архива: <b>{{ package.size }} Mb</b>

			<span v-if="showsbu">
				<br />
				<span v-if="package.sbu">Приблизительное время сборки: <b>{{ package.sbu }} SBU</b></span>
			</span>

			<span v-if="showsbu2">
				<br />
				<span v-if="package.sbu2">Приблизительное время сборки: <b>{{ package.sbu2 }} SBU</b></span>
			</span>
			<span v-if="instsize">
				<br />
				<span v-if="package.installedSize">Приблизительный размер после установки: <b>{{ package.installedSize }} МБ</b></span>
			</span>
		</p>
		<slot></slot>
	</div>`,
});

Vue.component('warn', {
		template: `
			<div class="warn-description">
				<slot></slot>
			</div>
		`,
});
