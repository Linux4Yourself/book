Vue.component('package-info', {
	props: {
		package: Object,
		showsbu: Boolean,
		showsbu2: Boolean,
	},
	computed: {
		priorityName: function () {
			switch (this.package.priority) {
				case 'important': return 'Важный';
				case 'required': return 'Необходимый';
				case 'optional': return 'Не обязательный';
			}
			return '';
		},
	},
	template: `
	<div class="pkg">
		<p class="pkg-desc">
			Ссылка для скачивания: <a :href="package.url"><b>{{ package.url }}</b></a>
			<br />
			Текущая версия: <b>{{ package.version }}</b>
			<br />
			Домашняя страница: <a :href="package.homeUrl"><b>{{ package.homeUrl }}</b></a>
			<br />
			Важность: <b>{{ priorityName }}</b>
			<br />
			Размер архива: <b>{{ package.size }} Mb</b>

			<span v-if="showsbu">
				<br />
				<span v-if="package.sbu">Приблизительное время сборки: <b>{{ package.sbu }} SBU</b><span>
			</span>

			<span v-if="showsbu2">
				<br />
				<span v-if="package.sbu2">Приблизительное время сборки: <b>{{ package.sbu2 }} SBU</b><span>
			</span>
		<p>
		<p class="pkg-desc">{{ package.description }}<p>
		<slot></slot>
	</div>`,
})
