Score : $300$ points

## Problem Statement

Given an integer $N$, find the number of integers $X$ that satisfy all of the following conditions, modulo $998244353$.

- $X$ is an $N$-digit positive integer.
- Let $X_1,X_2,\dots,X_N$ be the digits of $X$ from top to bottom. They satisfy all of the following:-   - $1 \le X_i \le 9$ for all integers $1 \le i \le N$;
-   - $|X_i-X_{i+1}| \le 1$ for all integers $1 \le i \le N-1$.

## Constraints

- $N$ is an integer.
- $2 \le N \le 10^6$

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

Print the answer as an integer.

```input1
4
```

```output1
203
```

Some of the $4$-digit integers satisfying the conditions are $1111,1234,7878,6545$.

```input2
2
```

```output2
25
```

```input3
1000000
```

```output3
248860093
```

Be sure to find the count modulo $998244353$.