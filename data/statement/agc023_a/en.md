Score : $200$ points

## Problem Statement

We have an integer sequence $A$, whose length is $N$.

Find the number of the non-empty **contiguous** subsequences of $A$ whose sums are $0$.
Note that we are counting **the ways to take out subsequences**.
That is, even if the contents of some two subsequences are the same, they are counted individually if they are taken from different positions.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $-10^9 \leq A_i \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $...$ $A_N$

## Output

Find the number of the non-empty contiguous subsequences of $A$ whose sum is $0$.

```input1
6
1 3 -4 2 2 -2
```

```output1
3
```

There are three contiguous subsequences whose sums are $0$: $(1,3,-4)$, $(-4,2,2)$ and $(2,-2)$.

```input2
7
1 -1 1 -1 1 -1 1
```

```output2
12
```

In this case, some subsequences that have the same contents but are taken from different positions are counted individually.
For example, three occurrences of $(1, -1)$ are counted.

```input3
5
1 -2 3 -4 5
```

```output3
0
```

There are no contiguous subsequences whose sums are $0$.