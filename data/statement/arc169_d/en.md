Score : $700$ points

## Problem Statement

You are given an integer sequence $A=(A_1,A_2,\cdots,A_N)$ of length $N$.
Each element of $A$ is an integer between $0$ and $N-1$, inclusive.

You can perform the following operation zero or more times:

- Choose exactly $M$ elements from $A$.
Then, increase the value of each chosen element by $1$.
Now, if some elements have the values of $N$, change those values to $0$.

Your goal is to make $A$ a permutation of $(0,1,\cdots,N-1)$.
Determine if the goal is achievable. If it is, find the minimum number of operations required.

## Constraints

- $2 \leq N \leq 250000$
- $1 \leq M \leq N-1$
- $0 \leq A_i \leq N-1$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$

## Output

If the goal is unachievable, print $-1$.
Otherwise, print the minimum number of operations required.

```input1
3 2
0 1 1
```

```output1
2
```

You can operate as follows to achieve the goal in two operations:

- Initial state: $A=(0,1,1)$.
- First operation: Choose $A_1$ and $A_2$, making $A=(1,2,1)$.
- Second operation: Choose $A_2$ and $A_3$, making $A=(1,0,2)$.

You cannot achieve the goal in fewer than two operations, so the answer is $2$.

```input2
5 2
0 4 2 3 1
```

```output2
0
```

```input3
4 2
0 0 1 2
```

```output3
-1
```

```input4
20 15
5 14 18 0 8 5 0 10 6 5 11 2 10 10 17 9 8 14 4 4
```

```output4
10
```