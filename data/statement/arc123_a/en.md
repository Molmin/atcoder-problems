Score : $300$ points

## Problem Statement

Given is a sequence of three integers $A = (A_1, A_2, A_3)$. On this sequence, you can do the following operation any number of times:

- choose $i\in \{1,2,3\}$ and add $1$ to $A_i$.

Find the minimum number of operations needed to make $A$ arithmetic. Here, the sequence $A = (A_1, A_2, A_3)$ is arithmetic when $A_2 - A_1 = A_3 - A_2$ holds.

## Constraints

- $1\leq A_1, A_2, A_3\leq 10^{15}$

## Input

Input is given from Standard Input in the following format:

> $A_1$ $A_2$ $A_3$

## Output

Print the answer.

```input1
4 8 10
```

```output1
2
```

One operation with $i = 1$ and then one operation with $i = 3$ yield an arithmetic sequence $(5, 8, 11)$.

```input2
10 3 4
```

```output2
4
```

Four operations with $i = 2$ yield an arithmetic sequence $(10, 7, 4)$.

```input3
1 2 3
```

```output3
0
```

The sequence $A$ is already arithmetic from the beginning, so we need zero operations.

```input4
1000000000000000 1 1000000000000000
```

```output4
999999999999999
```