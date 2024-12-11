Score : $600$ points

## Problem Statement

There are $N$ points numbered $1$ through $N$, and $M$ roads.  The $i$-th ($1 \leq i \leq M$) road connects Point $a_i$ and Point $b_i$ bidirectionally and requires $c_i$ minutes to pass through.  One can travel from any point to any other point using some number of roads.  There is a house on Points $1,\ldots, K$.  

For $i=1,\ldots,Q$, solve the following problem.  

Takahashi is currently at the house at Point $x_i$ and wants to travel to the house at Point $y_i$.<br>
Once $t_i$ minutes have passed since his last sleep, he cannot continue moving anymore.<br>
He can get sleep only at a point with a house, but he may do so any number of times.<br>
If he can travel from Point $x_i$ to Point $y_i$, print `Yes`; otherwise, print `No`.

## Constraints

- $2 \leq K \leq N \leq 2 \times 10^5$
- $N-1 \leq M \leq \min (2 \times 10^5, \frac{N(N-1)}{2})$
- $1 \leq a_i \lt b_i \leq N$
- If $i \neq j$, then $(a_i,b_i) \neq (a_j,b_j)$.
- $1 \leq c_i \leq 10^9$
- One can travel from any point to any other point using some number of roads.
- $1 \leq Q \leq 2 \times 10^5$
- $1 \leq x_i \lt y_i \leq K$
- $1 \leq t_1 \leq \ldots \leq t_Q \leq 10^{15}$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$ $K$
> 
> $a_1$ $b_1$ $c_1$
> 
> $\vdots$
> 
> $a_M$ $b_M$ $c_M$
> 
> $Q$
> 
> $x_1$ $y_1$ $t_1$
> 
> $\vdots$
> 
> $x_Q$ $y_Q$ $t_Q$

## Output

Print $Q$ lines.  The $i$-th line should contain the answer for the $i$-th problem.

```input1
6 6 3
1 4 1
4 6 4
2 5 2
3 5 3
5 6 5
1 2 15
3
2 3 4
2 3 5
1 3 12
```

```output1
No
Yes
Yes
```

In the $3$-rd problem, it takes no less than $13$ minutes from Point $1$ to reach Point $3$ directly.  However, he can first travel to Point $2$ in $12$ minutes, get sleep in the house there, and then travel to Point $3$.  Thus, the answer is `Yes`.