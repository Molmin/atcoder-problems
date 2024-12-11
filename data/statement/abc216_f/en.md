Score : $500$ points

## Problem Statement

Given are sequences of $N$ integers each: $A = (A_1, \dots, A_N)$ and $B = (B_1, \dots, B_N)$. Find the number of non-empty subsets $S$ of $\{1,2,\ldots,N\}$ that satisfy the following condition:

- $\max_{i \in S} A_i \geq \sum_{i \in S} B_i$.

Since the count can be enormous, print it modulo $998244353$.

## Constraints

- $1 \leq N \leq 5000$
- $1 \leq A_i,B_i \leq 5000$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$
> 
> $B_1$ $B_2$ $\ldots$ $B_N$

## Output

Print the number of subsets $S$ that satisfy the condition in the Problem Statement, modulo $998244353$.

```input1
2
3 1
1 2
```

```output1
2
```

$\{1,2,\ldots,N\}$ has three subsets: $\{1\}$, $\{2\}$, and $\{1,2\}$.

- For $S=\{1\}$, we have $\max_{i \in S} A_i=3$ and $\sum_{i \in S} B_i=1$.
- For $S=\{2\}$, we have $\max_{i \in S} A_i=1$ and $\sum_{i \in S} B_i=2$.
- For $S=\{1,2\}$, we have $\max_{i \in S} A_i=3$ and $\sum_{i \in S} B_i=3$.

Thus, the condition $\max_{i \in S} A_i \geq \sum_{i \in S} B_i$ is satisfied by two subsets: $\{1\}$ and $\{1,2\}$.

```input2
2
1 1
2 2
```

```output2
0
```

There may be no subsets that satisfy the condition.

```input3
20
1937 3980 2689 1208 3640 1979 581 2271 4229 3948 3708 1522 4161 4661 3797 96 3388 3395 2920 2247
4485 2580 174 1156 3770 3396 3558 3500 3494 479 269 3383 1230 1711 3545 3919 134 475 3796 1017
```

```output3
476
```