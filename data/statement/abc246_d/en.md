Score : $400$ points

## Problem Statement

Given an integer $N$, find the smallest integer $X$ that satisfies all of the conditions below.

- $X$ is greater than or equal to $N$.
- There is a pair of non-negative integers $(a, b)$ such that $X=a^3+a^2b+ab^2+b^3$.

## Constraints

- $N$ is an integer.
- $0 \le N \le 10^{18}$

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

Print the answer as an integer.

```input1
9
```

```output1
15
```

For any integer $X$ such that $9 \le X \le 14$, there is no $(a, b)$ that satisfies the condition in the statement.<br>
For $X=15$, $(a,b)=(2,1)$ satisfies the condition.

```input2
0
```

```output2
0
```

$N$ itself may satisfy the condition.

```input3
999999999989449206
```

```output3
1000000000000000000
```

Input and output may not fit into a $32$-bit integer type.