# HackUTACTF 2024 writeups

HackUTACTF is a CTF mini competition that CSEC/HackUTA hosted together, CSEC was responsible for all the questions and problems!
This was a short CTF so the writeups are pretty simple, they are meant to guide you, but not give you the answer blatently as in it's not listed here.

* The page is still being hosted currently on : https://hackuta-ctf.pages.dev/
* but will be removed once all questions are moved to the CTF-Playground

## Welcome
In this challenge, you need to find the answer contained in a text file. Download the file from the link below, find the answer, and submit it below.
Flag is found in the text file

## Meowers
In this challenge, you'll need to extract a hidden message (flag) from the image provided below.
Plugged into aperisolve.com and found flag in the zsteg section

## Airplane Friend
My friend is testing my skills again, he's sent me a photo of him on a window seat of a plane. Can you help me find out where he is based on the photo?
Plugged photo into Google Lens and ended up finding a reddit post about a city and it was right
https://www.reddit.com/r/montreal/comments/166bbhi/montreal_from_sky_at_night/

## TrynFindme
theres a contest to find out what's the name of that highlighted building,
Google Lens it and found a reddit thread with a very similar picture
https://www.reddit.com/r/HelpMeFind/comments/1g2jopw/hi_help_me_look_for_what_airplane_model_this_is/
From there I found the the plane and located the building across the street

## Hackercat
This is an odd image, is it hiding something?
Aperisolve in the zsteg section

## Convoluted Text Hunt
A long, convoluted text file hides a valuable flag. Many false flags lie in wait, but only one is real.
Big text file put into cyberchef and use the From Base64 recipe to find flag

## Encrypception
Theres this really really long message, and it looks weird…
Used a combination of CyberChef and https://www.dcode.fr/cipher-identifier to find the flag
Full recipe

## RSAHackUTA
We found these odd numbers scribbled in one of the rooms in the ERB, I found N and E scribbled on sticky notes, can you decode this?
Use dcode.fr rsa decoder or write a script to decode the rsa or chatgpt

## Vulnerable Program
You’ve been given a vulnerable .exe program. Can you figure out how to exploit it and reveal the hidden flag?
Program says you have a 32 buffer so I just held down a for longer than 32 times and flag was printed

