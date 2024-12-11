Score : $600$ points

## Problem Statement

There are $N$ Christmas trees in the two-dimensional plane. The $i$-th tree is at coordinates $(x_i,y_i)$.

Answer the following $Q$ queries.

Query $i$: What is the distance between $(a_i,b_i)$ and the $K_i$-th nearest Christmas tree to that point, measured in Manhattan distance?

## Constraints

- $1\leq N \leq 10^5$
- $0\leq x_i\leq 10^5$
- $0\leq y_i\leq 10^5$
- $(x_i,y_i) \neq (x_j,y_j)$ if $i\neq j$.
- $1\leq Q \leq 10^5$
- $0\leq a_i\leq 10^5$
- $0\leq b_i\leq 10^5$
- $1\leq K_i\leq N$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $x_1$ $y_1$
> 
> $\vdots$
> 
> $x_N$ $y_N$
> 
> $Q$
> 
> $a_1$ $b_1$ $K_1$
> 
> $\vdots$
> 
> $a_Q$ $b_Q$ $K_Q$

## Output

Print $Q$ lines.<br>
The $i$-th line should contain the answer to Query $i$.

```input1
4
3 3
4 6
7 4
2 5
6
3 5 1
3 5 2
3 5 3
3 5 4
100 200 3
300 200 1
```

```output1
1
2
2
5
293
489
```

The distances from $(3,5)$ to the $1$-st, $2$-nd, $3$-rd, $4$-th trees to that point are $2$, $2$, $5$, $1$, respectively.<br>
Thus, the answers to the first four queries are $1$, $2$, $2$, $5$, respectively.