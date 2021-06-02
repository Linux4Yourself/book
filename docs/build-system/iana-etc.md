<package-info :package="package" showsbu></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('iana-etc');
		},
		methods: {
			getPackage: function(name) {
					getPackage(name)
					.then(response => this.package = response);
			},
		}
  })
</script>

## Установка
```bash
cp -v services protocols /etc
```
### Установленные файлы

``/etc/protocols`` и ``/etc/services``

### Краткое описание

``/etc/protocols``  -  определяет, каким транспортным протоколом пользуется сервис. Имеется возможность различия протоколов udp или tcp. Сервис может работать с разными протоколами, а может быть два сервиса работают на одном порте, но с разными протоколами. 

и ``/etc/services`` - файл определений протоколов.  Данный файл является простым ASCII файлом, описывающим различные DARPA internet протоколы,
       которые  доступны  через  подсистему  TCP/IP. Не  изменяйте  этот файл, так как изменения могут привести к некорректному формированию IP
       пакетов. Номера протоколов и их имена определяются Центром Сетевой Информации (DDN Network
       Information Center).
