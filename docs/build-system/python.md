<package-info :package="package" showsbu></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('python');
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


```bash
./configure --prefix=/usr        \
            --enable-shared      \
            --with-system-expat  \
            --with-system-ffi    \
            --with-ensurepip=yes \
            --enable-optimizations
```

## Сборка


```bash
make
```

## Установка

```bash
make install
```

## Тестирование

```bash
make test
```
 

## Установленные файлы

Программы: 2to3, idle3, pip3, pydoc3, python3 и python3-config

Библиотеки: libpython3.9.so и libpython3.so

Директории:  /usr/include/python3.9 и /usr/lib/python3

