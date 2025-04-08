# Flags are Stepic

## Description

A group of underground hackers might be using this legit site to communicate. Use your forensic techniques to uncover their message
Additional details will be available after launching your challenge instance.

* Hint: In the country that doesn't exist, the flag persists

## Answer

Uppon analysis of the site, we identified upanzi as a fake country by flag analysis. 

We tried running aperi solve, but didn't get much out of it.

we then tried looking up the word stepic in the man page and found out its a python tool.


the command i used to solve it was:
```┌──(kali㉿kali)-[~/Desktop]
└─$ stepic -d -i upz.png
/usr/lib/python3/dist-packages/PIL/Image.py:3368: DecompressionBombWarning: Image size (150658990 pixels) exceeds limit of 89478485 pixels, could be decompression bomb DOS attack.
  warnings.warn(
picoCTF{fl4g_h45_fl4g6f5548ea}```

That's how you solve it!
