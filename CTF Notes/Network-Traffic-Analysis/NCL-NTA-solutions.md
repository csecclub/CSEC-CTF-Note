## DNS Easy

Cyber Command

DNS is what enables us to access much of the internet without remembering IP addresses, analyze the network packet capture to understand more about DNS.

You can read this guide to learn more about computer networking https://trove.cyberskyline.com/computer-fundamentals-for-cybersecurity/networking 


What is the type of the DNS query requested?
* ANS: AXFR
> to get this use wireshark, look inside of the 1st dns request and click queries tab, and check type

What domain was requested?

ANS: etas.com 
> to get this where we found the type is also where we can find the name of the domain

How many Items were in the response?

ANS: 4
> We can find out how many items were in the response by clicking the next dns which is the response to the first, By looking in it we can see an answers tab that show Request in: 4 

What is the TTL for all of the DNS records? 
<Badge type="info" text="note that this is the TTL for the DNS record, not the IP packet" />

ANS: 1 hour or 3600 seconds
> To find out what TTL is, it stands for Time to Live. we can find it near where we found the request in tab was, by clicking one of the 4 response items, we can see the TTL being 1hr or 3600 seconds

What is the IP address for the "welcome" subdomain?

Ans: 1.1.1.1
> We can find this by specifically clicking the welcome.etas.com subdomain and see that its address is 1.1.1.1

## FTP Traffic Easy
Cyber Command
We found some interesting FTP traffic, analyze the network packet capture to identify what was transferred.

Q1 - 10 points

What was the first username:password combination attempt made to log in to the server? (e.g. user:password)

ANS: user1:cyberskyline

> this can be found by reading some of the info of the ftp's first requests, it requests a USER and PASS Paremeter the person trying to get in inputs user1:cyberskyline
	
Q2 - 10 points

What software is the FTP server running? (Include name and version)

ANS: 220-FileZilla Server 0.9.53 beta
> this is found in the 8th line where the servers response was the name and version
	
Q3 - 10 points

What is the first username:password combination that allows for successful authentication? (e.g. user:password)

ANS: user1:metropolis
> found by looking at lines 10 and 12	

Q4 - 10 points

What is the first command the user executes on the ftp server?

ANS: LIST
> found on line 15

Q5 - 15 points

What file is deleted from the ftp server?

ANS: Bank.cap
> found on line 19 uses the DELE command
	
Q6 - 15 points

What file is uploaded to the ftp server?

ANS: compcodes.zip
> found on line 23 uses the STOR command
	
Q7 - 15 points

What is the filesize (in bytes) of the uploaded file?

ANS: 28,183 bytes
> Found by looking at lines 25-44 seeing how many bytes of data each are transfered

	
Q8 - 15 points

What file does the anonymous user download?

ANS: compcode.zip
> found by analyzing the last few packets to see what this anonomyse user is doing,
later on we can see a successful RETR command for compcodes.zip (RETR == return)

## HTTP
Cyber Command

HTTP is how we're sending you this message, analyze the provided capture to answer the following questions about a HTTP download.

Q1 - 20 points

What Linux tool was used to execute a file download?

ANS: wget
> viewing the first HTTP packet we can see the how the user got the file to download, the user-age shows it being done by wget
	
Q2 - 20 points

What is the name of the web server software that handled the request?

ANS: nginx
> viewing the second HTTP packet we can see a tab inside of the packet that says Server: nginx
	
Q3 - 20 points

What IP address initiated request?

ANS: 192.168.1.140
> for this we can go back to the first HTTP packet and just view the source IP address
	
Q4 - 20 points

What is the IP address of the server?

ANS: 174.143.213.184
> Similar to the last we just look at the destination
	
Q5 - 20 points

What is the md5sum of the file downloaded?

ANS: 966007c476e0c200fba8b28b250a6379
> The way you find out this MD5SUM is by clicking file->export object->HTTP and then saving the png on your device,
then by navigating to that png, you would run md5sum logo.png and it would calculate it for you

## Telenet
Cyber Command

Telnet is an older protocol that allowed an interactive text-oriented communication with remote systems, use the provided capture to answer the following questions about telnet.


Q1 - 10 points

What is the username that was used to log in?

ANS: test
> this is found by analyzing lines 17-30 you can see that both the user and server are communicating, and telenet repeats everything the user inputs
	
Q2 - 10 points

What is the password that was used to log in?

ANS: capture
> same as user just look as they input their pass
	
Q3 - 20 points

What command was executed once the user was authenticated?

ANS: uname -a
> like the last one you just follow what the user inputs into the system
	
Q4 - 20 points

In what year was this capture created?

ANS: 2011
> You can see this by the response of the server to the command:
> ```uname -a Linux cm4116 2.6.30.2-uc0 #3 Tue Feb 22 00:57:18 EST 2011 armv4tl ```
	
Q5 - 20 points

What is the hostname of the machine that was logged in to?

ANS: cm4116
> see last response
	
Q6 - 20 points

What CPU architecture does the remote machine use?

ANS: armv4tl
> see last response