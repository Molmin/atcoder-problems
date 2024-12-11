Score : $100$ points

## Problem Statement

There are three houses on a number line: House $1$, $2$ and $3$, with coordinates $A$, $B$ and $C$, respectively.
Print `Yes` if we pass the coordinate of House $3$ on the straight way from House $1$ to House $2$ without making a detour, and print `No` otherwise.

## Constraints

- $0\leq A,B,C\leq 100$
- $A$, $B$ and $C$ are distinct integers.

## Input

Input is given from Standard Input in the following format:

> $A$ $B$ $C$

## Output

Print `Yes` if we pass the coordinate of House $3$ on the straight way from House $1$ to House $2$ without making a detour, and print `No` otherwise.

```input1
3 8 5
```

```output1
Yes
```

We pass the coordinate $5$ on the straight way from the house at coordinate $3$ to the house at coordinate $8$.

```input2
7 3 1
```

```output2
No
```

```input3
10 2 4
```

```output3
Yes
```

```input4
31 41 59
```

```output4
No
```