# Forensic Tools

## 



## Steganography
- <a href="https://0xrick.github.io/lists/stego/">Great tool list</a>
- <a href="https://daniellerch.me/stego/intro/tools-en/">Another list</a>

- stepic (python lib)
  ```python
  # pip install pillow stepic
  from PIL import Image
  import stepic

  image = Image.open("pic.png")
  msg = stepic.decode(image)
  print(msg)
  ```

- zsteg (Useful for decoding LSB, and other steg methods at once)
  ```bash
  #gem install zsteg
  zsteg pic.png
  #For large files (use desired number)
  RUBY_THREAD_VM_STACK_SIZE=2000000 zsteg pic.png
  ```

- Use digital invisible ink toolkit jar
  <a href="https://diit.sourceforge.net/download.php">DIIT Toolkit Jar Download Link</a><
  ```
  java -jar jiid.jar
  ```
- <a href="https://incoherency.co.uk/image-steganography/">Image Steganalysis by Incoherency</a>
- <a href="https://www.aperisolve.com">Aperi'Solve</a> is an online platform which performs layer analysis on image. 

## Decompiling C
This website allows you to input a C file and decompile to find stored values 
    i.e. (Strings_1 file had a username and password check that you can find out in hex-rays decompiling)
<a href="https://dogbolt.org">DogBolt.org</a>

## Disassembly Linux
Great source to look back to learn tools like ltrace strace and such
<a href="https://www.codementor.io/@packt/reverse-engineering-a-linux-executable-hello-world-rjceryk5d">CodeMentor Article</a>

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

## Get text embedded in a file
```bash
strings <file>
```
