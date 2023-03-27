{{ include('../packages/groff/README.md') }}

## Подготовка

Groff ожидает переменную окружения `PAGE`, значение которой должно содержать формат бумаги по умолчанию. Указание значение переменной `PAGE=A4` может быть более подходящим. Хотя значение по умолчанию задается во время компиляции, его можно переопределить позже, записав в файл `/etc/papersize`.

## Настройка

```bash 
{{ include('../packages/groff/configure') }}
```

### Значения параметров

`PAGE=A4` - формат бумаги.

## Сборка

Пакет не поддерживает параллельную сборку. Выполните компиляцию пакета:
```bash 
{{ include('../packages/groff/build') }}
```

## Установка

```bash 
{{ include('../packages/groff/install') }}
```

## Установленные файлы

**Программы:** `addftinfo`, `afmtodit`, `chem`, `eqn`, `eqn2graph`, `gdiffmk`, `glilypond`, `gperl`, `gpinyin`, `grap2graph`, `grn`, `grodvi`, `groff`, `groffer`, `grog`, `grolbp`, `grolj4`, `gropdf`, `grops`, `grotty`, `hpftodit`, `indxbib`, `lkbib`, `lookbib`, `mmroff`, `neqn`, `nroff`, `pdfmom`, `pdfroff`, `pfbtops`, `pic`, `pic2graph`, `post-grohtml`, `preconv`, `pre-grohtml`, `refer`, `roff2dvi`, `roff2html`, `roff2pdf`, `roff2ps`, `roff2text`, `roff2x`, `soelim`, `tbl`, `tfmtodit`, и `troff`

**Директории:** `/usr/lib/groff`, `/usr/share/groff`

<!-- Возможна установка директории /usr/share/doc/groff -->
