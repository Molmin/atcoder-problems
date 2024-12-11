Score : $400$ points

## Problem Statement

You are given an integer $W$.<br>
You are going to prepare some weights so that all of the conditions below are satisfied.

- The number of weights is between $1$ and $300$, inclusive.
- Each weight has a mass of positive integer not exceeding $10^6$.
- Every integer between $1$ and $W$, inclusive, is a **good integer**.  Here, a positive integer $n$ is said to be a good integer if the following condition is satisfied:-   - We can choose **at most $3$** different weights from the prepared weights with a total mass of $n$.

Print a combination of weights that satisfies the conditions.

## Constraints

- $1 \leq W \leq 10^6$
- $W$ is an integer.

## Input

Input is given from Standard Input in the following format:

> $W$

## Output

Print in the following format, where $N$ is the number of weights and $A_i$ is the mass of the $i$-th weight.  If multiple solutions exist, printing any of them is accepted.

> $N$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

Here, $N$ and $A_1,A_2,\dots,A_N$ should satisfy the following conditions:

- $1 \leq N \leq 300$
- $1 \leq A_i \leq 10^6$

```input1
6
```

```output1
3
1 2 3
```

In the output above, $3$ weights with masses $1$, $2$, and $3$ are prepared.<br>
This output satisfies the conditions.  Especially, regarding the $3$-rd condition, we can confirm that every integer between $1$ and $W$, inclusive, is a good integer.

- If we choose only the $1$-st weight, it has a total mass of $1$.
- If we choose only the $2$-nd weight, it has a total mass of $2$.
- If we choose only the $3$-rd weight, it has a total mass of $3$.
- If we choose the $1$-st and the $3$-rd weights, they have a total mass of $4$.
- If we choose the $2$-nd and the $3$-rd weights, they have a total mass of $5$.
- If we choose the $1$-st, the $2$-nd, and the $3$-rd weights, they have a total mass of $6$.

```input2
12
```

```output2
6
2 5 1 2 5 1
```

You may prepare multiple weights with the same mass.