Score : $600$ points

## Problem Statement

Takahashi has decided to wander around his house.<br>
During his walk, he will roam between $N$ points called Point $1$, Point $2$, $\dots$, Point $N$, where Point $1$ is his house.<br>
There are $M$ pairs of points connected by roads; let $(a_i, b_i)$ be the $i$-th of these pairs. There are $p_{i, d}$ roads with a length of $d$ $(1 \leq d \leq T)$ kilometers connecting Point $a_i$ and Point $b_i$.

Takahashi wants to know the number of $T$ kilometers courses that begin and end at his house. Here, a $T$ kilometers course is defined as follows.

- An alternating sequence with points and roads $v_0 = 1, e_0, v_1, \dots,e_{k-1}, v_k = 1$ such that $e_i$ $(0 \leq i \leq k-1)$ connects $v_i$ and $v_{i+1}$, and the total length of $e_i$ is $T$ kilometers.

Help Takahashi by finding the number of such courses modulo $998244353$. Two courses are considered different when they are different as sequences.

## Constraints

- $2 \leq N \leq 10$
- $1 \leq M \leq \min \left(10, \frac{N(N-1)}{2} \right)$
- $1 \leq T \leq 4 \times 10^4$
- $1 \leq a_i \lt b_i \leq N$
- $(a_i, b_i) \neq (a_j, b_j)$ if $i \neq j$.
- $0 \leq p_{i,j} \lt 998244353$

## Input

Input is given from Standard Input in the following format:

> $N$ $M$ $T$
> 
> $a_1$ $b_1$
> 
> $p_{1,1}$ $p_{1,2}$ $\ldots$ $p_{1,T}$
> 
> $\vdots$
> 
> $a_M$ $b_M$
> 
> $p_{M,1}$ $p_{M,2}$ $\ldots$ $p_{M,T}$

## Output

Print the number of desirable courses, modulo $998244353$.

```input1
3 2 2
1 2
1 0
1 3
2 0
```

```output1
5
```

Around his house, there are:

- one $1$-kilometer road connecting Point $1$ and Point $2$, and
- two $1$-kilometer roads connecting Point $1$ and Point $3$.

We have the following five desirable courses:

- $1 \times 1 = 1$ course that goes Point $1$ $\to$ Point $2$ $\to$ Point $1$, and
- $2 \times 2 = 4$ courses that goes Point $1$ $\to$ Point $3$ $\to$ Point $1$.

```input2
3 3 4
1 2
3 0 0 0
1 3
0 1 0 0
2 3
2 0 0 0
```

```output2
130
```

Around his house, there are:

- three $1$-kilometer roads connecting Point $1$ and Point $2$,
- one $2$-kilometer road connecting Point $1$ and Point $3$, and
- two $1$-kilometer roads connecting Point $2$ and Point $3$.

The desirable courses can be classified into the following categories, according to the points visited:

- Point $1$ $\to$ Point $2$ $\to$ Point $1$ $\to$ Point $2$ $\to$ Point $1$,
- Point $1$ $\to$ Point $2$ $\to$ Point $3$ $\to$ Point $1$,
- Point $1$ $\to$ Point $2$ $\to$ Point $3$ $\to$ Point $2$ $\to$ Point $1$,
- Point $1$ $\to$ Point $3$ $\to$ Point $1$, and
- Point $1$ $\to$ Point $3$ $\to$ Point $2$ $\to$ Point $1$.

We have $81$, $6$, $36$, $1$, and $6$ course(s) of these categories, respectively.

```input3
2 1 5
1 2
31415 92653 58979 32384 62643
```

```output3
844557977
```