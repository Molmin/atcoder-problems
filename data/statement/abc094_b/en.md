Score : $200$ points

## Problem Statement

There are $N + 1$ squares arranged in a row, numbered $0, 1, ..., N$ from left to right.

Initially, you are in Square $X$.
You can freely travel between adjacent squares. Your goal is to reach Square $0$ or Square $N$.
However, for each $i = 1, 2, ..., M$, there is a toll gate in Square $A_i$, and traveling to Square $A_i$ incurs a cost of $1$.
It is guaranteed that there is no toll gate in Square $0$, Square $X$ and Square $N$.

Find the minimum cost incurred before reaching the goal.

## Constraints

- $1 \leq N \leq 100$
- $1 \leq M \leq 100$
- $1 \leq X \leq N - 1$
- $1 \leq A_1 &lt; A_2 &lt; ... &lt; A_M \leq N$
- $A_i \neq X$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$ $X$
> 
> $A_1$ $A_2$ $...$ $A_M$

## Output

Print the minimum cost incurred before reaching the goal.

```input1
5 3 3
1 2 4
```

```output1
1
```

The optimal solution is as follows:

- First, travel from Square $3$ to Square $4$. Here, there is a toll gate in Square $4$, so the cost of $1$ is incurred.
- Then, travel from Square $4$ to Square $5$. This time, no cost is incurred.
- Now, we are in Square $5$ and we have reached the goal.

In this case, the total cost incurred is $1$.

```input2
7 3 2
4 5 6
```

```output2
0
```

We may be able to reach the goal at no cost.

```input3
10 7 5
1 2 3 4 6 8 9
```

```output3
3
```