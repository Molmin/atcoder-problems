Score : $300$ points

## Problem Statement

Takahashi has come to an integer shop to buy an integer.

The shop sells the integers from $1$ through $10^9$. The integer $N$ is sold for $A \times N + B \times d(N)$ yen (the currency of Japan), where $d(N)$ is the number of digits in the decimal notation of $N$.

Find the largest integer that Takahashi can buy when he has $X$ yen. If no integer can be bought, print $0$.

## Constraints

- All values in input are integers.
- $1 \leq A \leq 10^9$
- $1 \leq B \leq 10^9$
- $1 \leq X \leq 10^{18}$

## Input

Input is given from Standard Input in the following format:

> $A$ $B$ $X$

## Output

Print the greatest integer that Takahashi can buy. If no integer can be bought, print $0$.

```input1
10 7 100
```

```output1
9
```

The integer $9$ is sold for $10 \times 9 + 7 \times 1 = 97$ yen, and this is the greatest integer that can be bought.
Some of the other integers are sold for the following prices:

- $10: 10 \times 10 + 7 \times 2 = 114$ yen
- $100: 10 \times 100 + 7 \times 3 = 1021$ yen
- $12345: 10 \times 12345 + 7 \times 5 = 123485$ yen

```input2
2 1 100000000000
```

```output2
1000000000
```

He can buy the largest integer that is sold. Note that input may not fit into a $32$-bit integer type.

```input3
1000000000 1000000000 100
```

```output3
0
```

```input4
1234 56789 314159265
```

```output4
254309
```