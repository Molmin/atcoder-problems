Score : $700$ points

## Problem Statement

Snuke loves constructing integer sequences.

There are $N$ piles of stones, numbered $1$ through $N$.
The pile numbered $i$ consists of $a_i$ stones.

Snuke will construct an integer sequence $s$ of length $\sum a_i$, as follows:

1. Among the piles with the largest number of stones remaining, let $x$ be the index of the pile with the smallest index. Append $x$ to the end of $s$.
2. Select a pile with one or more stones remaining, and remove a stone from that pile.
3. If there is a pile with one or more stones remaining, go back to step 1. Otherwise, terminate the process.

We are interested in the lexicographically smallest sequence that can be constructed. For each of the integers $1,2,3,...,N$, how many times does it occur in the lexicographically smallest sequence?

## Constraints

- $1 \leq N \leq 10^{5}$
- $1 \leq a_i \leq 10^{9}$

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $a_1$ $a_2$ $...$ $a_{N}$

## Output

Print $N$ lines. The $i$-th line should contain the number of the occurrences of the integer $i$ in the lexicographically smallest sequence that can be constructed.

```input1
2
1 2
```

```output1
2
1
```

The lexicographically smallest sequence is constructed as follows:

- Since the pile with the largest number of stones remaining is pile $2$, append $2$ to the end of $s$. Then, remove a stone from pile $2$.
- Since the piles with the largest number of stones remaining are pile $1$ and $2$, append $1$ to the end of $s$ (we take the smallest index). Then, remove a stone from pile $2$.
- Since the pile with the largest number of stones remaining is pile $1$, append $1$ to the end of $s$. Then, remove a stone from pile $1$.

The resulting sequence is $(2,1,1)$. In this sequence, $1$ occurs twice, and $2$ occurs once.

```input2
10
1 2 1 3 2 4 2 5 8 1
```

```output2
10
7
0
4
0
3
0
2
3
0
```