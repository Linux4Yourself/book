<pkg :name="'man-db'" instsize showsbu2></pkg>

## Настройка

<package-script :package="'man-db'" :type="'configure'"></package-script>

## Значения параметров

- `--disable-setuid`
  запрещает задавать программе man setuid пользователю man.

- `--enable-cache-owner=bin`
  задаёт права доступа общесистемному кэшу пользователю, который является владельцем каталога bin.

- `--with-...`
  Эти три аргумента используются для настройки программ по умолчанию. `lynx` текстовый веб-обозреватель, `vgrind` преобразовывает исходный код программ в входные данные, `Groff` и `grap` полезны для набора графов в документах Groff. Программы vgrind и grap обычно нужны для просмотра справочных страниц.

## Сборка

<package-script :package="'man-db'" :type="'build'"></package-script>

## Тестирование

<package-script :package="'man-db'" :type="'test'"></package-script>

## Установка

<package-script :package="'man-db'" :type="'install'"></package-script>

## Страницы руководств на других языках

В нижеприведенной таблице указано соответствие кодировки, которая допускается при использовании в Man-DB страницах, расположенных в каталоге `/usr/share/man/`.
Кроме этого, Man-DB правильно определяет, имеют ли страницы руководства, установленные в этом каталоге, кодировку `UTF-8`.

| Язык (код)                             |  Кодировка  |
| -------------------------------------- | :---------: |
| Belarusian (be)                        |   CP1251    |
| Bulgarian (bg)                         |   CP1251    |
| Croatian (hr)                          | ISO-8859-2  |
| Czech (cs)                             | ISO-8859-2  |
| Danish (da)                            | ISO-8859-1  |
| Dutch (nl)                             | ISO-8859-1  |
| English (en)                           | ISO-8859-1  |
| Estonian (et)                          | ISO-8859-1  |
| Finnish (fi)                           | ISO-8859-1  |
| French (fr)                            | ISO-8859-1  |
| Galician (gl)                          | ISO-8859-1  |
| German (de)                            | ISO-8859-1  |
| Greek (el)                             | ISO-8859-7  |
| Hungarian (hu)                         | ISO-8859-2  |
| Icelandic (is)                         | ISO-8859-1  |
| Indonesian (id)                        | ISO-8859-1  |
| Irish (ga)                             | ISO-8859-1  |
| Italian (it)                           | ISO-8859-1  |
| Japanese (ja)                          |   EUC-JP    |
| Korean (ko)                            |   EUC-KR    |
| Latvian (lv)                           | ISO-8859-13 |
| Lithuanian (lt)                        | ISO-8859-13 |
| Macedonian (mk)                        | ISO-8859-5  |
| Norwegian (no)                         | ISO-8859-1  |
| Norwegian Bokmal (nb)                  | ISO-8859-1  |
| Norwegian Nynorsk (nn)                 | ISO-8859-1  |
| Polish (pl)                            | ISO-8859-2  |
| Portuguese (pt)                        | ISO-8859-1  |
| Romanian (ro)                          | ISO-8859-2  |
| Russian (ru)                           |   KOI8-R    |
| Serbian (sr)                           | ISO-8859-5  |
| Serbian Latin (sr@latin)               | ISO-8859-2  |
| Simplified Chinese (zh_CN)             |     GBK     |
| Simplified Chinese, Singapore (zh_SG)  |     GBK     |
| Slovak (sk)                            | ISO-8859-2  |
| Slovenian (sl)                         | ISO-8859-2  |
| Spanish (es)                           | ISO-8859-1  |
| Swedish (sv)                           | ISO-8859-1  |
| Traditional Chinese (zh_TW)            |    BIG5     |
| Traditional Chinese, Hong Kong (zh_HK) |  BIG5HKSCS  |
| Turkish (tr)                           | ISO-8859-9  |
| Ukrainian (uk)                         |   KOI8-U    |
| Vietnamese (vi)                        | TCVN5712-1  |

!> Страницы на других языках не поддерживаются.

<script>
	new Vue({ el: '#main' })
</script>
