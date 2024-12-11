Score : $600$ points

## Problem Statement

Consider an infinite two-dimensional coordinate plane.
Takahashi, who is initially standing at $(0,0)$, will do $N$ jumps in one of the four directions he chooses every time: up, down, left, or right.
The length of each jump is fixed. Specifically, the $i$-th jump should cover the distance of $D_i$.
Determine whether it is possible to be exactly at $(A, B)$ after $N$ jumps. If it is possible, show one way to do so.

Here, for each direction, a jump of length $D$ from $(X, Y)$ takes him to the following point:

- up: $(X,Y) \to (X,Y+D)$
- down: $(X,Y) \to (X,Y-D)$
- left: $(X,Y) \to (X-D,Y)$
- right: $(X,Y) \to (X+D,Y)$.

## Constraints

- $1 \leq N \leq 2000$
- $\lvert A\rvert, \lvert B\rvert \leq 3.6\times 10^6$
- $1 \leq D_i \leq 1800$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $A$ $B$
> 
> $D_1$ $D_2$ $\ldots$ $D_N$

## Output

In the first line, print `Yes` if there is a desired sequence of jumps, and `No` otherwise.<br>
In the case of `Yes`, print in the second line a desired sequence of jumps as a string $S$ of length $N$ consisting of `U` , `D` , `L` , `R`, as follows:

- if the $i$-th jump is upward, the $i$-th character should be `U`;
- if the $i$-th jump is downward, the $i$-th character should be `D`;
- if the $i$-th jump is to the left, the $i$-th character should be `L`;
- if the $i$-th jump is to the right, the $i$-th character should be `R`.

```input1
3 2 -2
1 2 3
```

```output1
Yes
LDR
```

If he jumps left, down, right in this order, Takahashi moves $(0,0)\to(-1,0)\to(-1,-2)\to(2,-2)$ and ends up at $(2, -2)$, which is desired.

```input2
2 1 0
1 6
```

```output2
No
```

It is impossible to be exactly at $(1, 0)$ after the two jumps.

```input3
5 6 7
1 3 5 7 9
```

```output3
Yes
LRLUR
```