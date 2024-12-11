Score : $500$ points

## Problem Statement

Given are $N$ integers $A_1,\ldots,A_N$.

We will choose exactly $K$ of these elements. Find the maximum possible product of the chosen elements.

Then, print the maximum product modulo $(10^9+7)$, using an integer between $0$ and $10^9+6$ (inclusive).

## Constraints

- $1 \leq K \leq N \leq 2\times 10^5$
- $|A_i| \leq 10^9$

## Input

Input is given from Standard Input in the following format:

> $N$ $K$
> 
> $A_1$ $\ldots$ $A_N$

## Output

Print the maximum product modulo $(10^9+7)$, using an integer between $0$ and $10^9+6$ (inclusive).

```input1
4 2
1 2 -3 -4
```

```output1
12
```

The possible products of the two chosen elements are $2$, $-3$, $-4$, $-6$, $-8$, and $12$, so the maximum product is $12$.

```input2
4 3
-1 -2 -3 -4
```

```output2
1000000001
```

The possible products of the three chosen elements are $-24$, $-12$, $-8$, and $-6$, so the maximum product is $-6$.

We print this value modulo $(10^9+7)$, that is, $1000000001$.

```input3
2 1
-1 1000000000
```

```output3
1000000000
```

The possible products of the one chosen element are $-1$ and $1000000000$, so the maximum product is $1000000000$.

```input4
10 10
1000000000 100000000 10000000 1000000 100000 10000 1000 100 10 1
```

```output4
999983200
```

Be sure to print the product modulo $(10^9+7)$.