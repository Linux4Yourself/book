<pkg :name="'sysvinit'" instsize showsbu2></pkg>

## Дополнительные необходимые файлы

<a :href="patch.url">{{ patch.url}}</a>

## Подготовка

Примените необходимый патч:

<package-script :package="'sysvinit'" :type="'patch'"></package-script>

## Сборка

<package-script :package="'sysvinit'" :type="'build'"></package-script>

## Установка

<package-script :package="'sysvinit'" :type="'install'"></package-script>

<script>
		new Vue({
		el: '#main',
		data: { package: {}, patch: {} },
		mounted: function () {
				this.getPatch();
		},
		methods: {
			getPatch: function() {
					getPackage('sysvinit-patch')
					.then(response => this.patch = response);
			},
		}
  })
</script>
