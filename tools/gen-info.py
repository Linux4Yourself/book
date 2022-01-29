"""
Script for generate 'README.md' pages.

Files:
- 'docs/packages/$PACKAGE/config.json' - package '$PACKAGE' configuration file;
- 'docs/packages/$PACKAGE/README.md' - generated markdown file from the package description json file;
- 'docs/packages/pkglist.json' - list of packages to generate README.md.

Usage:
'python3 ./tools/gen-info.py'

Global variablea and constants:
- 'PACKAGES' - directory with package files;
- 'PKGLIST' - f file with a list of all packages.

Required dependencies:
- 'python-3.10'

Bad things:
- The 'generator.gen_header()' function could have been better.

TODO:
- Add a 'generator.gen_footer()' function.

Sample file 'README.md':

```
# coreutils-9.0

Coreutils - пакет программного обеспечения GNU, содержащий большое количество основных утилит,
таких как cat, ls и rm, необходимых для UNIX-подобных операционных систем. Пакет включает
несколько более ранних пакетов — textutils, shellutils, fileutils и другие различные утилиты.

**Версия:** 9.0
<br />
**Размер:** 5.35
<br />
**Приоритет:** Необходимый
<br />
**Ссылка для загрузки:** https://lx4u.ru/downloads/packages/coreutils-9.0.tar.xz
<br />
**Оригинальное расположение:** https://ftp.gnu.org/gnu/coreutils/coreutils-9.0.tar.xz
<br />
**MD5:** 0d79ae8a6124546e3b94171375e5e5d0
<br />
**Домашняя страница:** https://gnu.org/software/coreutils
        <br />**SBU (сборка временной системы):** 0.4
<br />
**SBU:** 0.5
***
```
"""

import os
import json

PACKAGES = "./docs/packages/"
PKGLIST  = PACKAGES + "pkglist.json"

class config():
    def __init__(self, package: str):
        self.config = PACKAGES + package + "/config.json"
        with open(self.config) as f:
            data = json.load(f)
            self.priority = data["priority"]
    
    def get_priority(self):
        # match-case construction was included in python-3.10
        match(self.priority):
            case "important":
                return "Важный"
            case "required":
                return "Необходимый"
            case "optional":
                return "Необязательный"
        return ""
    
    def get_base_info(self):
        with open(self.config) as f:
            data = json.load(f)
        
            info = {
                "name":          data["name"],
                "version":       data["version"],
                "desc":          data["description"],
                "size":          data["size"],
                "home_page":     data["homeUrl"],
                "download":      data["downloadUrl"],
                "download_orig": data["url"],
                "md5":           data["md5"]
            }

        return info
    
    def get_sbu(self, mode):

        """
        Work modes:

        - 'sbu';
        - 'sbu2' - for temp system;
        """

        with open(self.config) as f:
            data = json.load(f)
        
        try:
            sbu = data[mode]
        except:
            sbu = "not_found"
        
        return sbu

class generator():
    def __init__(self, package: str):
        self.package = package
        self.config  = PACKAGES + package + "/config.json"
        self.md_file = PACKAGES + package + "/README.md"
    
    def gen_header(self):
        # TODO: may be better
        ## ГОВНОКОД ##
        conf      = config(self.package)

        base_info = conf.get_base_info()
        priority  = conf.get_priority()
        
        if conf.get_sbu("sbu") == "not_found" or conf.get_sbu("sbu") == 0:
            sbu = False
        else:
            sbu = True
        
        info = f"""# {base_info["name"]}-{base_info["version"]}

{base_info["desc"]}

**Версия:** {base_info["version"]}
<br />
**Размер:** {base_info["size"]}
<br />
**Приоритет:** {priority}
<br />
**Ссылка для загрузки:** {base_info["download"]}
<br />
**Оригинальное расположение:** {base_info["download_orig"]}
<br />
**MD5:** {base_info["md5"]}
<br />
**Домашняя страница:** {base_info["home_page"]}
        """

        with open(self.md_file, "w") as f:
            f.write(info)
        
        if sbu:
            info_sbu = f"""<br />
**SBU (сборка временной системы):** {conf.get_sbu("sbu")}
<br />
**SBU:** {conf.get_sbu("sbu2")}

***
            """
        else:
            info_sbu = f"""<br />**SBU:** {conf.get_sbu("sbu2")}

***
            """
        
        with open(self.md_file, "a") as f:
            f.write(info_sbu)

def gen_page():
    with open(PKGLIST) as f:
        data = json.load(f)
        packages = data["list"]
    
    for package in packages:
        gen = generator(package)

        gen.gen_header()

gen_page()