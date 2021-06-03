<!-- 
	Этот шаблон  можно использовавть для инструкции по сборке пакета.
	<pkg :name="'mpc'" instsize showsbu2></pkg> - шапка с описанием пакета.
		параметры: name - название пакета из файла packages.json репозитория с пакетами. https://github.com/Linux4Yourself/Linux4Yourself.Book.Packages

	<package-script :package="'mpc'" :type="'prepare'"></package-script> - выводит инструкцию по использованию пакета.
		параметры:
			name - название пакета из файла packages.json репозитория с пакетами. https://github.com/Linux4Yourself/Linux4Yourself.Book.Packages
		  type - тип инструкции. Посмотрите содержимое каталога пакета, для которого необходимо вывечти инструкцию:
			Типовые файлы:
			- prepare - подготовка
			- patch - применить патч
			- build - сборка
			- test - тестирование
			- configure - настройка
			- install - установка
			- multi_prepare - подготовка multilib
  	  - multi_configure - настройка multilib
			- multi_build - сборка multilib
			- multi_install - установка multilib
 -->

<pkg :name="'mpc'" instsize showsbu2></pkg>
## Подготовка
<package-script :package="'mpc'" :type="'prepare'"></package-script>
## Настройка
<package-script :package="'mpc'" :type="'configure'"></package-script>

## Сборка
<package-script :package="'mpc'" :type="'build'"></package-script>
## Тестирование
<package-script :package="'mpc'" :type="'test'"></package-script>

## Установка
<package-script :package="'mpc'" :type="'install'"></package-script>
 
## Установленные файлы
<package-script :package="'mpc'" :type="'files'"></package-script>

<script>
	new Vue({ el: '#main' })
</script> 
