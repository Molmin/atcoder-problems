Score : $300$ points

## Problem Statement

There are two $100$-story buildings, called `A` and `B`. (In this problem, the ground floor is called the first floor.)

For each $i = 1,\dots, 100$, the $i$-th floor of `A` and that of `B` are connected by a corridor.
Also, for each $i = 1,\dots, 99$, there is a corridor that connects the $(i+1)$-th floor of `A` and the $i$-th floor of `B`.
You can traverse each of those corridors in both directions, and it takes you $x$ minutes to get to the other end.

Additionally, both of the buildings have staircases. For each $i = 1,\dots, 99$, a staircase connects the $i$-th and $(i+1)$-th floors of a building, and you need $y$ minutes to get to an adjacent floor by taking the stairs.

Find the minimum time needed to reach the $b$-th floor of `B` from the $a$-th floor of `A`.

## Constraints

- $1 \leq a,b,x,y \leq 100$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $a$ $b$ $x$ $y$

## Output

Print the minimum time needed to reach the $b$-th floor of `B` from the $a$-th floor of `A`.

```input1
2 1 1 5
```

```output1
1
```

There is a corridor that directly connects the $2$-nd floor of `A` and the $1$-st floor of `B`, so you can travel between them in $1$ minute.
This is the fastest way to get there, since taking the stairs just once costs you $5$ minutes.

```input2
1 2 100 1
```

```output2
101
```

For example, if you take the stairs to get to the $2$-nd floor of `A` and then use the corridor to reach the $2$-nd floor of `B`, you can get there in $1+100=101$ minutes.

```input3
1 100 1 100
```

```output3
199
```

Using just corridors to travel is the fastest way to get there.