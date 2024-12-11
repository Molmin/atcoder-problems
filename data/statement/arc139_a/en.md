Score : $300$ points

## Problem Statement

For a positive integer $x$, let $\mathrm{ctz}(x)$ be the number of trailing zeros in the binary representation of $x$.<br>
For example, we have $\mathrm{ctz}(8)=3$ because the binary representation of $8$ is `1000`, and $\mathrm{ctz}(5)=0$ because the binary representation of $5$ is `101`.

You are given a sequence of non-negative integers $T = (T_1,T_2,\dots,T_N)$.<br>
Consider making a sequence of positive integers $A = (A_1, A_2, \dots, A_N)$ of your choice so that it satisfies the following conditions.  

- $A_1 \lt A_2 \lt \cdots \lt A_{N-1} \lt A_N$ holds. In other words, $A$ is strictly increasing.
- $\mathrm{ctz}(A_i) = T_i$ holds for every integer $i$ such that $1 \leq i \leq N$.

What is the minimum possible value of $A_N$ here?

## Constraints

- $1 \leq N \leq 10^5$
- $0 \leq T_i \leq 40$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $T_1$ $T_2$ $\dots$ $T_N$

## Output

Print the answer.

```input1
4
0 1 3 2
```

```output1
12
```

For example, $A_1=3,A_2=6,A_3=8,A_4=12$ satisfy the conditions.<br>
$A_4$ cannot be $11$ or less, so the answer is $12$.

```input2
5
4 3 2 1 0
```

```output2
31
```

```input3
1
40
```

```output3
1099511627776
```

Note that the answer may not fit into a $32$-bit integer.

```input4
8
2 0 2 2 0 4 2 4
```

```output4
80
```