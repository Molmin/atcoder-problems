Score : $700$ points

## Problem Statement

Construct a set $S$ of integers satisfying all of the conditions below. It can be proved that at least one such set $S$ exists under the Constraints of this problem.

- $S$ has exactly $N$ elements.
- The element of $S$ are distinct integers between $-10^7$ and $10^7$ (inclusive).
- $\displaystyle \sum _{s \in S} s = M$.
- $y-x\neq z-y$ for every triple $x,y,z$ $(x &lt; y &lt; z)$ of distinct elements in $S$.

## Constraints

- $1 \leq N \leq 10^4$
- $|M| \leq N\times 10^6$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$

## Output

Let $s_1,s_2,\ldots,s_N$ be the elements of $S$. Print a set $S$ that satisfies the conditions in the following format:

> $s_1$ $s_2$ $\ldots$ $s_N$

If multiple solutions exist, any of them will be accepted.

```input1
3 9
```

```output1
1 2 6
```

We have $2-1 \neq 6-2$ and $1+2+6=9$, so this output satisfies the conditions. Many other solutions exist.

```input2
5 -15
```

```output2
-15 -5 0 2 3
```

$M$ may be negative.