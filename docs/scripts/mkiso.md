#!/bin/bash

if [ $(id -u) != 0 ]; then
	echo "$0 script need to run as root!"
	exit 1
fi

trap "exit 1" SIGHUP SIGINT SIGQUIT SIGTERM

LIN_VER=1.0.0

CWD=$PWD
WDIR=/tmp/lx4uiso
ISOLINUXDIR=$CWD/livecd/isolinux
DISTRONAME="Lx4u"
LABEL=Lx4uLiveCD
LIN_ROOT=$LIN
OUTPUT=Lx4u-$LIN_VER-livecd.iso

isolinux_files="chain.c32 isolinux.bin ldlinux.c32 libutil.c32 reboot.c32 menu.c32
isohdpfx.bin isolinux.cfg libcom32.c32 poweroff.c32"

rm -rf $WDIR
mkdir -pv $WDIR

# prepare isolinux in working dir
mkdir -p $WDIR/{filesystem,isolinux,boot}
for file in $isolinux_files; do
	cp $ISOLINUXDIR/$file $WDIR/isolinux
done
echo "$DISTRONAME" > $WDIR/isolinux/linuxlive
[ -d livecd/virootfs ] && cp -aR livecd/virootfs $WDIR

cp $LIN_ROOT/boot/vmlinuz-* $WDIR/boot/vmlinuz
#cp $LIN_ROOT/boot/initrd-*-lfs.img $WDIR/boot/initrd

mksquashfs $LIN_ROOT $WDIR/filesystem/root.sfs \
		-b 1048576 -comp xz -Xdict-size 100% \
		-e $LIN_ROOT/tools/ \
		-e $LIN_ROOT/tmp/*
		
rm -f $OUTPUT
xorriso -as mkisofs \
		-r -J -joliet-long \
		-l -cache-inodes \
		-isohybrid-mbr $ISOLINUXDIR/isohdpfx.bin \
		-partition_offset 16 \
		-volid "$LABEL" \
		-b isolinux/isolinux.bin \
		-c isolinux/boot.cat \
		-no-emul-boot \
		-boot-load-size 4 \
		-boot-info-table \
		-o $OUTPUT \
		$WDIR

rm -fr $WDIR
