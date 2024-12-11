Score : $600$ points

## Problem Statement

We have a directed graph with $N$ vertices and $M$ edges.
The vertices are numbered from $1$ through $N$, and the $i$-th edge goes from vertex $U_i$ to vertex $V_i$.

You are currently at vertex $1$.
Determine if you can make the following move $10^{10^{100}}$ times to end up at vertex $1$:

- choose an edge going from the vertex you are currently at, and move to the vertex that the edge points at.

Given $T$ test cases, solve each of them.

## Constraints

- All input values are integers.
- $1\leq T \leq 2\times 10^5$
- $2\leq N \leq 2\times 10^5$
- $1\leq M \leq 2\times 10^5$
- The sum of $N$ over all test cases is at most $2 \times 10^5$.
- The sum of $M$ over all test cases is at most $2 \times 10^5$.
- $1 \leq U_i, V_i \leq N$
- $U_i \neq V_i$
- If $i\neq j$, then $(U_i,V_i) \neq (U_j,V_j)$.

## Input

The input is given from Standard Input in the following format.
Here, $\text{test}_i$ denotes the $i$-th test case.

> $T$
> 
> $\text{test}_1$
> 
> $\text{test}_2$
> 
> $\vdots$
> 
> $\text{test}_T$

Each test case is given in the following format.

> $N$ $M$
> 
> $U_1$ $V_1$
> 
> $U_2$ $V_2$
> 
> $\vdots$
> 
> $U_M$ $V_M$

## Output

Print $T$ lines.

The $i$-th $(1\leq i \leq T)$ line should contain `Yes` if you can make the move described in the problem statement $10^{10^{100}}$ times to end up at vertex $1$,
and `No` otherwise.

```input1
4
2 2
1 2
2 1
3 3
1 2
2 3
3 1
7 10
1 6
6 3
1 4
5 1
7 1
4 5
2 1
4 7
2 7
4 3
7 11
1 6
6 3
1 4
5 1
7 1
4 5
2 1
4 7
2 7
4 3
3 7
```

```output1
Yes
No
No
Yes
```

For the $1$-st test case,

- You inevitably repeat visiting vertices $1 \rightarrow 2 \rightarrow 1 \rightarrow \dots$.
Thus, you will end up at vertex $1$ after making the move $10^{10^{100}}$ times, so the answer is `Yes`.

For the $2$-nd test case,

- You inevitably repeat visiting vertices $1 \rightarrow 2 \rightarrow 3 \rightarrow 1 \rightarrow \dots$.
Thus, you will end up at vertex $2$ after making the move $10^{10^{100}}$ times, so the answer is `No`.