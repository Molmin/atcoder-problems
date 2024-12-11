Score : $800$ points

## Problem Statement

**Problems F and F2 have the same Problem Statement but different Constraints and Time Limits.**

There are $N$ bottles of wine in Takahashi's cellar, arranged in a row from left to right.<br>
The tastiness of the $i$-th bottle from the left is $A_i$.<br>
Aoki will choose $K$ bottles from these $N$ and steal them. However, Takahashi is careful enough to notice the theft if the following condition is satisfied:

- There exist $D$ consecutive bottles such that two or more of them are stolen.

For every way of stealing bottles without getting noticed by Takahashi, find the total tastiness of the bottles stolen, and then find the sum of all those values.<br>
Since the sum can be enormous, print it modulo $998244353$.

## Constraints

- $2 \le D \le N \le 10^6$
- $1 \le K \le \left\lceil \frac{N}{D} \right\rceil$ ($\left\lceil x \right\rceil$ represents the smallest integer not less than $x$.)
- $1 \le A_i \lt 998244353$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$ $D$
> 
> $A_1$ $A_2$ $A_3$ $\dots$ $A_N$

## Output

Print the sum modulo $998244353$.

```input1
4 2 2
1 4 2 3
```

```output1
14
```

The possible ways to steal bottles and the total tastiness for each of them are as follows:

- Steal the $1$-st and $3$-rd bottles from the left, for the total tastiness of $1 + 2 = 3$.
- Steal the $1$-st and $4$-th bottles from the left, for the total tastiness of $1 + 3 = 4$.
- Steal the $2$-nd and $4$-th bottles from the left, for the total tastiness of $4 + 3 = 7$.

Thus, the answer is $3 + 4 + 7 = 14$.

```input2
5 2 3
1 5 7 7 3
```

```output2
20
```

The possible ways to steal bottles and the total tastiness for each of them are as follows:

- Steal the $1$-st and $4$-th bottles from the left, for the total tastiness of $1 + 7 = 8$.
- Steal the $1$-st and $5$-th bottles from the left, for the total tastiness of $1 + 3 = 4$.
- Steal the $2$-nd and $5$-th bottles from the left, for the total tastiness of $5 + 3 = 8$.

```input3
18 4 4
107367523 266126484 149762920 57456082 857431610 400422663 768881284 494753774 152155823 740238343 871191740 450057094 208762450 787961742 90197530 77329823 193815114 707323467
```

```output3
228955567
```