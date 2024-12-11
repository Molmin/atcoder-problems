Score : $525$ points

## Problem Statement

Takahashi and a cargo are on a coordinate plane.

Takahashi is currently at $(X_A,Y_A)$, and the cargo is at $(X_B,Y_B)$.
He wants to move the cargo to $(X_C,Y_C)$.

When he is at $(x,y)$, he can make one of the following moves in a single action.

- Move to $(x+1,y)$. If the cargo is at $(x+1,y)$ before the move, move it to $(x+2,y)$.
- Move to $(x-1,y)$. If the cargo is at $(x-1,y)$ before the move, move it to $(x-2,y)$.
- Move to $(x,y+1)$. If the cargo is at $(x,y+1)$ before the move, move it to $(x,y+2)$.
- Move to $(x,y-1)$. If the cargo is at $(x,y-1)$ before the move, move it to $(x,y-2)$.

Find the minimum number of actions required to move the cargo to $(X_C,Y_C)$.

## Constraints

- $-10^{17}\leq X_A,Y_A,X_B,Y_B,X_C,Y_C\leq 10^{17}$
- $(X_A,Y_A)\neq (X_B,Y_B)$
- $(X_B,Y_B)\neq (X_C,Y_C)$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $X_A$ $Y_A$ $X_B$ $Y_B$ $X_C$ $Y_C$

## Output

Print the minimum number of actions required to move the cargo to $(X_C,Y_C)$.

```input1
1 2 3 3 0 5
```

```output1
9
```

Takahashi can move the cargo to $(0,5)$ in nine actions as follows.

- Move to $(2,2)$.
- Move to $(3,2)$.
- Move to $(3,3)$. The cargo moves to $(3,4)$.
- Move to $(3,4)$. The cargo moves to $(3,5)$.
- Move to $(4,4)$.
- Move to $(4,5)$.
- Move to $(3,5)$. The cargo moves to $(2,5)$.
- Move to $(2,5)$. The cargo moves to $(1,5)$.
- Move to $(1,5)$. The cargo moves to $(0,5)$.

It is impossible to move the cargo to $(0,5)$ in eight or fewer actions, so you should print $9$.

```input2
0 0 1 0 -1 0
```

```output2
6
```

```input3
-100000000000000000 -100000000000000000 100000000000000000 100000000000000000 -100000000000000000 -100000000000000000
```

```output3
800000000000000003
```