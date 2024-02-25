# CSEC-CTF-REP

https://play.picoctf.org/practice?category=5&page=1 

https://cyberskyline.com/competition/dashboard 


## Linux Terminal commands

https://www.kali.org/docs/wsl/win-kex/ (win kex 
```
this is for running kali subsystem in windows (brings up an actual frontend you can see pretty cool)
kex --esm --ip -s
kex --win -s 
```
## CyberChef 
great tool to use on basic stuff like base conversions
https://gchq.github.io/CyberChef 

## File
```
file file.xxx
```
## xxd
Dumps hex from a file
```
xxd file.xxx
Xxd -x file.xxx
```

## OBJDUMP
```
objdump -Dj .text
```
Text obj dump

## Rot13
https://cryptii.com/pipes/rot13-decoder 
https://www.dcode.fr/rot-cipher (more rotates)

## Barcode scanner
https://www.onlinebarcodereader.com 

## Stegs
https://diit.sourceforge.net/download.php
Use digital invisible ink toolkit jar
```
To run java -jar jiid.jar
```

## Hidden flags behind images
https://incoherency.co.uk/image-steganography/ 

## Md5 sum
```
md5sum file.xxx
```
https://www.md5hashgenerator.com (md5hash gen)
https://tools.keycdn.com/sha256-online-generator (sha256 gen)
## Hyroglyphs
https://discoveringegypt.com/hieroglyphic-typewriter/

## Forensics
photo forensics
https://29a.ch/photo-forensics/#forensic-magnifier

Another great amazing tool
https://www.aperisolve.com/96a7f666c0bf82891135e98c8c2e5bea


# Password cracking
## Hashcat
```
hashcat hash.txt -m 0 -a 0 /usr/share/wordlists/rockyou.txt 
```
(might have to use gzip to decompress rockyou.txt) (gzip -d rockyou.txt.gz)

--show (with same command after will show results)

The -m 0 option indicates a MD5 hash type and the -a 0 option indicates a dictionary attack. 
## Masks
These passwords can be cracked using hashcat with a mask of SKY-HQNT-?d?d?d?d
hashcat -m 0 -a 3 ./hash.txt 'SKY-HQNT-?d?d?d?d' 

The ‘SKY-HQNT-’ is a mask the part we know thats in there
The ‘?d?d?d?d’ is the unknown amount of ints after the characters know
-a 3 option indicates a brute-force/mask attack. 
The ?d in the hash indicates the hashcat should attempt passwords with a different digit in the place of each ?d.
 This would mean that hashcat will attempt all possible passwords from SKY-HQNT-0000 to SKY-HQNT-9999. 

## Creating wordlists

This command assumes that you have the hashes stored in a file called hash.txt and that the list of episodes was saved into a file called svu.txt. The -m 0 option indicates a MD5 hash type and the -a 6 option indicates a hybrid attack. The ?d?d in the hash indicates the hashcat should attempt passwords with a different digit in the place of each ?d. This would mean that hashcat will attempt add two digits to the end of each password.
└─$ tr '[:upper:]' '[:lower:]' < svu.txt > slower.txt

Changes all text from uppercase to lowercase


## Decompiling C
https://dogbolt.org 
Can input a C file and decompile to find stored values i.e. (Strings_1 file had a username and password check that you can find out in hex-rays decompiling)

## Cipher detector
https://www.boxentriq.com/code-breaking/cipher-identifier 

## RSA decoder
https://www.dcode.fr/rsa-cipher 


## Logs
Parsing logs for ip-addresses in terminal

How many different IP addresses reached the server?

```
cat access.log | cut -d " " -f 1 | sort | uniq -c | wc -l
```

### Request statuses
```
cat access.log | cut -d '"' -f3 | cut -d ' ' -f2 | sort | uniq -c | sort -rn
```

Grabbing strings with GREP
In command line you can grep through a file to grab strings you want to search for
I.e. grep -i ring access.log
-i == dont care abt casesensitivity

## AWK
```
awk -F" " '{print $6}' access.log | sort | uniq -c

 awk -F" " '{print $6}' access.log | sort | uniq -c
      6 ""
     15 "CONNECT
     60 "GET
      1 "HEAD
      1 "POST
      1 "quit"
      4 "\x00"
      1 "\x04\x01\x00P\xC0c\xF660\x00"
      6 "\x04\x01\x00P\xC6\xCE\x0Eu0\x00"
      4 "\x05\x01\x00"
```

Parsed through the ngix log and gave us how many times each http method ran


cat squid_access.log | awk '{print $2}' | sort -n 
Shows miliseconds between all requests

cat squid_access.log | awk '{print $3}' | sort | uniq
Shows unique ip addresses


Shellshock vulnerability 
How to detect it in a file like access.log
grep '() {' access.log | awk '{print $1}' | sort | uniq

Will produce ip addresses that have tried to exploit shellshock vulnerability



## Disassembly Linux
https://www.codementor.io/@packt/reverse-engineering-a-linux-executable-hello-world-rjceryk5d 
 Great source to look back to learn tools like ltrace strace and such

https://dogbolt.org 
 Still best to decompiler


## SQL database
When it comes to search history look through place the user looked up. Usually if they signin somewhere they will have a twofactor authentication and it will show their email

Epoch time converter
https://www.epochconverter.com/
Used to find the exact time in a log file
To find it for in example a squid log file, you cat it, then take the numbers at the beginning of the request before the ip address
I.e. 1286536308.779	180 192.168.0.224 TCP_MISS/200 411 GET http://liveupdate.symantecliveupdate.com/minitri.flg - DIRECT/125.23.216.203 text/plain (bold is epoch)

Network traffic analysis
Can use wireshark to analyze dns stuff
Look at queries and answers


## Nmap
Nmap -p (default behavior of nmap, scans the top 1000 common ports)
Nmap -sU (specify UDP port scans)
Nmap -sV (determin software versions
Nmap -Pn (dont know what it does but it works) (TCP ports)

## Dirbuster
Paste link
Use this directory
directory-list-2.3-medium.txt wordlist


## Geocaching using 3 w0rds
https://www.geocachingtoolbox.com/index.php?lang=en&page=w3w 

## Metadata
https://www.metadata2go.com/view-metadata 

## Osint Framework
https://osintframework.com 

## JAB Code (enhanced qr code with color)
https://jabcode.org 


## Finding IVs
Use aircrack-ng on a pcap file
Wireshark
Wlan.wep.iv
64 bit WEP contains a 40-bit key and a 24-bit initialization vector which forms the final 64-bit RC4-based key for WEP).
https://en.wikipedia.org/wiki/Wired_Equivalent_Privacy#Encryption_details 

