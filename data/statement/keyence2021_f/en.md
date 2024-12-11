Score : $1000$ points

## Problem Statement

Let $s$ be the concatenation of $N$ copies of `keyence`.
Consider deleting zero or more characters from $s$ and concatenating the remaining characters without changing the order to make a new string $s^{\prime}$.

There are $2^{7N}$ ways to choose the positions at which we delete the characters. Among them, how many make $s^{\prime}$ equal to $t$? Find the count modulo $998244353$.

## Constraints

- $1 \leq N \leq 10^{18}$
- $1 \leq |t| \leq 2.5 \times 10^5$
- $t$ is a string consisting of `c`, `e`, `k`, `n`, and `y`.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $t$

## Output

Print the number of ways to choose the positions at which we delete the characters so that $s^{\prime}$ will be equal to $t$, modulo $998244353$.

```input1
2
key
```

```output1
6
```

- We have $s=$ `keyencekeyence`.
- There are six ways to choose the positions at which we delete the characters so that $s^{\prime}=$ `key`.

```input2
2
ccc
```

```output2
0
```

- There are zero ways to choose the positions at which we delete the characters so that $s^{\prime}=$ `ccc`.

```input3
100
keyneeneeeckyycccckkke
```

```output3
275429980
```

- Be sure to find the count modulo $998244353$.