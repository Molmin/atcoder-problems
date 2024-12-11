Score : $600$ points

## Problem Statement

Given are length-$N$ strings $S$ and $T$ consisting of `0` and `1`.
You can do the following operation on $S$ any number of times:

- Choose $i$ ($2 \leq i \leq N$) such that $S_i=$`1`, and replace $S_i$ with `0`.
Additionally, invert $S_{i-1}$, that is, change it to `1` if it is `0` now and vice versa.

Is it possible to make $S$ exactly match $T$?
If it is possible, how many operations does it take at least?

## Constraints

- $1 \leq N \leq 5 \times 10^5$
- $S$ is a string of length $N$ consisting of `0` and `1`.
- $T$ is a string of length $N$ consisting of `0` and `1`.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $S$
> 
> $T$

## Output

If it is possible to make $S$ exactly match $T$, print the minimum number of operations it takes.
Otherwise, print $-1$.

```input1
3
001
100
```

```output1
2
```

We can do as follows: `001` → (choose $i=3$) → `010` → (choose $i=2$) → `100`.

```input2
3
001
110
```

```output2
-1
```

```input3
5
10111
01010
```

```output3
5
```