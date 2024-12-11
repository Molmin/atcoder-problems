Score : $100$ points

## Problem Statement

Find the $X$-th character from the beginning of the string that is obtained by concatenating these characters: $N$ copies of `A`'s, $N$ copies of `B`'s, …, and $N$ copies of `Z`'s, in this order.

## Constraints

- $1 \leq N \leq 100$
- $1 \leq X \leq N\times 26$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $X$

## Output

Print the answer.

```input1
1 3
```

```output1
C
```

We obtain the string `ABCDEFGHIJKLMNOPQRSTUVWXYZ`, whose $3$-rd character from the beginning is `C`.

```input2
2 12
```

```output2
F
```

We obtain the string `AABBCCDDEEFFGGHHIIJJKKLLMMNNOOPPQQRRSSTTUUVVWWXXYYZZ`, whose $12$-th character from the beginning is `F`.