Score : $200$ points

## Problem Statement

Given a positive integer $N$, find the maximum integer $k$ such that $2^k \le N$. 

## Constraints

- $N$ is an integer satisfying $1 \le N \le 10^{18}$.

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

Print the answer as an integer.

```input1
6
```

```output1
2
```

- $k=2$ satisfies $2^2=4 \le 6$.
- For every integer $k$ such that $k \ge 3$, $2^k &gt; 6$ holds.

Therefore, the answer is $k=2$.

```input2
1
```

```output2
0
```

Note that $2^0=1$.

```input3
1000000000000000000
```

```output3
59
```

The input value may not fit into a $32$-bit integer.