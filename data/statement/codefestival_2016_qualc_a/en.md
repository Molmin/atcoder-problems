Score : $100$ points

## Problem Statement

This contest is `CODEFESTIVAL`, which can be shortened to the string `CF` by deleting some characters.  

Mr. Takahashi, full of curiosity, wondered if he could obtain `CF` from other strings in the same way.  

You are given a string $s$ consisting of uppercase English letters.
Determine whether the string `CF` can be obtained from the string $s$ by deleting some characters.

## Constraints

- $2 \leq |s| \leq 100$
- All characters in $s$ are uppercase English letters (`A`-`Z`).

## Input

The input is given from Standard Input in the following format:

> $s$

## Output

Print `Yes` if the string `CF` can be obtained from the string $s$ by deleting some characters.
Otherwise print `No`.

```input1
CODEFESTIVAL
```

```output1
Yes
```

`CF` is obtained by deleting characters other than the first character `C` and the fifth character `F`.

```input2
FESTIVALCODE
```

```output2
No
```

`FC` can be obtained but `CF` cannot be obtained because you cannot change the order of the characters.

```input3
CF
```

```output3
Yes
```

It is also possible not to delete any characters.

```input4
FCF
```

```output4
Yes
```

`CF` is obtained by deleting the first character.