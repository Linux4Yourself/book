<pkg :name="'bzip2'" instsize showsbu2></pkg>

## Дополнительные необходимые файлы

<a :href="patch.url">{{ patch.url}}</a>

## Подготовка

Примените патч для правильной установки документации:

[filename](../packages/core/bzip2/patch ':include')

Убедитесь, что будут созданы относительные символические ссылки, и исправьте путь установки man-страниц:

[filename](../packages/core/bzip2/prepare ':include')

## Сборка

Для сборки динамической библиотеки `libbz2.so` и самого пакета:

[filename](../packages/core/bzip2/build ':include')

## Установка

[filename](../packages/core/bzip2/install ':include')

## При раздельной структуре каталогов

[filename](../packages/core/bzip2/cldirs ':include')

## Для multilib

### Очистка

[filename](../packages/core/bzip2/multi_prepare ':include')

### Сборка

[filename](../packages/core/bzip2/multi_build ':include')

### Установка

[filename](../packages/core/bzip2/multi_install ':include')

## Установленные файлы

Программы: bunzip2 (ссылка на bzip2), bzcat (ссылка на bzip2), bzcmp (ссылка на bzdiff), bzdiff, bzegrep (ссылка на bzgrep), bzfgrep (ссылка на bzgrep), bzgrep, bzip2, bzip2recover, bzless (ссылка на bzmore), и bzmore

Библиотеки: libbz2.so

### Краткое описание

`bunzip2` - распаковывает файлы в формате bzip

`bzcat` - распаковывает в стандартный вывод

`bzcmp` - запускает cmp для файлов, сжатых с помощью bzip

`bzdiff` - запускает diff для файлов, сжатых с помощью bzip

`Bzegrep` - запускает egrep для файлов, сжатых с помощью bzip

`bzfgrep` - запускает fgrep для файлов, сжатых с помощью bzip

`bzgrep` - запускает grep для файлов, сжатых с помощью bzip

`bzip2` - сжимает файлы, используя алгоритм сжатия текста сортировки блоков Барроуза-Уиллера с кодированием Хаффмана; степень сжатия лучше, чем достигается более традиционными компрессорами, использующими алгоритмы «Lempel-Ziv», такие как gzip

`bzip2recover` - пытается восстановить данные из поврежденных bzip-файлов

`bzless` - работает меньше с файлами, сжатыми с помощью bzip

`bzmore` - работает больше с файлами, сжатыми с помощью bzip

`libbz2` - библиотека, реализующая сжатие данных без потерь с сортировкой по блокам с использованием алгоритма Берроуза-Уиллера.

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
