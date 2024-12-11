Score : $800$ points

## Problem Statement

**Problems F and F2 have the same Problem Statement but different Constraints and Time Limits.**

There are $N$ bottles of wine in Takahashi's cellar, arranged in a row from left to right.<br>
The tastiness of the $i$-th bottle from the left is $A_i$.<br>
Aoki will choose $K$ bottles from these $N$ and steal them. However, Takahashi is careful enough to notice the theft if the following condition is satisfied:

- There exist $D$ consecutive bottles such that two or more of them are stolen. ($D = 2$ in this problem.)

For every way of stealing bottles without getting noticed by Takahashi, find the total tastiness of the bottles stolen, and then find the sum of all those values.<br>
Since the sum can be enormous, print it modulo $998244353$.

## Constraints

- $D = 2$
- $2 \le N \le 3 \times 10^5$
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
5 3 2
4 7 5 3 8
```

```output2
17
```

There is no choice but to steal the $1$-st, $3$-rd, and $5$-th bottles.

```input3
12 4 2
107367523 266126484 149762920 57456082 857431610 400422663 768881284 494753774 152155823 740238343 871191740 450057094
```

```output3
136993014
```