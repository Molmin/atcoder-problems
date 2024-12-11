Score : $400$ points

## Problem Statement

You are given positive integers $N$ and $M$.<br>
Find the smallest positive integer $X$ that satisfies both of the conditions below, or print $-1$ if there is no such integer.

- $X$ can be represented as the product of two integers $a$ and $b$ between $1$ and $N$, inclusive. Here, $a$ and $b$ may be the same.
- $X$ is at least $M$.

## Constraints

- $1\leq N\leq 10^{12}$
- $1\leq M\leq 10^{12}$
- $N$ and $M$ are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$

## Output

Print the smallest positive integer $X$ that satisfies both of the conditions, or $-1$ if there is no such integer.

```input1
5 7
```

```output1
8
```

First, $7$ cannot be represented as the product of two integers between $1$ and $5$.<br>
Second, $8$ can be represented as the product of two integers between $1$ and $5$, such as $8=2\times 4$.

Thus, you should print $8$.

```input2
2 5
```

```output2
-1
```

Since $1\times 1=1$, $1\times 2=2$, $2\times 1=2$, and $2\times 2=4$, only $1$, $2$, and $4$ can be represented as the product of two integers between $1$ and $2$,
so no number greater than or equal to $5$ can be represented as the product of two such integers.<br>
Thus, you should print $-1$.

```input3
100000 10000000000
```

```output3
10000000000
```

For $a=b=100000$ $(=10^5)$, the product of $a$ and $b$ is $10000000000$ $(=10^{10})$, which is the answer.<br>
Note that the answer may not fit into a $32$-bit integer type.