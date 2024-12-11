Score : $400$ points

## Problem Statement

You are given an integer sequence of length $N$: $A=(A_1,A_2,\dots,A_N)$. You can perform the following operation any number of times (possibly zero).

- Choose an integer $i$ such that $1 \le i \le N$, and increase or decrease $A_i$ by $1$.

Your goal is to make at least $M$ integers $i(3 \le i \le N)$ satisfy $A_1 \le A_i \le A_2$. Find the minimum number of operations required to achieve this goal.

## Constraints

- $3 \le N \le 2 \times 10^5$
- $1 \le M \le N-2$
- $1 \le A_i \le 10^9$

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## Output

Print the minimum number of operations required.

```input1
3 1
2 3 5
```

```output1
2
```

You can make not less than one integer $i(3 \le i \le N)$ satisfy $A_1 \le A_i \le A_2$ by performing the operation as follows.

- Choose $i=3$, and decrease $A_i$ by $1$.
- Choose $i=2$, and increase $A_i$ by $1$.

Since it is impossible to achieve the goal with less than $2$ operation, the answer is $2$.

```input2
5 2
1 4 2 3 5
```

```output2
0
```

You may already have achieved the goal from the start.

```input3
8 5
15 59 64 96 31 17 88 9
```

```output3
35
```