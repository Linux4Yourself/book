# О прошивках

Многие драйвера в ядре Linux (например для видеокарт и сетевых адаптеров) требуют маленькие проприетарные компоненты - firmware (прошивки).

## Определение необходимых прошивок

Для того чтобы выяснить, какие прошивки нужны - загрузитесь в операционную систему (инструкции о том, как это сделать даны в следующих 2 разделах) и выполните команду `dmesg`. Если для вашего ядра требуются какие либо прошивки - вы увидите связанные с этим ошибки.

?> Если система не загружается из за ошибки, связанной с видео драйвером - поищите в интернете, какие драйвера необходимы для вашего видео адаптера.

## Установка прошивок

Их можно установить двумя способами:

Первый - скомпилировать требующий прошивку драйвер как модуль и поместить её в `/lib/firmware`.

Второй - задать опцию `CONFIG_EXTRA_FIRMWARE`. В ней должны быть перечислены через пробел все прошивки, которые необходимо включить в ядро.
Также, можно изменить путь поиска включенных в опцию `CONFIG_EXTRA_FIRMWARE` прошивок, задав опцию `CONFIG_EXTRA_FIRMWARE_DIR` (по умолчанию ``/lib/firmware``)

Например:

```
CONFIG_EXTRA_FIRMWARE="amdgpu/picasso_asd.bin amdgpu/picasso_gpu_info.bin amdgpu/picasso_mec2.bin amdgpu/picasso_pfp.bin amdgpu/picasso_rlc.bin amdgpu/picasso_ta.bin amdgpu/picasso_ce.bin amdgpu/picasso_me.bin amdgpu/picasso_mec.bin amdgpu/picasso_rlc_am4.bin amdgpu/picasso_sdma.bin amdgpu/picasso_vcn.bin"
CONFIG_EXTRA_FIRMWARE_DIR="/lib/firmware"
```

В этом случае подключаются firmware для видеокарт AMDGPU семейства picasso (Например Vega 8). Они в таком случае находятся в `/lib/firmware/amdgpu/`

Найти и загрузить большую часть прошивок можно здесь `https://git.kernel.org/pub/scm/linux/kernel/git/firmware/linux-firmware.git/tree/`
