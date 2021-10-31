{{ include('../packages/grub/README.md') }}

## Дополнительные необходимые файлы

https://unifoundry.com/pub/unifont/unifont-13.0.06/font-builds/unifont-13.0.06.pcf.gz

## Подготовка

Установите шрифт, используемый grub:

```bash 
{{ include('../packages/grub/prepare') }}
```

## Настройка

```bash 
{{ include('../packages/grub/configure') }}
```

## Значения параметров

`--disable-efiemu` - отключает установку большого и ненужного компонента

`--with-platform=efi` - использовать EFI

`--enable-grub-mkfont` - включает установку шрифтов

## Сборка

```bash 
{{ include('../packages/grub/build') }}
```

## Установка

```bash 
{{ include('../packages/grub/install') }}
```


