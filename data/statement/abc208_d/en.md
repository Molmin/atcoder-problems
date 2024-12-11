Score : $400$ points

## Problem Statement

There are $N$ cities and $M$ roads in the Kingdom of Takahashi.

The cities are numbered $1$ through $N$, and the roads are numbered $1$ through $M$. Road $i$ is a **one-way** road that leads from City $A_i$ to City $B_i$, and it takes $C_i$ minutes to go through it.

Let us define $f(s, t, k)$ as the answer to the following query.

- Compute the minimum time needed to get from City $s$ to City $t$. Here, other than the Cities $s$ and $t$, it is only allowed to pass through Cities $1$ through $k$. If City $t$ is unreachable or $s = t$, the answer should be $0$.

Compute $f(s,t,k)$ for all triples $s,t,k$ and print the sum of them. More formally, print $\displaystyle \sum_{s = 1}^N \sum_{t = 1}^N \sum_{k = 1}^N f(s, t, k)$.

## Constraints

- $1 \leq N \leq 400$
- $0 \leq M \leq N(N-1)$
- $1 \leq A_i \leq N$ $(1 \leq i \leq M)$
- $1 \leq B_i \leq N$ $(1 \leq i \leq M)$
- $A_i \neq B_i$ $(1 \leq i \leq M)$
- $1 \leq C_i \leq 10^6$ $(1 \leq i \leq M)$
- $A_i \neq A_j$ or $B_i \neq B_j$, if $i \neq j$.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $B_1$ $C_1$
> 
> $\vdots$
> 
> $A_M$ $B_M$ $C_M$

## Output

Print $\displaystyle \sum_{s = 1}^N \sum_{t = 1}^N \sum_{k = 1}^N f(s, t, k)$.

```input1
3 2
1 2 3
2 3 2
```

```output1
25
```

The triples $s,t,k$ such that $f(s,t,k) \neq 0$ are as follows.

- For $k = 1$: $f(1,2,1) = 3, f(2,3,1) = 2$.
- For $k = 2$: $f(1,2,2) = 3, f(2,3,2) = 2, f(1,3,2) = 5$.
- For $k = 3$: $f(1,2,3) = 3, f(2,3,3) = 2, f(1,3,3) = 5$.

```input2
3 0
```

```output2
0
```

We have $f(s,t,k) = 0$ for all $s,t,k$.

```input3
5 20
1 2 6
1 3 10
1 4 4
1 5 1
2 1 5
2 3 9
2 4 8
2 5 6
3 1 5
3 2 1
3 4 7
3 5 9
4 1 4
4 2 6
4 3 4
4 5 8
5 1 2
5 2 5
5 3 6
5 4 5
```

```output3
517
```