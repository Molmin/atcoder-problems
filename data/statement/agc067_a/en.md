Score : $600$ points

## Problem Statement

You are given a simple undirected graph $G$ with $N$ vertices numbered $1$ to $N$. 
$G$ has $M$ edges and the $i$-th edge connects vertices $A_i$ and $B_i$.

Check if $G$ satisfies the following condition:

- For every subset $X$ of the vertex set $\{1,2,\cdots,N\}$, there exists a subset $Y$ of $X$ such that $|Y|\ge \frac{|X|}{2}$ and $Y$ forms a clique.

You have $T$ testcases to solve.

## Constraints

- $1\le T \le 10^3$
- $1\le N \le 10^5$
- $0 \le M \le 10^6$
- $1 \le A_i,B_i \le N$
- The given graph doesn't contain self-loops or multiple edges.
- The sum of $N$ across the test cases in a single input is at most $10^5$.
- The sum of $M$ across the test cases in a single input is at most $10^6$.
- All input values are integers.

## Input

Input is given from Standard Input in the following format:

> $T$
> 
> $case_1$
> 
> $case_2$
> 
> $\vdots$
> 
> $case_T$

Each test case is given in the following format:

> $N$ $M$
> 
> $A_1$ $B_1$
> 
> $A_2$ $B_2$
> 
> $\vdots$
> 
> $A_M$ $B_M$

## Output

For each test case, if $G$ satisfies the condition, print `Yes`, and otherwise print `No`.<br>
In printing `Yes` or `No`, you can output each letter in any case (upper or lower).

```input1
4
3 3
1 2
1 3
2 3
3 2
1 2
1 3
3 1
1 2
3 0
```

```output1
Yes
Yes
Yes
No
```

For the $1$-st test case, $G$ satisfies the condition. 
In this case, every subset $X$ is a clique, so we can just let $Y=X$.

For the $2$-nd test case, $G$ satisfies the condition. 
For example, for $X=\{2,3\}$, we can let $Y=\{2\}$.

For the $4$-th test case, $G$ doesn't satisfy the condition. 
If we let $X=\{1,2,3\}$, no subset $Y$ of $X$ satisfies the condition.