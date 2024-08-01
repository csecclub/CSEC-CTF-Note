# Forensic Tools

## Aperi'Solve 
* is an online platform which performs layer analysis on image. 

<a href="https://www.aperisolve.com">Aperi'Solve</a>

## Steganography
Use digital invisible ink toolkit jar
<a href="https://diit.sourceforge.net/download.php">DIIT Toolkit Jar Download Link</a><
```
java -jar jiid.jar
```

## Decompiling C
This website allows you to input a C file and decompile to find stored values 
    i.e. (Strings_1 file had a username and password check that you can find out in hex-rays decompiling)
<a href="https://dogbolt.org">DogBolt.org</a>

## Disassembly Linux
Great source to look back to learn tools like ltrace strace and such
<a href="https://www.codementor.io/@packt/reverse-engineering-a-linux-executable-hello-world-rjceryk5d">CodeMentor Article</a>


## Hidden flags behind images
* You can view hidden information behind images!

<a href="https://incoherency.co.uk/image-steganography/">Image Steganalysis by Incoherency</a>

## JAB Code (enhanced qr code with color)
<a href="https://jabcode.org">JABCode Website</a>

## Xxd
Dumps hex from a file
xxd file.xxx
Xxd -x file.xxx

## OBJDUMP
running object dump can give you the assembly of a file 
<Badge  type="warn" text="ASM is hard to read!"/>

```
objdump -Dj .text
```
Text obj dumb

## Binwalk

basically a tool that can tell you more about files (works well with .img files)

```
Binwalk -h 
```