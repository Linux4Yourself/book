<pkg :name="'dejagnu'" instsize showsbu2></pkg>

{{ include('../shared/test-pkgs.md') }}

## Настройка

{{ include('../packages/dejagnu/configure') }}

## Сборка и установка

{{ include('../packages/dejagnu/install') }}

## Тестирование

{{ include('../packages/dejagnu/test') }}
<package-script :package="'dejagnu'" :type="'test'"></package-script>


