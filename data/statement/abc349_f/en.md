Score: $525$ points

## Problem Statement

You are given a sequence of positive integers $A=(A_1,A_2,\dots,A_N)$ of length $N$ and a positive integer $M$. Find the number, modulo $998244353$, of non-empty and not necessarily contiguous subsequences of $A$ such that the least common multiple (LCM) of the elements in the subsequence is $M$. Two subsequences are distinguished if they are taken from different positions in the sequence, even if they coincide as sequences. Also, the LCM of a sequence with a single element is that element itself.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq M \leq 10^{16}$
- $1 \leq A_i \leq 10^{16}$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## Output

Print the answer.

```input1
4 6
2 3 4 6
```

```output1
5
```

The subsequences of $A$ whose elements have an LCM of $6$ are $(2,3),(2,3,6),(2,6),(3,6),(6)$; there are five of them.

```input2
5 349
1 1 1 1 349
```

```output2
16
```

Note that even if some subsequences coincide as sequences, they are distinguished if they are taken from different positions.

```input3
16 720720
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16
```

```output3
2688
```