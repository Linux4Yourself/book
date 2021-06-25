<package-info :package="package" showsbu2></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('check');
		},
		methods: {
			getPackage: function(name) {
					getPackage(name)
					.then(response => this.package = response);
			},
		}
  })
</script>


## Настройка
<package-script :package="'check'" :type="'configure'"></package-script>

## Сборка
<package-script :package="'check'" :type="'build'"></package-script>

## Тестирование
<package-script :package="'check'" :type="'test'"></package-script>

> Тесты добавляют 4 SBU ко всему времени установки пакета.

## Установка
<package-script :package="'check'" :type="'install'"></package-script>

<script>
	new Vue({ el: '#main' })
</script> 
