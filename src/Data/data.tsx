import {spa, checkRemove as c, cid} from '../Types'
export const checkRemove : c[] = [
    {
        id: 0,
        code: `cd %windir%\system32\nfor /f "tokens=2,3,4,5,6 usebackq delims=: / " %%a in ('%date% %time%') do echo %%c-%%a-%%b %%d%%e\necho DATE: %date% >status.txt\necho TIME: %time% >>status.txt\nfor /f "tokens=3" %b in ('cscript.exe %windir%\system32\slmgr.vbs /dti') do set IID=%b\necho IID: %IID% >>status.txt\ncscript slmgr.vbs /dli >>status.txt\ncscript slmgr.vbs /xpr >>status.txt\nstart status.txt
        `,
        name:'Check Licensed Window'
    },
    {
        id: 1,
        code: `for %a in (4,5,6) do (if exist "%ProgramFiles%\Microsoft Office\Office1%a\ospp.vbs" (cd /d "%ProgramFiles%\Microsoft Office\Office1%a")\nif exist "%ProgramFiles% (x86)\Microsoft Office\Office1%a\ospp.vbs" (cd /d "%ProgramFiles% (x86)\Microsoft Office\Office1%a"))\ncls\nstart WINWORD\nfor /f "tokens=2,3,4,5,6 usebackq delims=:/ " %%a in ('%date% %time%') do echo %%c-%%a-%%b %%d%%e\necho DATE: %date% >status.txt\necho TIME: %time% >>status.txt\nfor /f "tokens=8" %b in ('cscript ospp.vbs /dinstid ^| findstr /b /c:"Installation ID"') do set IID=%b\necho IID: %IID%>>status.txt\ncscript ospp.vbs /dstatus >>status.txt\nstart status.txt`,
        name:'Check Licensed Office All'
    },
    {
        id: 2,
        code: `for /f "tokens=2,3,4,5,6 usebackq delims=:/ " %%a in ('%date% %time%') do echo %%c-%%a-%%b %%d%%e\necho DATE: %date% >status.txt\necho TIME: %time% >>status.txt\nfor /f "tokens=8" %b in ('cscript ospp.vbs /dinstid ^| findstr /b /c:"Installation ID"') do set IID=%b\necho IID: %IID%>>status.txt\ncscript ospp.vbs /dstatus >>status.txt\nstart status.txt`,
        name:'Check Licensed Office 2010'
    },
    {
        id: 3,
        code: `if exist "%ProgramFiles%\Microsoft Office\Office15\ospp.vbs" (cd /d "%ProgramFiles%\Microsoft Office\Office15")\nif exist "%ProgramFiles(x86)%\Microsoft Office\Office15\ospp.vbs" (cd /d "%ProgramFiles(x86)%\Microsoft Office\Office15")\nstart WINWORD\nfor /f "tokens=2,3,4,5,6 usebackq delims=:/ " %%a in ('%date% %time%') do echo %%c-%%a-%%b %%d%%e\necho DATE: %date% >status.txt\necho TIME: %time% >>status.txt\nfor /f "tokens=8" %b in ('cscript ospp.vbs /dinstid ^| findstr /b /c:"Installation ID"') do set IID=%b\necho IID: %IID%>>status.txt\ncscript ospp.vbs /dstatus >>status.txt\nstart status.txt`,
        name:'Check Licensed Office 2013'
    },
    {
        id: 4,
        code: `
            for /f "tokens=2,3,4,5,6 usebackq delims=:/ " %%a in ('%date% %time%') do echo %%c-%%a-%%b %%d%%e\necho DATE: %date% >status.txt\necho TIME: %time% >>status.txt\nfor /f "tokens=8" %b in ('cscript ospp.vbs /dinstid ^| findstr /b /c:"Installation ID"') do set IID=%b\necho IID: %IID%>>status.txt\ncscript ospp.vbs /dstatus >>status.txt\nstart status.txt        `,
        name:'Check Licensed Office 2016/2019/2021'
    },
    {
        id: 5,
        code: `for %a in (4,5,6) do (if exist "%ProgramFiles%\Microsoft Office\Office1%a\ospp.vbs" (cd /d "%ProgramFiles%\Microsoft Office\Office1%a")\nIf exist "%ProgramFiles% (x86)\Microsoft Office\Office1%a\ospp.vbs" (cd /d "%ProgramFiles% (x86)\Microsoft Office\Office1%a"))\nfor /f "tokens= 8" %b in ('cscript //nologo OSPP.VBS /dstatus ^| findstr /b /c:"Last 5"') do (cscript //nologo ospp.vbs /unpkey:%b)`,
        name:'Remove Key Office All'
    },
    {
        id: 6,
        code: `cscript ospp.vbs /unpkey:`,
        name:'Remove Key Office'
    }
]
export const SPA : spa[] = [
    {
        id: 0,
        getCode: (key:string) => {
            return `cd %windir%\\system32
set k1=6PRHN-J3D9D-VT7GQ-GJ798-J8JM9
cls
cscript slmgr.vbs /rilc
cscript slmgr.vbs /upk
cscript slmgr.vbs /cpky
cscript slmgr.vbs /ckms
sc config Winmgmt start=demand & net start Winmgmt
sc config LicenseManager start= auto & net start LicenseManager
sc config wuauserv start= auto & net start wuauserv
@echo on&mode con: cols=20 lines=2
cscript slmgr.vbs /ipk %k1%
@mode con: cols=100 lines=30
clipup -v -o -altto c:\\
cscript slmgr.vbs -ato
start ms-settings:activation`
        },
        name: 'Activate Windows Online'
    },
    {
        id: 1,
        getCode: (key:string) => {
            return `cd %windir%\system32\nset k1=${key}\ncls\ncscript slmgr.vbs /rilc\ncscript slmgr.vbs /upk\ncscript slmgr.vbs /ckms\ncscript slmgr.vbs /cpky\nsc config Winmgmt start=demand & net start Winmgmt\nsc config LicenseManager start=auto & net start LicenseManager\nsc config wuauserv start=auto & sc start wuauserv\n@echo on&mode con: cols=20 lines=2\ncscript slmgr.vbs /ipk %k1%\n@mode con: cols=100 lines=30\ncscript slmgr.vbs /dti>C:\IID.txt\nstart C:\IID.txt`
        },
        name: 'Activate Windows byPhone'
    },
    {
        id: 2,
        getCode: (key:string) => {
            return `cd %windir%\\system32
set k1=6PRHN-J3D9D-VT7GQ-GJ798-J8JM9
cls
cscript slmgr.vbs /rilc
cscript slmgr.vbs /upk
cscript slmgr.vbs /ckms
cscript slmgr.vbs /cpky
sc config Winmgmt start=demand & net start Winmgmt
sc config LicenseManager start=auto & net start LicenseManager
sc config wuauserv start=auto & sc start wuauserv
@echo on&mode con: cols=20 lines=2
cscript slmgr.vbs /ipk %k1%
@mode con: cols=100 lines=30
cscript slmgr.vbs /dti>C:\\IID.txt
start C:\\IID.tx`
        },
        name: 'Activate Windows byPhone for Win7/8/8.1'
    },
    {
        id: 3,
        getCode: (key:string) => {
            return `sc config LicenseManager start= auto & net start LicenseManager
sc config wuauserv start= auto & net start wuauserv
changepk.exe /productkey VK7JG-NPHTM-C97JM-9MPGT-3V66T
exit`
        },
        name: 'Update Windows 10 Home To Windows 10 Pro'
    },
    {
        id: 4,
        getCode: (key:string) => {
            return `set k1=${key}
cls
for %a in (4,5,6) do (if exist "%ProgramFiles%\\Microsoft Office\\Office1%a\\ospp.vbs" (cd /d "%ProgramFiles%\\Microsoft Office\Office1%a")
if exist "%ProgramFiles% (x86)\\Microsoft Office\\Office1%a\\ospp.vbs" (cd /d "%ProgramFiles% (x86)\Microsoft Office\\Office1%a"))
@echo on&mode con: cols=20 lines=2
cscript OSPP.VBS /inpkey:%k1%
@mode con: cols=100 lines=30
cscript ospp.vbs /act`
        },
        name: 'Activate Office Online'
    },
    {
        id: 5,
        getCode: (key:string) => {
            return `if exist "%ProgramFiles%\\Microsoft Office\\Office14\\ospp.vbs" (cd /d "%ProgramFiles%\\Microsoft Office\\Office14")
if exist "%ProgramFiles(x86)%\\Microsoft Office\\Office14\\ospp.vbs" (cd /d "%ProgramFiles(x86)%\\Microsoft Office\\Office14")
set k1=${key}
cls
@echo on&mode con: cols=20 lines=2
cscript ospp.vbs /inpkey:%k1%
@mode con: cols=100 lines=30
cscript ospp.vbs /dinstid>id.txt 
start id.txt`
        },
        name: 'Activate Office 2010 byPhone'
    },
    {
        id: 6,
        getCode: (key:string) => {
                return `if exist "%ProgramFiles%\\Microsoft Office\\Office15\\ospp.vbs" (cd /d "%ProgramFiles%\\Microsoft Office\\Office15")
if exist "%ProgramFiles(x86)%\\Microsoft Office\\Office15\\ospp.vbs" (cd /d "%ProgramFiles(x86)%\\Microsoft Office\\Office15")
set k1=${key}
cls
@echo on&mode con: cols=20 lines=2
cscript ospp.vbs /inpkey:%k1%
@mode con: cols=100 lines=30
cscript ospp.vbs /dinstid>id.txt
start id.txt`
        },
        name: 'Activate Office 2013 byPhone'
    },
    {
        id: 7,
        getCode: (key:string) => {
            return `if exist "%ProgramFiles%\\Microsoft Office\\Office16\\ospp.vbs" (cd /d "%ProgramFiles%\\Microsoft Office\\Office16")
if exist "%ProgramFiles(x86)%\\Microsoft Office\\Office16\\ospp.vbs" (cd /d "%ProgramFiles(x86)%\\Microsoft Office\\Office16")
set k1=${key}
cls
@echo on&mode con: cols=20 lines=2
cscript ospp.vbs /inpkey:%k1%
@mode con: cols=100 lines=30
cscript ospp.vbs /dinstid>id.txt 
start id.txt`
        },
        name: 'Activate Office 2016/2019/2021 byPhone'
    },
    {
        id: 8,
        getCode: (key:string) => {
            return `set k1=${key}
cls
if exist "%ProgramFiles%\\Microsoft Office\\Office16\\ospp.vbs" cd /d "%ProgramFiles%\\Microsoft Office\\Office16"
if exist "%ProgramFiles(x86)%\\Microsoft Office\\Office16\\ospp.vbs" cd /d "%ProgramFiles(x86)%\\Microsoft Office\\Office16"
for /f %i in ('dir /b ..\\root\\Licenses16\\ProPlus2019VL_MAK_AE*.xrm-ms') do cscript ospp.vbs /inslic:"..\\root\\Licenses16\\%i"
for /f %i in ('dir /b ..\\root\\Licenses16\\ProPlus2019VL_KMS_Client_AE*.xrm-ms') do cscript ospp.vbs /inslic:"..\\root\\Licenses16\\%i"
@echo on&mode con: cols=20 lines=2
cscript OSPP.VBS /inpkey:%k1%
@mode con: cols=100 lines=30
cscript ospp.vbs /act`
        },
        name: 'Activate Office 2019 Volume'
    },
    {
        id: 9,
        getCode: (key:string) => {
            return `set k1=${key}
cls
if exist "%ProgramFiles%\\Microsoft Office\\Office16\\ospp.vbs" cd /d "%ProgramFiles%\\Microsoft Office\\Office16"
if exist "%ProgramFiles(x86)%\\Microsoft Office\\Office16\\ospp.vbs" cd /d "%ProgramFiles(x86)%\\Microsoft Office\\Office16"
for /f %i in ('dir /b ..\\root\\Licenses16\\ProPlus2021VL_MAK_AE*.xrm-ms') do cscript ospp.vbs /inslic:"..\\root\\Licenses16\\%i"
for /f %i in ('dir /b ..\\root\\Licenses16\\ProPlus2021VL_KMS_Client_AE*.xrm-ms') do cscript ospp.vbs /inslic:"..\\root\\Licenses16\\%i"
@echo on&mode con: cols=20 lines=2
cscript OSPP.VBS /inpkey:%k1%
@mode con: cols=100 lines=30
cscript ospp.vbs /act`
        },
        name: 'Activate Office 2021 Volume'
    },
]
export const CID: cid[] = [
    {
        id:0,
        name:'All Windows',
        getCode: (key:string) => {
            return `set CID=${key}			
cscript slmgr.vbs /atp %CID%			
cscript slmgr.vbs /ato			
for /f "tokens=2,3,4,5,6 usebackq delims=:/ " %%a in ('%date% %time%') do echo %%c-%%a-%%b %%d%%e			
echo DATE: %date% >status.txt			
echo TIME: %time% >>status.txt			
for /f "tokens=3" %b in ('cscript.exe %windir%\\system32\\slmgr.vbs /dti') do set IID=%b			
echo IID: %IID% >>status.txt			
echo CID: ${key} >>status.txt			
cscript slmgr.vbs /dli >>status.txt			
cscript slmgr.vbs /xpr >>status.txt			
start status.txt`
        }
    },
    {
        id:1,
        name:'All Office',
        getCode: (key:string) => {
            return `for %a in (4,5,6) do (if exist "%ProgramFiles%\\Microsoft Office\\Office1%a\\ospp.vbs" (cd /d "%ProgramFiles%\\Microsoft Office\\Office1%a")			
if exist "%ProgramFiles% (x86)\\Microsoft Office\\Office1%a\\ospp.vbs" (cd /d "%ProgramFiles% (x86)\\Microsoft Office\\Office1%a"))			
set CID=${key}			
cscript //nologo OSPP.VBS /actcid:%CID%			
cscript.exe OSPP.vbs /act			
for /f "tokens=2,3,4,5,6 usebackq delims=:/ " %%a in ('%date% %time%') do echo %%c-%%a-%%b %%d%%e			
echo DATE: %date% >status.txt			
echo TIME: %time% >>status.txt			
for /f "tokens=8" %b in ('cscript ospp.vbs /dinstid ^| findstr /b /c:"Installation ID"') do set IID=%b			
echo IID: %IID%>>status.txt			
echo CID: ${key}>>status.txt			
cscript ospp.vbs /dstatus >>status.txt			
start status.txt`
        }
    },
    {
        id:2,
        name:'Office 2010',
        getCode: (key:string) => {
            return `if exist "%ProgramFiles%\\Microsoft Office\\Office14\\ospp.vbs" (cd /d "%ProgramFiles%\\Microsoft Office\\Office14")			
if exist "%ProgramFiles(x86)%\\Microsoft Office\\Office14\\ospp.vbs" (cd /d "%ProgramFiles(x86)%\\Microsoft Office\\Office14")			
set CID=${key}			
cscript //nologo OSPP.VBS /actcid:%CID%			
cscript.exe OSPP.vbs /act			
for /f "tokens=2,3,4,5,6 usebackq delims=:/ " %%a in ('%date% %time%') do echo %%c-%%a-%%b %%d%%e			
echo DATE: %date% >status.txt			
echo TIME: %time% >>status.txt			
for /f "tokens=8" %b in ('cscript ospp.vbs /dinstid ^| findstr /b /c:"Installation ID"') do set IID=%b			
echo IID: %IID%>>status.txt			
echo CID:${key}>>status.txt			
cscript ospp.vbs /dstatus >>status.txt			
start status.txt`
        }
    },
    {
        id:3,
        name:'Office 2013',
        getCode: (key:string) => {
            return `if exist "%ProgramFiles%\\Microsoft Office\\Office15\\ospp.vbs" (cd /d "%ProgramFiles%\\Microsoft Office\\Office15")			
if exist "%ProgramFiles(x86)%\\Microsoft Office\\Office15\\ospp.vbs" (cd /d "%ProgramFiles(x86)%\\Microsoft Office\\Office15")			
set CID=${key}			
cscript //nologo OSPP.VBS /actcid:%CID%			
cscript.exe OSPP.vbs /act			
for /f "tokens=2,3,4,5,6 usebackq delims=:/ " %%a in ('%date% %time%') do echo %%c-%%a-%%b %%d%%e			
echo DATE: %date% >status.txt			
echo TIME: %time% >>status.txt			
for /f "tokens=8" %b in ('cscript ospp.vbs /dinstid ^| findstr /b /c:"Installation ID"') do set IID=%b			
echo IID: %IID%>>status.txt			
echo CID: ${key}>>status.txt			
cscript ospp.vbs /dstatus >>status.txt			
start status.txt`
        }
    },
    {
        id:4,
        name: 'Office 2016/2019/2021',
        getCode: (key:string) => {
            return `if exist "%ProgramFiles%\\Microsoft Office\\Office16\\ospp.vbs" (cd /d "%ProgramFiles%\\Microsoft Office\\Office16")			
if exist "%ProgramFiles(x86)%\\Microsoft Office\\Office16\\ospp.vbs" (cd /d "%ProgramFiles(x86)%\\Microsoft Office\\Office16")			
set CID=${key}			
cscript //nologo OSPP.VBS /actcid:%CID%			
cscript.exe OSPP.vbs /act			
for /f "tokens=2,3,4,5,6 usebackq delims=:/ " %%a in ('%date% %time%') do echo %%c-%%a-%%b %%d%%e			
echo DATE: %date% >status.txt			
echo TIME: %time% >>status.txt			
for /f "tokens=8" %b in ('cscript ospp.vbs /dinstid ^| findstr /b /c:"Installation ID"') do set IID=%b			
echo IID: %IID%>>status.txt			
echo CID: ${key}>>status.txt			
cscript ospp.vbs /dstatus >>status.txt			
start status.txt`
        }
    }
]
