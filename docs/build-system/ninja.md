<package-info :package="package" instsize showsbu2></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('ninja');
		},
		methods: {
			getPackage: function(name) {
					getPackage(name)
					.then(response => this.package = response);
			},
		}
  })
</script>

## Подготовка

?> Хотя данный пакет предлагается использовать при установке SystemD, однако он может понадобиться при установке многих других пакетов, за пределами создания базовой системы. Вернитесь к этой инструкции по мере необходимости.

?>  `ninja` запускает максимальное количество процессов параллельно. По умолчанию это количество ядер в системе плюс два. В некоторых случаях это может привести к перегреву ЦП или нехватке памяти в системе. При запуске из командной строки передача параметра ``-jN`` ограничит количество параллельных процессов, но некоторые пакеты могут не передавать параметр ``-j``.

Использование переменной окружения `NINJAJOBS` гарантирует ограничение на количество параллельных процессов.

Экспортируя эту переменую, укажите требуемое количество процессов, в соответствии с возможностями:

```bash
export NINJAJOBS=4
```

Для того, чтобы задействовать значение переменной `NINJAJOBS`, выполните корректировку:

```bash
sed -i '/int Guess/a \
  int   j = 0;\
  char* jobs = getenv( "NINJAJOBS" );\
  if ( jobs != NULL ) j = atoi( jobs );\
  if ( j > 0 ) return j;\
' src/ninja.cc
```

## Сборка

```bash
python3 configure.py --bootstrap
```

### Объяснение параметров

`--bootstrap` - параметр определяет что необходимо выполнить сборку для данной системы.


## Тестирование

```bash
./ninja ninja_test
./ninja_test --gtest_filter=-SubprocessTest.SetWithLots
```

## Установка

```bash
install -vm755 ninja /usr/bin/
install -vDm644 misc/bash-completion /usr/share/bash-completion/completions/ninja
install -vDm644 misc/zsh-completion  /usr/share/zsh/site-functions/_ninja
```


## Установленные файлы

Программы: ``ninja``
