Score : $300$ points

## Problem Statement

Given any integer $x$, Aoki can do the operation below.

Operation: Replace $x$ with the absolute difference of $x$ and $K$.

You are given the initial value of an integer $N$. Find the minimum possible value taken by $N$ after Aoki does the operation zero or more times.

## Constraints

- $0 \leq N \leq 10^{18}$
- $1 \leq K \leq 10^{18}$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$

## Output

Print the minimum possible value taken by $N$ after Aoki does the operation zero or more times.

```input1
7 4
```

```output1
1
```

Initially, $N=7$.

After one operation, $N$ becomes $|7-4| = 3$.

After two operations, $N$ becomes $|3-4| = 1$, which is the minimum value taken by $N$.

```input2
2 6
```

```output2
2
```

$N=2$ after zero operations is the minimum.

```input3
1000000000000000000 1
```

```output3
0
```