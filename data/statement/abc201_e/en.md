Score : $500$ points

## Problem Statement

We have a weighted tree with $N$ vertices. The $i$-th edge connects Vertex $u_i$ and Vertex $v_i$ bidirectionally and has a weight $w_i$.

For a pair of vertices $(x,y)$, let us define $\text{dist}(x,y)$ as follows:

- the **XOR** of the weights of the edges in the shortest path from $x$ to $y$.

Find $\text{dist}(i,j)$ for every pair $(i,j)$ such that $1 \leq i \lt j \leq N$, and print the sum of those values modulo $(10^9+7)$.

What is $\text{ XOR }$?

The bitwise $\mathrm{XOR}$ of integers $A$ and $B$, $A\ \mathrm{XOR}\ B$, is defined as follows:

- When $A\ \mathrm{XOR}\ B$ is written in base two, the digit in the $2^k$'s place ($k \geq 0$) is $1$ if exactly one of $A$ and $B$ is $1$, and $0$ otherwise.

For example, we have $3\ \mathrm{XOR}\ 5 = 6$ (in base two: $011\ \mathrm{XOR}\ 101 = 110$).

## Constraints

- $2 \leq N \leq 2 \times 10^5$
- $1 \leq u_i \lt v_i \leq N$
- $0 \leq w_i \lt 2^{60}$
- The given graph is a tree.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $u_1$ $v_1$ $w_1$
> 
> $u_2$ $v_2$ $w_2$
> 
> $\vdots$
> 
> $u_{N-1}$ $v_{N-1}$ $w_{N-1}$

## Output

Print the sum of $\text{dist}(i,j)$, modulo $(10^9+7)$.

```input1
3
1 2 1
1 3 3
```

```output1
6
```

We have $\text{dist}(1,2)=1,$ $\text{dist}(1,3)=3,$ and $\text{dist}(2,3)=2$, for the sum of $6$.

```input2
5
3 5 2
2 3 2
1 5 1
4 5 13
```

```output2
62
```

```input3
10
5 7 459221860242673109
6 8 248001948488076933
3 5 371922579800289138
2 5 773108338386747788
6 10 181747352791505823
1 3 803225386673329326
7 8 139939802736535485
9 10 657980865814127926
2 4 146378247587539124
```

```output3
241240228
```

Print the sum modulo $(10^9+7)$.