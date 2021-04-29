Vue.component('package-info', {
	props: {
		package: Object,
		showsbu: Boolean,
		showsbu2: Boolean,
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
			Важность: <b>{{ package.priority }}</b>
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
