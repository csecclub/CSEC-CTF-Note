# Event Viewing

## Description
One of the employees at your company has their computer infected by malware! Turns out every time they try to switch on the computer, it shuts down right after they log in. The story given by the employee is as follows:
* They installed software using an installer they downloaded online
* They ran the installed software but it seemed to do nothing
* Now every time they bootup and login to their computer, a black command prompt screen quickly opens and closes and their computer shuts down instantly.
See if you can find evidence for the each of these events and retrieve the flag (split into 3 pieces) from the correct logs!
Download the Windows Log file here: https://challenge-files.picoctf.net/c_verbal_sleep/123d9b79cadb6b44ab6ae912f25bf9cc18498e8addee851e7d349416c7ffc1e1/Windows_Logs.evtx


## Answer

I just completed this one, it wasn't actually that bad. 

First you convert the event log into something readable by doing ``` evtxexport Windows_Logs.evtx > readable.txt
```

After that I did this to find the program that started shutting down the computer: ``` cat readable.txt | grep shutdown```

Noticed that it was called Totally_Legit_Software and put it through grep again and found these two parts of the flag:
```cat readable.txt | grep -n -C 15  Totally_Legit_Software```
```641-Event number                       : 75
1642-Creation time                      : Jul 15, 2024 15:55:57.729798400 UTC
1643-Written time                       : Jul 15, 2024 15:55:57.729798400 UTC
1644-Event version                      : 0
1645-Event level                        : Information (4)
1646-User security identifier   : S-1-5-21-3576963320-1344788273-4164204335-1001
1647-Computer name                      : DESKTOP-EKVR84B
1648-Source name                        : MsiInstaller
1649-Channel name                       : Application
1650-Event identifier           : 0x00000409 (1033)
1651-Number of strings          : 8
1652:String: 1                  : Totally_Legit_Software
1653-String: 2                  : 1.3.3.7
1654-String: 3                  : 0
1655-String: 4                  : 0
1656-String: 5                  : cGljb0NURntFdjNudF92aTN3djNyXw==

4485-Event number                       : 186
4486-Creation time                      : Jul 15, 2024 15:56:19.103196400 UTC
4487-Written time                       : Jul 15, 2024 15:56:19.103196400 UTC
4488-Event version                      : 0
4489-Event level                        : Information (0)
4490-Computer name                      : DESKTOP-EKVR84B
4491-Source name                        : Microsoft-Windows-Security-Auditing
... Shutdown (MXNfYV9wcjN0dHlfdXMzZnVsXw==)
```

Finally i had trouble finding it shutdown everytime on boot. So i looked up the event id for shutdown. 

```cat readable.txt | grep -n -C 15  1074
```
```
131102:Event identifier         : 0x00000432 (1074)
131103-Number of strings                : 7
131104-String: 1                        : C:\Windows\system32\shutdown.exe (DESKTOP-EKVR84B)
131105-String: 2                        : DESKTOP-EKVR84B
131106-String: 3                        : No title for this reason could be found
131107-String: 4                        : 0x800000ff
131108-String: 5                        : shutdown
131109-String: 6                        : dDAwbF84MWJhM2ZlOX0=
131110-String: 7                        : DESKTOP-EKVR84B\user
```

finally put that all together in cyberchef to get: cGljb0NURntFdjNudF92aTN3djNyXw==MXNfYV9wcjN0dHlfdXMzZnVsXw==dDAwbF84MWJhM2ZlOX0=    --->  picoCTF{Ev3nt_vi3wv3r_1s_a_pr3tty_us3ful_t00l_81ba3fe9}
