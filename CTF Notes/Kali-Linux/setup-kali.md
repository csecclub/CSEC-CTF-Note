# Setting up Kali Linux

There are two different ways to setup kali in the VM, 
a simple way, and a more detailed way. It's really up to you!

## Steps to install Kali (simplified)

<strong>Note: This only works for x64 based systems</strong>

* this means M1 and M2 Macs have a different process we aren't sure how well they work
* (Betim): from my experience i haven't seen anyone getting it working sadly.

### 1. Installing Virtual box!

Download the latest version of virtual box here:
* make sure to download the version for your OS
https://www.virtualbox.org/wiki/Downloads 

### 2. Install Kali Linux

Download the latest version of Kali
* Make sure to download the Virtual box version!
https://www.kali.org/get-kali/#kali-virtual-machines 

### 3. Importing Kali to Virtual box

* Click the add button
* navigate to the where you downloaded the VM
* Click on Kali-Linux.vbox file and open it

### 4. Editing Kali's Settings

* Clicking on the cog enables you to adjust different properties
* Click on RAM allows you to allocate more GB of ram, make sure the slider is at most in the green bar, 
  * Recommended to allocate to the middle of the green bar
* Clicking on CPU allows you to allocate more cores to the VM
  * Recommended to allocate 4 cores

### 5. Starting Kali

* Select the Kali VM and click start
* Once Kali has booted and you're at the login screen type:
  * User: kali
  * Pass: kali
* After that you can start working with Kali!


--------------------------------------------------------

## Steps to install Kali (Detailed)

<strong>Note: This only works for x64 based systems</strong>

* this means M1 and M2 Macs have a different process we aren't sure how well they work
* (Betim): from my experience i haven't seen anyone getting it working sadly.

### 1. Installing Virtual box!

Download the latest version of virtual box here:
https://www.virtualbox.org/wiki/Downloads 

### 2. Install Kali Linux

Download the latest version of Kali
* Make sure to download the Virtual box version!
https://www.kali.org/get-kali/#kali-virtual-machines 

### 3. Importing Kali Linux to Virtual box

Procedure
1. Open Virtual box and press the new button
2. Write the name of the virtual machine and select it to Debian Based 64bit linux architecture

### 4. Fine Setting Kali Linux

3. Allot the size of RAM to the VM of Kali (recommended half o  green but just remember to stay in the green)
4. Select "Create a virtual hard disk now" and click create
5. Select the hard disk file type for virtual hard disk and press next (VDI is recommended for dialy purpose)
6. Select "Dynamically allocated" for the type of Physical Hard Dsik storage then press next
7. Select the size of your virtual hard disk (recommended half of remaining disk size. ) and location where you want to save your machine and its files and then click create

