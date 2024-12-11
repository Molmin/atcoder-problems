Score : $400$ points

## Problem Statement

Given are three sequences of $N$ integers each: $A = (A_1, \ldots, A_N),\,B = (B_1, \ldots, B_N),\,C = (C_1, \ldots, C_N)$.

You can permute each of these sequences in any way you like.
Find the maximum possible number of indices $i$ such that $A_i &lt; B_i &lt; C_i$ after permuting them.

## Constraints

- $1\leq N\leq 10^5$
- $1\leq A_i, B_i, C_i\leq 10^9$

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$
> 
> $B_1$ $B_2$ $\ldots$ $B_N$
> 
> $C_1$ $C_2$ $\ldots$ $C_N$

## Output

Print the answer.

```input1
5
9 6 14 1 8
2 10 3 12 11
15 13 5 7 4
```

```output1
3
```

We should permute them as follows:

- $A = (1,6,8,9,14)$,
- $B = (3,2,10,12,11)$,
- $C = (4,7,15,13,5)$.

Then, we will have three indices $i$ ($i = 1, 3, 4$) such that $A_i &lt; B_i &lt; C_i$.

```input2
1
10
20
30
```

```output2
1
```

```input3
3
1 1 1
1 1 2
2 2 2
```

```output3
0
```