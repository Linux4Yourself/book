chroot "$LIN" /usr/bin/env -i           \
    HOME=/root TERM="$TERM"             \
    PS1='(chroot) \u:\w\$ '             \
    PATH=/bin:/sbin:/usr/bin:/usr/sbin  \
    /bin/bash --login
