Score : $600$ points

## Problem Statement

For a sequence of length $N$, $A = (A_1,A_2,\dots,A_N)$, consisting of integers between $1$ and $N$, inclusive, and an integer $i\ (1\leq i \leq N)$, let us define a sequence of length $10^{100}$, $B_i=(B_{i,1},B_{i,2},\dots,B_{i,10^{100}})$, as follows.

- $B_{i,1}=i$.
- $B_{i,j+1}=A_{B_{i,j}}\ (1\leq j&lt;10^{100})$.

Additionally, let us define $S_i$ as the number of distinct integers that occur exactly once in the sequence $B_i$.
More formally, $S_i$ is the number of values $k$ such that exactly one index $j\ (1\leq j\leq 10^{100})$ satisfies $B_{i,j}=k$.

You are given an integer $N$. There are $N^N$ sequences that can be $A$. Find the sum of $\displaystyle \sum_{i=1}^{N} S_i$ over all of them, modulo $M$.

## Constraints

- $1\leq N \leq 2\times 10^5$
- $10^8\leq M \leq 10^9$
- $N$ and $M$ are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$

## Output

Print the answer as an integer.

```input1
4 100000000
```

```output1
624
```

As an example, let us consider the case $A=(2,3,3,4)$.

- For $i=1$: we have $B_1=(1,2,3,3,3,\dots)$, where two integers, $1$ and $2$, occur exactly once, so $S_1=2$.
- For $i=2$: we have $B_2=(2,3,3,3,\dots)$, where one integer, $2$, occurs exactly once, so $S_2=1$.
- For $i=3$: we have $B_3=(3,3,3,\dots)$, where no integers occur exactly once, so $S_3=0$.
- For $i=4$: we have $B_4=(4,4,4,\dots)$, where no integers occur exactly once, so $S_4=0$.

Thus, we have $\displaystyle \sum_{i=1}^{N} S_i=2+1+0+0=3$.

If we similarly compute $\displaystyle \sum_{i=1}^{N} S_i$ for the other $255$ sequences, the sum of this value over all $256$ sequences is $624$.

```input2
7 1000000000
```

```output2
5817084
```

```input3
2023 998244353
```

```output3
737481389
```

Print the sum modulo $M$.

```input4
100000 353442899
```

```output4
271798911
```