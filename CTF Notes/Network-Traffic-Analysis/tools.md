# Network traffic analysis tools

## Nmap
```
Nmap -p (default behavior of nmap, scans the top 1000 common ports)
Nmap -sU (specify UDP port scans)
Nmap -sV (determin software versions
Nmap -Pn (dont know what it does but it works) (TCP ports)
```

## Finding IVs
Use aircrack-ng on a pcap file
```
aircrack-ng filename.pcap
```

## Wireshark
Can use wireshark to analyze dns stuff
* Look at queries and answers

### Wlan.wep.iv
64 bit WEP contains a 40-bit key and a 24-bit initialization vector which forms the final 64-bit RC4-based key for WEP).
https://en.wikipedia.org/wiki/Wired_Equivalent_Privacy#Encryption_details 


