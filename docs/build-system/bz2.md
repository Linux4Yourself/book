<pkg :name="'bzip2'" instsize showsbu2></pkg>

## Дополнительные необходимые файлы

<a :href="patch.url">{{ patch.url}}</a>

## Подготовка

Примените патч для правильной установки документации:

<package-script :package="'bzip2'" :type="'patch'"></package-script>

Убедитесь, что будут созданы относительные символические ссылки и исправьте путь установки man-страниц:

<package-script :package="'bzip2'" :type="'prepare'"></package-script>

## Сборка

Для сборки динамической библиотеки `libbz2.so` и самого пакета:

<package-script :package="'bzip2'" :type="'build'"></package-script>

## Установка

<package-script :package="'bzip2'" :type="'install'"></package-script>

## Для multilib

### Очистка

<package-script :package="'bzip2'" :type="'multi_prepare'"></package-script>

### Сборка

<package-script :package="'bzip2'" :type="'multi_build'"></package-script>

### Установка

<package-script :package="'bzip2'" :type="'multi_install'"></package-script>

## Установленные файлы

Программы: bunzip2 (ссылка на bzip2), bzcat (ссылка на bzip2), bzcmp (ссылка на bzdiff), bzdiff, bzegrep (ссылка на bzgrep), bzfgrep (ссылка на bzgrep), bzgrep, bzip2, bzip2recover, bzless (ссылка на bzmore), и bzmore

Библиотеки: libbz2.so

### Краткое описание

`bunzip2` - Распаковывает файлы в формате bzip

`bzcat` - Распаковывает в стандартный вывод

`bzcmp` - Запускает cmp для файлов, сжатых с помощью bzip

`bzdiff` - Запускает diff для файлов, сжатых с помощью bzip

`Bzegrep` - Запускает egrep для файлов, сжатых с помощью bzip

`bzfgrep` - Запускает fgrep для файлов, сжатых с помощью bzip

`bzgrep` - Запускает grep для файлов, сжатых с помощью bzip

`bzip2` - Сжимает файлы, используя алгоритм сжатия текста сортировки блоков Барроуза-Уиллера с кодированием Хаффмана; степень сжатия лучше, чем достигается более традиционными компрессорами, использующими алгоритмы «Lempel-Ziv», такие как gzip

`bzip2recover` - Пытается восстановить данные из поврежденных bzip-файлов

`bzless` - Работает меньше с файлами, сжатыми с помощью bzip

`bzmore` - Работает больше с файлами, сжатыми с помощью bzip

`libbz2` - Библиотека, реализующая сжатие данных без потерь с сортировкой по блокам с использованием алгоритма Берроуза-Уиллера.

<script>
		new Vue({
		el: '#main',
		data: { package: {}, patch: {} },
		mounted: function () {
				this.getPackage('bzip2');
				this.getPatch();
		},
		methods: {
			getPackage: function(name) {
					getPackage(name)
					.then(response => this.package = response);
			},
			getPatch: function() {
					getPackage('bzip2-patch')
					.then(response => this.patch = response);
			},
		}
  })
</script>
