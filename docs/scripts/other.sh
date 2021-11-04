# Параметры для конкретного пользователя.
cat > ~/.bash_profile << "EOF"

if [ -f "$HOME/.bashrc" ] ; then
  source $HOME/.bashrc
fi

if [ -d "$HOME/bin" ] ; then
  pathprepend $HOME/bin
fi

# End ~/.bash_profile
EOF


cat > ~/.profile << "EOF"
# Begin ~/.profile
# Personal environment variables and startup programs.

if [ -d "$HOME/bin" ] ; then
  pathprepend $HOME/bin
fi

# Set up user specific i18n variables
#export LANG=<ll>_<CC>.<charmap><@modifiers>

# End ~/.profile
EOF


# Файл ~/.bashrc определяет поведение командной оболочки. Внимательное
# изучение этого примера поможет вам значительно продвинуться в понимании Bash.
# На данный момент, здесь подключаются только конфиги /etc/bashrc и /etc/profile
cat > ~/.bashrc << "EOF"
# Begin ~/.bashrc
# Written for Beyond Linux From Scratch
# by James Robertson <jameswrobertson@earthlink.net>

# Personal aliases and functions.

# Personal environment variables and startup programs should go in
# ~/.bash_profile.  System wide environment variables and startup
# programs are in /etc/profile.  System wide aliases and functions are
# in /etc/bashrc.

if [ -f "/etc/bashrc" ] ; then
  source /etc/bashrc
fi

if [ -f "/etc/profile" ] ; then
  source /etc/profile
fi

# Set up user specific i18n variables
#export LANG=<ll>_<CC>.<charmap><@modifiers>

# End ~/.bashrc
EOF
