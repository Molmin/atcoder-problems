Score : $400$ points

## Problem Statement

You are given an integer sequence $A=(A_1,\ldots,A_N)$ and positive integers $a$, $b$, and $c$.

You can perform the following operation on this sequence any number of times, possibly zero.

- Choose an integer $i$ such that $1\leq i\leq N$. Replace $A_i$ with $A_i+1$.

Your objective is to make the sequence $A$ contain at least one multiple of $a$, at least one multiple of $b$, and at least one multiple of $c$.
Find the minimum number of operations required to achieve this objective.

## Constraints

- $1\leq N\leq 2\times 10^5$
- $1\leq a, b, c \leq 10^6$
- $1\leq A_i\leq 10^{18}$

## Input

The input is given from Standard Input in the following format:

> $N$ $a$ $b$ $c$
> 
> $A_1$ $\cdots$ $A_N$

## Output

Print the minimum number of operations required to achieve the objective.

```input1
3 3 4 5
8 9 11
```

```output1
2
```

You can perform the operation twice so that $A = (8,10,12)$ to achieve the objective.

```input2
3 3 4 5
14 11 59
```

```output2
1
```

You can perform the operation once so that $A = (14,11,60)$ to achieve the objective.

```input3
6 10 20 30
8 17 5 28 39 13
```

```output3
3
```

You can perform the operation three times so that $A = (8,17,5,30,40,13)$ to achieve the objective.

```input4
1 999997 999998 999999
123456789123456789
```

```output4
876537210887543205
```

You can perform the operation $876537210887543205$ times so that $A = (999994000010999994)$ to achieve the objective.