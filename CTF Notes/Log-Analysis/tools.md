# Log Analysis Tools

## NMAP Port scanning techniques
* -sS (TCP SYN scan) 

https://nmap.org/book/man-port-scanning-techniques.html 

## Parsing logs for ip-addresses in terminal 
<Badge type=info text="This is a NCL CTF" />

How many different IP addresses reached the server?
```
cat access.log | cut -d " " -f 1 | sort | uniq -c | wc -l
```
Request statuses
```
cat access.log | cut -d '"' -f3 | cut -d ' ' -f2 | sort | uniq -c | sort -rn
```

## Grabbing strings with GREP
In command line you can grep through a file to grab strings you want to search for
I.e. 
```
grep -i ring access.log
```
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

```
cat squid_access.log | awk '{print $2}' | sort -n 
```
Shows miliseconds between all requests

```
cat squid_access.log | awk '{print $3}' | sort | uniq
```
Shows unique ip addresses


## Shellshock vulnerability 
How to detect it in a file like access.log
```
grep '() {' access.log | awk '{print $1}' | sort | uniq
```
* Will produce ip addresses that have tried to exploit shellshock vulnerability

## Dirbuster
(to be honest idk what this one is about but ill do more research)
Paste link
Use this directory
```
directory-list-2.3-medium.txt wordlist
```

## Epoch time converter
Used to find the exact time in a log file
<a href="https://www.epochconverter.com/">Online ETC</a>

To find it for in example a squid log file, you cat it, then take the numbers at the beginning of the request before the ip address

I.e. **1286536308.779**	180 192.168.0.224 TCP_MISS/200 411 GET http://liveupdate.symantecliveupdate.com/minitri.flg - DIRECT/125.23.216.203 text/plain (bold is epoch)
