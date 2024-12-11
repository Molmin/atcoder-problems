Score : $1500$ points

## Problem Statement

You are given an integer $N$ and prime $P$.

We call a sequence of $N$ intervals $([L_1,R_1] ,[L_2,R_2], \cdots, [L_N,R_N])$ **good** if and only if both of the followings are satisfied:

- $1\le L_i\le R_i\le N$ holds for all $1\le i\le N$.
- There exists a **unique** permutation $x=(x_1,x_2,\cdots,x_N)$ of $(1,2,\cdots,N)$ such that $L_i\le x_i\le R_i$ holds for all $1\le i\le N$.

Count the number, modulo $P$, of **good** sequences of intervals.

## Constraints

- $2 \leq N \leq 5000$
- $10^9&lt;P&lt;1.01\times 10^9$
- $P$ is prime.
- All input values are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $P$

## Output

Print the answer.

```input1
2 1005488041
```

```output1
6
```

The following $6$ sequences are good:

- $([1,1],[2,2])$
- $([1,2],[2,2])$
- $([1,1],[1,2])$
- $([2,2],[1,1])$
- $([2,2],[1,2])$
- $([1,2],[1,1])$

```input2
5 1005488041
```

```output2
102960
```

```input3
100 1005488041
```

```output3
47599495
```

```input4
1000 1005488041
```

```output4
632708165
```