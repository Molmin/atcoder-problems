Score : $200$ points

## Problem Statement

Given are two $N$-dimensional vectors $A = (A_1, A_2, A_3, \dots, A_N)$ and $B = (B_1, B_2, B_3, \dots, B_N)$.<br>
Determine whether the inner product of $A$ and $B$ is $0$.<br>
In other words, determine whether $A_1B_1 + A_2B_2 + A_3B_3 + \dots + A_NB_N = 0$.

## Constraints

- $1 \le N \le 100000$
- $-100 \le A_i \le 100$
- $-100 \le B_i \le 100$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $A_3$ $\dots$ $A_N$
> 
> $B_1$ $B_2$ $B_3$ $\dots$ $B_N$

## Output

If the inner product of $A$ and $B$ is $0$, print `Yes`; otherwise, print `No`.

```input1
2
-3 6
4 2
```

```output1
Yes
```

The inner product of $A$ and $B$ is $(-3) \times 4 + 6 \times 2 = 0$.

```input2
2
4 5
-1 -3
```

```output2
No
```

The inner product of $A$ and $B$ is $4 \times (-1) + 5 \times (-3) = -19$.

```input3
3
1 3 5
3 -6 3
```

```output3
Yes
```

The inner product of $A$ and $B$ is $1 \times 3 + 3 \times (-6) + 5 \times 3 = 0$.