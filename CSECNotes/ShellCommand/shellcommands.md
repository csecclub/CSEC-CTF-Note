# Shell commands

## ls

(lists contents of directory)

some flags

```
-la or -latrh
```
you can also pass in file paths like 

```
ls Documents/
```

You can also combine both

## cd

Allows you to change directorys

e.g.
``` 
cd Documents
```

## pwd

prints working directory


## echo

Lets you print some text

## touch

lets you create a file or update its modified date

## cp

copy file or directory to target destination

```
cp <target> <destination>
```

## mv

like copy, but it moves files to new destinations

```
mv <target> <destination>
```

## rm

Deletes files

```
rm hello.txt
```

to delete directorys with items inside
(this is a safe delete)
```
rm -r hello
rm -rf hello (force delete recursivly)
```

## ln

Creates symlink to a file in a another location

with -s == symlink, w/out hard link

```
ln -s hello.txt symlink.txt
lrwxrwxrwx  1 baytizzel baytizzel    9 May  3 09:26 symlink.txt -> hello.txt
```

essentially doing this, both files will update with each other

## less

View text content in a scrollable fassion
- allows you to also search as well

## more

Less than less, allows you to only go forware

## man

The manual, good resource to learn tools

```
man <command>
```

## tldr

Another great tool like man

too long didnt read

## grep

Pattern matches against text content

```
grep 'string' <file>
```

## find 

finds file in directorys

since syntax might be weird a better command is

## fd

easier to use find

```
fd <file>
```

## sed

stream editor, used to find and replace text

(not sure on this one too much)

## awk

tool to extract data from specific text.
- I tend to use it for log analysis
- Its actually a programming language??

## sort

Sorts text contents (defaults to alphabetic)

```
sort (Alphabetic)
sort -n (numeric)
sort -R (random)
```

## head

Lets you see first few lines of a file

```
head hello.txt
```
can pass in the number of lines w/ -n

## tail

lets you see last few lines of a file

```
tail hello.txt

tail -f log (follows as new lines are appended to file)
```

## Piping |

Take output from one command, and pass it into the next command.

e.g.

```
echo 'Hello, World!' | sed 's/word/universe/'
Hello, universe!
```

## xargs

Takes content of what you pipe into it, and split it to different chunks

```
ls | grep 'l' | xargs du -sh
124M lean-mean-svelte-machine
140K log
```

I don't know how this works, and it doesn't work well on my machine sadge

## Subshell

You can essentiall run commands like this and use the shell again

```
echo "My current directory is: $(pwd)"
My current directory is: /home/baytizzel/Documents
```

if you've ever done bash scripting this seems straightforward

## Redirection >

allows you to write stdout to a file
- note, will overwrite existing files as well

e.g.
```
ls --help > ls-help.txt
```

with two >> you will append the file, if it exists, if not it creates it
```
echo 'hello' >> hello.txt
```

### Redirection <

Pass file contents into stdin

```
tr 'a-z' 'A-Z' < template.yaml
- NAME: Baytizzel 
  EMAIL: notmyemail@proton.me
  URL: http://unsecure.com
```

## fzf 

fuzzy finder, allows you to search for files

## compgen

command to find more commands

```
compgen -c 

or

compgen -c | less
```

## Cool combinations

Fuzzy Find any command within your system and pull up its manual
###Fman
```
compgen -c | fzf | xargs man

compgen -c | fzf | xargs tldr
```

### Alias

Essentially a way to save cool commands
- Anytime i want to do this, I go to my .bashrc or .zrshc file and add it there

### FindBigFiles
Find biggest file and directorys in that path (to clean up)

```
du -ah . | sort -hr | head -n 10
```

### deleteNodeProj
find and delete Big files due to node projects

```
find . -name 'node_modules' -type d |
	xargs du -sh |
	sort -hr |
	fzf -m --header "Select whcih ones to delete" --preview 'cat $(dirname {})/package.json' |
	awk '{print $2}' |
	xargs -r rm -rf
```

## history 

previous command runs

## Jobs and running command



## Useful shell hotkeys

```
ctrl+C -> kills active process
ctrl+d -> quit shell
ctrl+l -> clear screen
ctrl+z -> put process in bg (use fg to bring to foreground)
ctrl+a -> go to front of line
ctrl+e -> go to end of line
ctrl+f -> go forward one char
ctrl+b -> go backward one char
alt+f  -> go forward one word
alt+b  -> go backward one word
ctrl+u -> delete everything before cursor
ctrl+k -> delete everything after cursor
!!     -> run previous command
!      -> used w/ command to get most recent command !<command> 
ctrl+x -> open line in $EDITOR
ctrl+e \/
```

## tips to remember

1. Use the man pages (or tldr) for commands
2. Use pipelines and subshells to make life easier
3. Use aliases and scripts to save your work
4. Use fzf


