{{ include('../packages/iproute2/README.md') }}

## Подготовка

- Программа `arpd` требует установленную Berkeley DB. Отключите её,
- Отключите 2 модуля, требующие `iptables`,

```bash 
{{ include('../packages/iproute2/prepare') }}
```

## Сборка

```bash 
{{ include('../packages/iproute2/build') }}
```

## Установка

```bash 
{{ include('../packages/iproute2/install') }}
```

## Установка документации

```bash 
{{ include('../packages/iproute2/install-doc') }}
```

## Установленные файлы

**Программы:** `bridge`, `ctstat` (ссылка на `lnstat`), `genl`, `ifcfg`, `ifstat`, `ip`, `lnstat`, `nstat`, `routef`, `routel`, `rtacct`, `rtmon`, `rtpr`, `rtstat` (ссылка на `lnstat`), `ss` и `tc`


