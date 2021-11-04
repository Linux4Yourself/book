{{ include('../packages/grub/README.md') }}

## Настройка

```bash 
{{ include('../packages/grub/configure-mbr') }}
```

## Значения параметров

`--disable-efiemu` - отключает установку большого и ненужного компонента

## Сборка

```bash 
{{ include('../packages/grub/build') }}
```

## Установка

```bash 
{{ include('../packages/grub/install-mbr') }}
```


