# Log Analysis Tools

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

Will produce ip addresses that have tried to exploit shellshock vulnerability

