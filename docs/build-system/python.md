<pkg :name="'python'" instsize showsbu2></pkg>

## Настройка
<package-script :package="'python'" :type="'configure'"></package-script>

## Сборка
<package-script :package="'python'" :type="'build'"></package-script>

## Установка
<package-script :package="'python'" :type="'install'"></package-script>

## Тестирование
<package-script :package="'python'" :type="'test'"></package-script>

!> На данном этапе, тестирование Python не рекомендуется производить. Тесты могут зависнуть. При желании, проведите тесты при переустановке пакета Python, но уже в руководстве ``Extra``.

## Установленные файлы

Программы: 2to3, idle3, pip3, pydoc3, python3 и python3-config

Библиотеки: libpython3.9.so и libpython3.so

Директории:  /usr/include/python3.9 и /usr/lib/python3

<script>
	new Vue({ el: '#main' })
</script> 
