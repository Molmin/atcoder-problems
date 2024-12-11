Score : $600$ points

## Problem Statement

There is zero or one bomb at each of positions $0, 1, 2, \ldots, 3^N-1$.<br>
Let us say that positions $x$ and $y$ are **neighboring** each other if and only if the following condition is satisfied for every $i=1, \ldots, N$.

- Let $x'$ and $y'$ be the $i$-th lowest digits of $x$ and $y$ in ternary representation, respectively. Then, $|x' - y'| \leq 1$.

It is known that there are exactly $A_i$ bombs in total at the positions neighboring position $i$. Print a placement of bombs consistent with this information.

## Constraints

- $1 \leq N \leq 12$
- There is a placement of bombs consistent with $A_0, A_1, \ldots, A_{3^N-1}$.
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_0$ $A_1$ $\ldots$ $A_{3^N-1}$

## Output

Print $B_0, B_1, \ldots, B_{3^N-1}$ with spaces in between, where $B_i = 0$ if position $i$ has no bomb and $B_i = 1$ if position $i$ has a bomb.

```input1
1
0 1 1
```

```output1
0 0 1
```

Position $0$ is neighboring positions $0$ and $1$, which have $0$ bombs in total.<br>
Position $1$ is neighboring positions $0$, $1$, and $2$, which have $1$ bomb in total.<br>
Position $2$ is neighboring positions $1$ and $2$, which have $1$ bombs in total.<br>
If there is a bomb at only position $2$, all conditions above are satisfied, so this placement is correct.

```input2
2
2 3 2 4 5 3 3 4 2
```

```output2
0 1 0 1 0 1 1 1 0
```

```input3
2
0 0 0 0 0 0 0 0 0
```

```output3
0 0 0 0 0 0 0 0 0
```