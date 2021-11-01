cat > /etc/fstab << "EOF"
# file system  mount-point  type     options             dump  fsck
#                                                              order

/dev/sdX     /              ext4    defaults             1     1 
EOF
