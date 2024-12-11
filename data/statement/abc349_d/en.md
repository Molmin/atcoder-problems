Score: $450$ points

## Problem Statement

For non-negative integers $l$ and $r$ $(l &lt; r)$, let $S(l, r)$ denote the sequence $(l, l+1, \ldots, r-2, r-1)$ formed by arranging integers from $l$ through $r-1$ in order. Furthermore, a sequence is called a good sequence if and only if it can be represented as $S(2^i j, 2^i (j+1))$ using non-negative integers $i$ and $j$.

You are given non-negative integers $L$ and $R$ $(L &lt; R)$. Divide the sequence $S(L, R)$ into the fewest number of good sequences, and print that number of sequences and the division. More formally, find the minimum positive integer $M$ for which there is a sequence of pairs of non-negative integers $(l_1, r_1), (l_2, r_2), \ldots, (l_M, r_M)$ that satisfies the following, and print such $(l_1, r_1), (l_2, r_2), \ldots, (l_M, r_M)$.

- $L = l_1 &lt; r_1 = l_2 &lt; r_2 = \cdots = l_M &lt; r_M = R$
- $S(l_1, r_1), S(l_2, r_2), \ldots, S(l_M, r_M)$ are good sequences.

It can be shown that there is only one division that minimizes $M$.

## Constraints

- $0 \leq L &lt; R \leq 2^{60}$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $L$ $R$

## Output

Print the answer in the following format:

> $M$
> 
> $l_1$ $r_1$
> 
> $\vdots$
> 
> $l_M$ $r_M$

Note that the pairs $(l_1, r_1), \dots, (l_M, r_M)$ should be printed in **ascending order**.

```input1
3 19
```

```output1
5
3 4
4 8
8 16
16 18
18 19
```

$S(3,19)=(3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18)$ can be divided into the following five good sequences, which is the minimum possible number:

- $S(3,4)=S(2^0\cdot 3,2^0\cdot4)=(3)$
- $S(4,8)=S(2^2\cdot 1,2^2\cdot 2)=(4,5,6,7)$
- $S(8,16)=S(2^3\cdot 1,2^3\cdot 2)=(8,9,10,11,12,13,14,15)$
- $S(16,18)=S(2^1\cdot 8,2^1\cdot 9)=(16,17)$
- $S(18,19)=S(2^0\cdot 18,2^0\cdot 19)=(18)$

```input2
0 1024
```

```output2
1
0 1024
```

```input3
3940649673945088 11549545024454656
```

```output3
8
3940649673945088 3940649673949184
3940649673949184 4503599627370496
4503599627370496 9007199254740992
9007199254740992 11258999068426240
11258999068426240 11540474045136896
11540474045136896 11549270138159104
11549270138159104 11549545016066048
11549545016066048 11549545024454656
```