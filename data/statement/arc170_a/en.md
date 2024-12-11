Score: $400$ points

## Problem Statement

You are given two strings $S$ and $T$ of length $N$ consisting of `A` and `B`. Let $S_i$ denote the $i$-th character from the left of $S$.

You can repeat the following operation any number of times, possibly zero:

- Choose integers $i$ and $j$ such that $1\leq i &lt; j \leq N$. Replace $S_i$ with `A` and $S_j$ with `B`.

Determine if it is possible to make $S$ equal $T$. If it is possible, find the minimum number of operations required.

## Constraints

- $2 \leq N \leq 2 \times 10^5$
- Each of $S$ and $T$ is a string of length $N$ consisting of `A` and `B`.
- All input numbers are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $S$
> 
> $T$

## Output

If it is impossible to make $S$ equal $T$, print `-1`.

Otherwise, print the minimum number of operations required to do so.

```input1
5
BAABA
AABAB
```

```output1
2
```

Performing the operation with $i=1$ and $j=3$ changes $S$ to `AABBA`.

Performing the operation with $i=4$ and $j=5$ changes $S$ to `AABAB`.

Thus, you can make $S$ equal $T$ with two operations. It can be proved that this is the minimum number of operations required, so the answer is $2$.

```input2
2
AB
BA
```

```output2
-1
```

It can be proved that no matter how many operations you perform, you cannot make $S$ equal $T$.