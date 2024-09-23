# Rail Fence Ciphers

Given a plain-text message and a numeric key, cipher/de-cipher the given text using Rail Fence algorithm. 
The rail fence cipher (also called a zigzag cipher) is a form of transposition cipher.

```
Encryption
Input :  "UTACSEC"
Key = 3
Output : USTCEAC
Decryption
Input : USTCEAC
Key = 3
Output :  "UTACSEC"

Encryption
Input :  "i love the csec club"
Key = 3
Output : ivhsc oetece lbl  cu
Decryption
Input : ivhsc oetece lbl  cu
Key = 3
Output : i love the csec club

```

## Encryption

* In a transposition cipher, the order of the alphabets is re-arranged to obtain the cipher-text. 

In the rail fence cipher, the plain-text is written downwards and diagonally on successive rails of an imaginary fence.
When we reach the bottom rail, we traverse upwards moving diagonally, after reaching the top rail, the direction is changed again. Thus the alphabets of the message are written in a zig-zag manner.

* After each alphabet has been written, the individual rows are combined to obtain the cipher-text.

Heres a visual

| U |   |   |   | S |   |   |
|---|---|--:|---|---|---|---|
|   | T |   | C |   | E |   |
|   |   | A |   |   |   | C |

> UTACSEC -> USTCEAC

## Decryption

As we’ve seen earlier, the number of columns in rail fence cipher remains equal to the length of plain-text message. And the key corresponds to the number of rails.
 

Hence, rail matrix can be constructed accordingly. Once we’ve got the matrix we can figure-out the spots where texts should be placed (using the same way of moving diagonally up and down alternatively ).
Then, we fill the cipher-text row wise. After filling it, we traverse the matrix in zig-zag manner to obtain the original text.


### Sources
(ngl since this is supposed to hold info i just took the really important parts from them :3)
- https://www.geeksforgeeks.org/rail-fence-cipher-encryption-decryption/ 