Score : $600$ points

## Problem Statement

You are given a tree with $N$ vertices. The $i$-th edge connects vertices $u_i$ and $v_i$ bidirectionally.

Additionally, you are given an integer sequence $A=(A_1,\ldots,A_N)$.

Here, define $f(i,j)$ as follows:

- If $A_i = A_j$, then $f(i,j)$ is the minimum number of edges you need to traverse to move from vertex $i$ to vertex $j$. If $A_i \neq A_j$, then $f(i,j) = 0$.

Calculate the value of the following expression:

$\displaystyle \sum_{i=1}^{N-1}\sum_{j=i+1}^N f(i,j)$.

<br>

## Constraints

- $2 \leq N \leq 2 \times 10^5$
- $1 \leq u_i, v_i \leq N$
- $1 \leq A_i \leq N$
- The input graph is a tree.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ 
> 
> $u_1$ $v_1$
> 
> $\vdots$
> 
> $u_{N-1}$ $v_{N-1}$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## Output

Print the answer.

```input1
4
3 4
4 2
1 2
2 1 1 2
```

```output1
4
```

$f(1,4)=2, f(2,3)=2$. For all other $i, j\ (1 \leq i &lt; j \leq N)$, we have $f(i,j)=0$, so the answer is $2+2=4$.

```input2
8
8 6
3 8
1 4
7 8
4 5
3 4
8 2
1 2 2 2 3 1 1 3
```

```output2
19
```