Score : $100$ points

## Problem Statement

We have a truck, which can carry at most $N$ kilograms.

We will load bricks onto this truck, each of which weighs $W$ kilograms. At most how many bricks can be loaded?

## Constraints

- $1\leq N,W \leq 1000$
- $N$ and $W$ are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $W$

## Output

Print an integer representing the maximum number of bricks that can be loaded onto the truck.

```input1
10 3
```

```output1
3
```

Each brick weighs $3$ kilograms, so $3$ bricks weigh $9$ kilograms, and $4$ weigh $12$ kilograms.

Thus, we can load at most $3$ bricks onto the truck that can carry at most $10$ kilograms.

```input2
1000 1
```

```output2
1000
```