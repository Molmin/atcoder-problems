Score: $550$ points

## Problem Statement

You are given positive integers $N$, $M$, $K$, and a sequence of positive integers of length $N$, $(C_1, C_2, \ldots, C_N)$. For each $r = 0, 1, 2, \ldots, N-1$, print the answer to the following problem.

There is a sequence of $N$ colored balls. For $i = 1, 2, \ldots, N$, the color of the $i$-th ball from the beginning of the sequence is $C_i$.
Additionally, there are $M$ empty boxes numbered $1$ to $M$.

Determine the total number of balls in the boxes after performing the following steps.

- <p>First, perform the following operation $r$ times.</p>
-   - Move the frontmost ball in the sequence to the end of the sequence.
- <p>Then, repeat the following operation as long as at least one ball remains in the sequence.</p>
-   - If there is a box that already contains at least one but fewer than $K$ balls of the same color as the frontmost ball in the sequence, put the frontmost ball into that box.
-   - If there is no such box,-   -   - If there is an empty box, put the frontmost ball into the one with the smallest box number.
-   -   - If there are no empty boxes, eat the frontmost ball without putting it into any box.

## Constraints

- All input values are integers.
- $1 \leq N \leq 2 \times 10^5$
- $1 \leq M, K \leq N$
- $1 \leq C_i \leq N$

## Input

The input is given from Standard Input in the following format:

> $N$ $M$ $K$
> 
> $C_1$ $C_2$ $\ldots$ $C_N$

## Output

Print the answer $X_r$ to the problem for each $r = 0, 1, 2, \ldots, N-1$ over $N$ lines as follows:

> $X_0$
> 
> $X_1$
> 
> $\vdots$
> 
> $X_{N-1}$

```input1
7 2 2
1 2 3 5 2 5 4
```

```output1
3
3
3
4
4
3
2
```

For example, let us explain the procedure for $r = 1$.
First, perform the operation "Move the frontmost ball in the sequence to the end of the sequence" once, and the sequence of ball colors becomes $(2, 3, 5, 2, 5, 4, 1)$.
Then, proceed with the operation of putting balls into boxes as follows:

- First operation: The color of the frontmost ball is $2$. There is no box with at least one but fewer than two balls of color $2$, so put the frontmost ball into the empty box with the smallest box number, box $1$.
- Second operation: The color of the frontmost ball is $3$. There is no box with at least one but fewer than two balls of color $3$, so put the frontmost ball into the empty box with the smallest box number, box $2$.
- Third operation: The color of the frontmost ball is $5$. There is no box with at least one but fewer than two balls of color $5$ and no empty boxes, so eat the frontmost ball.
- Fourth operation: The color of the frontmost ball is $2$. There is a box, box $1$, with at least one but fewer than two balls of color $2$, so put the frontmost ball into box $1$.
- Fifth operation: The color of the frontmost ball is $5$. There is no box with at least one but fewer than two balls of color $5$ and no empty boxes, so eat the frontmost ball.
- Sixth operation: The color of the frontmost ball is $4$. There is no box with at least one but fewer than two balls of color $4$ and no empty boxes, so eat the frontmost ball.
- Seventh operation: The color of the frontmost ball is $1$. There is no box with at least one but fewer than two balls of color $1$ and no empty boxes, so eat the frontmost ball.

The final total number of balls in the boxes is $3$, so the answer to the problem for $r = 1$ is $3$.

```input2
20 5 4
20 2 20 2 7 3 11 20 3 8 7 9 1 11 8 20 2 18 11 18
```

```output2
14
14
14
14
13
13
13
11
8
9
9
11
13
14
14
14
14
14
14
13
```