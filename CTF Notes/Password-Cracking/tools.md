# Password cracking tools

## Hashcat
Hashcat is a password "recovery tool" but is CSEC we use it more for brute forcing. It's open source and can be used to perform various types of attacks 

<Badge type="info" text="For more info on hashcat click here the wiki!" /> 
<a href="https://hashcat.net/wiki/#specific_attacks">Hashcat Wiki</a> 

A simple and common way to use hashcat is by running this command which checks the rockyou.txt wordlist thats already inside kali linux:

<Badge type="info" text="Btw you might have to use gzip to decompress rockyou.txt (gzip -d rockyou.txt.gz)!" />

```
hashcat hash.txt -m 0 -a 0 /usr/share/wordlists/rockyou.txt 
```
running --show with same command after will show results
```
hashcat hash.txt --show -m 0 -a 0 /usr/share/wordlists/rockyou.txt 
```

* The -m 0 option indicates a MD5 hash type and the -a 0 option indicates a dictionary attack. 
* dictionary attacks are when you use a list of words (in this case, rockyou) to try and guess the password. 

Sometimes the password you're trying to crack you might know most of it

* These passwords can be cracked using hashcat with a **mask** of SKY-HQNT-?d?d?d?d
```
hashcat -m 0 -a 3 ./hash.txt 'SKY-HQNT-?d?d?d?d' 
```

* The ‘SKY-HQNT-’ is a mask the part we know thats in there
* The ‘?d?d?d?d’ is the unknown amount of **ints** after the characters know
* -a 3 option indicates a **brute-force/mask attack.**

The ?d in the hash indicates the hashcat should attempt passwords with a different digit in the place of each ?d.
* This would mean that hashcat will attempt all possible passwords from SKY-HQNT-0000 to SKY-HQNT-9999. 

## Creating wordlists

This command assumes that you have the hashes stored in a file called hash.txt, for example we can store lists of episodes was saved into a file called svu.txt. 
* The -m 0 option indicates a MD5 hash type and the 
* -a 6 option indicates a hybrid attack. 
* The ?d?d in the hash indicates the hashcat should attempt passwords with a different digit in the place of each ?d. 
* This would mean that hashcat will attempt add two digits to the end of each password.
  
Running this command changes all characters from uppercase to lowercase
```
└─$ tr '[:upper:]' '[:lower:]' < svu.txt > slower.txt
```

## Ophcrack

Ophcrack is a windows password cracking tool & is installed on kali linux already, so if you have the vm you can use it.

* but it doesnt come preloaded with tables so you will have to download some here:
* https://ophcrack.sourceforge.io/tables.php 
* I personally recommend you just get the free fast cause in most cases in CTFs it will be windows xp password


