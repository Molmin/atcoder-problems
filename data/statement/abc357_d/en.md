Score : $350$ points

## Problem Statement

For a positive integer $N$, let $V_N$ be the integer formed by concatenating $N$ exactly $N$ times.<br>
More precisely, consider $N$ as a string, concatenate $N$ copies of it, and treat the result as an integer to get $V_N$.<br>
For example, $V_3=333$ and $V_{10}=10101010101010101010$.

Find the remainder when $V_N$ is divided by $998244353$.

## Constraints

- $1 \leq N \leq 10^{18}$
- $N$ is an integer.

## Input

The input is given from Standard Input in the following format:

> $N$

## Output

Print the remainder when $V_N$ is divided by $998244353$.

```input1
5
```

```output1
55555
```

The remainder when $V_5=55555$ is divided by $998244353$ is $55555$.

```input2
9
```

```output2
1755646
```

The remainder when $V_9=999999999$ is divided by $998244353$ is $1755646$.

```input3
10000000000
```

```output3
468086693
```

Note that the input may not fit into a $32$-bit integer type.