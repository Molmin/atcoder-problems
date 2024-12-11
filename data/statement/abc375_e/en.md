Score : $450$ points

## Problem Statement

There are $N$ people divided into three teams.

The people are numbered $1, 2, \ldots, N$, and the teams are numbered $1, 2, 3$. Currently, person $i$ belongs to team $A_i$.

Each person has a value called **strength**; person $i$ has a strength of $B_i$. The **strength** of a team is defined as the sum of the strengths of its members.

Determine whether it is possible for zero or more people to switch teams so that all teams have equal strength. If it is possible, find the minimum number of people who need to switch teams to achieve this.

You cannot create new teams other than teams $1$, $2$, $3$.

## Constraints

- $3 \leq N \leq 100$
- $A_i \in \lbrace 1, 2, 3 \rbrace$
- For each $x \in \lbrace 1, 2, 3 \rbrace$, there exists some $i$ with $A_i = x$.
- $1 \leq B_i$
- $\displaystyle\sum_{i = 1}^{N} B_i \leq 1500$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $B_1$
> 
> $A_2$ $B_2$
> 
> $\vdots$
> 
> $A_N$ $B_N$

## Output

If it is possible to make all teams have equal strength, print the minimum number of people who need to switch teams. Otherwise, print `-1`.

```input1
6
1 2
2 5
1 5
3 3
1 3
3 6
```

```output1
2
```

If person $1$ switches to team $3$ and person $4$ switches to team $2$, all teams will have a strength of $8$.

```input2
4
1 1
1 2
2 3
3 4
```

```output2
-1
```

```input3
3
1 1
2 1
3 1
```

```output3
0
```

```input4
12
2 5
1 4
3 3
2 3
3 9
1 2
2 2
3 9
2 6
1 9
1 1
3 1
```

```output4
3
```