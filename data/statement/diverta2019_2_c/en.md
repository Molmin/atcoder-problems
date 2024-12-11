Score : $500$ points

## Problem Statement

There are $N$ integers, $A_1, A_2, ..., A_N$, written on a blackboard.

We will repeat the following operation $N-1$ times so that we have only one integer on the blackboard.

- Choose two integers $x$ and $y$ on the blackboard and erase these two integers. Then, write a new integer $x-y$.

Find the maximum possible value of the final integer on the blackboard and a sequence of operations that maximizes the final integer.

## Constraints

- $2 \leq N \leq 10^5$
- $-10^4 \leq A_i \leq 10^4$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $...$ $A_N$

## Output

Print the maximum possible value $M$ of the final integer on the blackboard, and a sequence of operations $x_i, y_i$ that maximizes the final integer, in the format below.

Here $x_i$ and $y_i$ represent the integers $x$ and $y$ chosen in the $i$-th operation, respectively.

If there are multiple sequences of operations that maximize the final integer, any of them will be accepted.

> $M$
> 
> $x_1$ $y_1$
> 
> $:$
> 
> $x_{N-1}$ $y_{N-1}$

```input1
3
1 -1 2
```

```output1
4
-1 1
2 -2
```

If we choose $x = -1$ and $y = 1$ in the first operation, the set of integers written on the blackboard becomes $(-2, 2)$.

Then, if we choose $x = 2$ and $y = -2$ in the second operation, the set of integers written on the blackboard becomes $(4)$.

In this case, we have $4$ as the final integer. We cannot end with a greater integer, so the answer is $4$.

```input2
3
1 1 1
```

```output2
1
1 1
1 0
```