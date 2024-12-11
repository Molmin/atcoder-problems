Score : $300$ points

## Problem Statement

You are given two sequences, each of length $N$, consisting of integers: $A=(A_1, \ldots, A_N)$ and $B=(B_1, \ldots, B_N)$.

Determine whether there is a sequence of length $N$, $X=(X_1, \ldots, X_N)$, satisfying all of the conditions below.

- <p>$X_i = A_i$ or $X_i = B_i$, for every $i(1\leq i\leq N)$.</p>
- <p>$|X_i - X_{i+1}| \leq K$, for every $i(1\leq i\leq N-1)$.</p>

## Constraints

- $1 \leq N \leq 2\times 10^5$
- $0 \leq K \leq 10^9$
- $1 \leq A_i,B_i \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$
> 
> $A_1$ $\ldots$ $A_N$
> 
> $B_1$ $\ldots$ $B_N$

## Output

If there is an $X$ that satisfies all of the conditions, print `Yes`; otherwise, print `No`.

```input1
5 4
9 8 3 7 2
1 6 2 9 5
```

```output1
Yes
```

$X=(9,6,3,7,5)$ satisfies all conditions.

```input2
4 90
1 1 1 100
1 2 3 100
```

```output2
No
```

No $X$ satisfies all conditions. 

```input3
4 1000000000
1 1 1000000000 1000000000
1 1000000000 1 1000000000
```

```output3
Yes
```