[![Waffle.io - Columns and their card count](https://badge.waffle.io/danielHPeters/address-manager-ts.svg?columns=all)](https://waffle.io/danielHPeters/address-manager-ts) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Build Status](https://travis-ci.org/danielHPeters/address-manager-ts.svg?branch=master)](https://travis-ci.org/danielHPeters/address-manager-ts) [![Coverage Status](https://coveralls.io/repos/github/danielHPeters/address-manager-ts/badge.svg?branch=master)](https://coveralls.io/github/danielHPeters/address-manager-ts?branch=master) [![dependencies Status](https://david-dm.org/danielHpeters/address-manager-ts/status.svg)](https://david-dm.org/danielHpeters/address-manager-ts)
# address-manager-ts
School project implementing 5 tier architecture.

## Installation
### UNIX
1. Download or clone this project.
2. Make sure you have `unixodbc` package installed as well as an odbc driver (preferably 64bit) for your dbms of choice.
3. If you don't have a webserver and don't want to configure one yourself you can download 
XAMPP from [here](https://www.apachefriends.org/de/index.html) and install it.  
4. Start your webserver with the dbms installed and use the `ddl.sql` script from the sql folder of this project
   to create the required db.
5. Configure a dsn in your `odbc.ini` with the name `m151` connecting to the previously created db.
6. If you havent installed the unix build tools for your distribution yet do that now and also install python 2.7.x.
7. Run `npm install` and `npm start` in the project root directory.
8. If everything worked fine you can acces the webpage at http://localhost:3000
### Windows
1. Download or clone this project.
2. Download XAMPP from [here](https://www.apachefriends.org/de/index.html) and install it.
2. Download the mysql odbc connector from[here](https://dev.mysql.com/downloads/connector/odbc/)  
   On windows you need the 32bit connector because XAMMP for Windows is a 32bit application unlike the Linux and OSX versions.  
   Install it.
3. Start apache and mysql from XAMMP Control Panel and execute the sql script in `ddl.sql` located in the sql folder of this project.  
4. Create a dsn with the bult in 32bit odbc manager (Windows 7 user may need to run `c:\Windows\SysWOW64\odbcad32.exe in order to open the 32bit odbc manager`).  
   Name it `m151`.
4. Run `npm install -g windows-build-tools` (installs visualc++ build tools as well as python.  
   Windows 7  Users need to install [.NET Framework 4.5.1](http://www.microsoft.com/en-us/download/details.aspx?id=40773))
5. Run `npm install` in the project root directory.
6. If everything went well you can run `npm start` in the project root and access the page at http://localhost:3000
