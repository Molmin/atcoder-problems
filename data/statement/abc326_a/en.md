Score : $100$ points

## Problem Statement

Takahashi is in a building with $100$ floors.

He uses the stairs for moving up two floors or less or moving down three floors or less, and uses the elevator otherwise.

Does he use the stairs to move from floor $X$ to floor $Y$?

## Constraints

- $1 \leq X,Y \leq 100$
- $X \neq Y$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $X$ $Y$

## Output

If Takahashi uses the stairs for the move, print `Yes`; if he uses the elevator, print `No`.

```input1
1 4
```

```output1
No
```

The move from floor $1$ to floor $4$ involves going up three floors, so Takahashi uses the elevator.

```input2
99 96
```

```output2
Yes
```

The move from floor $99$ to floor $96$ involves going down three floors, so Takahashi uses the stairs.

```input3
100 1
```

```output3
No
```