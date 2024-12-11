Score : $400$ points

## Problem Statement

How many positive integers no greater than $N$ can be represented as $a^2 \times b \times c^2$ with three **primes** $a,b$, and $c$ such that $a&lt;b&lt;c$?

## Constraints

- $N$ is an integer satisfying $300 \le N \le 10^{12}$.

## Input

The input is given from Standard Input in the following format:

> $N$

## Output

Print the answer as an integer.

```input1
1000
```

```output1
3
```

The conforming integers no greater than $1000$ are the following three.

- $300 = 2^2 \times 3 \times 5^2$
- $588 = 2^2 \times 3 \times 7^2$
- $980 = 2^2 \times 5 \times 7^2$

```input2
1000000000000
```

```output2
2817785
```