# WSL Kali Linux

## Windows Subsytem for Kali Linux
* this is a vm built into windows, you can install it by going through WSL procedures and install the kali linux distribution. 
* It IS a bit of a process but if you do have WSL already it should be a piece of cake

documentation on WSL Kali: https://www.kali.org/docs/wsl/wsl-preparations/ 


According to Kali's doccumentation they have a quck method,

## Quick Method
Their recommendation is to get Kali running on WSL2:

1. Open a administrator commpand prompt and run:
```
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all
```
2. Restart when prompted
3. Download and install the WSL 2 Linux kernel from here: aka.ms/wsl2kernel
4. Restart
5. Open a command prompt and run:
```
wsl --set-default-version 2
```
6. Install from the Microsoft Store: <a href="https://apps.microsoft.com/store/detail/kali-linux/9PKR34TNCV07">Kali Linux</a>

## Installing Kali's Default Tools
This is probably one of the most important steps, as installing kali by itself is fine, its much much better to install it w/ the default tools.

I mean thats the main reason to install kali, but I digress...

The command to run inside kali to install the tools:
```
sudo apt install -y kali-linux-large
```


## How to run a Kali WSL GUI

### Win-KeX

Win-KeX provides a GUI desktop experience for Kali Linux in Windows Subsystem for Linux (WSL 2) with the following features:

* Window mode: start a Kali Linux desktop in a dedicated window
* Seamless mode: share the Windows desktop between Windows and Kali application and menus
* Enhanced session mode: Similar to Hyper-V, uses RDP for a more feature rich experience
  * Sound support
  * Shared clipboard for cut and paste support between Kali Linux and Windows
  * Root & unprivileged session support
  * Multi-session support: root window & non-privileged window & seamless sessions concurrently
  * Fully compatible with WSLg

### Preqs

* Kali in WSL 2
* Windows Terminal(powershell)

## Install Win-keX
Inside of Kali WSL, install Win-Kex by inputting:
* Note, the commands are after the $ symbol
```
kali@kali:~$ sudo apt update
kali@kali:~$
kali@kali:~$ sudo apt install -y kali-win-kex
```

## Running Win-Kex

Win-KeX has 3 different modes,
## Window Mode

Win-KeX in Window Mode (Win) will run a Kali Linux desktop session in a separate window.
Window mode helps keeping the Windows and Kali environments <strong>visually apart</strong>.

* Inside of Kali WSL: run
```
kex --win -s
```
* Windows Terminal:
```
wsl -d kali-linux kex --win -s
```

## Enhanced Session Mode
    
Win-KeX in Enhanced Session Mode (ESM) will run a Kali Linux desktop session in a separate window using protocols and clients native to Windows. ESM mode is the only supported mode on <strong>ARM devices</strong>.

* Inside of Kali WSL: run
```
kex --esm --ip -s
```
* Windows Terminal:
```
wsl -d kali-linux kex --esm --ip -s
```

## Seamless Mode (Recommended for full compatibility)

Win-KeX in Seamless Mode (SL) will launch a Kali Linux panel on the screen top of the Windows desktop.

Applications started via the panel will share the desktop with Microsoft Windows applications.

Seamless mode removes the visual segregation between Linux and Window apps and offers a great platform to run a penetration test in Kali Linux and copy the results straight into a Windows app for the final report.

Win-KeX utilises VcXsrv Windows X Server to achieve seamless desktop integration.

* Inside of Kali WSL: run
```
kex --sl -s
```
* Windows Terminal:
```
wsl -d kali-linux kex --sl -s
```

