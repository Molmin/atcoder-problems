Score : $300$ points

## Problem Statement

There are $N$ people standing in a row from west to east.
Each person is facing east or west.
The directions of the people is given as a string $S$ of length $N$.
The $i$-th person from the west is facing east if $S_i =$ `E`, and west if $S_i =$ `W`.

You will appoint one of the $N$ people as the leader, then command the rest of them to face in the direction of the leader.
Here, we do not care which direction the leader is facing.

The people in the row hate to change their directions, so you would like to select the leader so that the number of people who have to change their directions is minimized.
Find the minimum number of people who have to change their directions.

## Constraints

- $2 \leq N \leq 3 \times 10^5$
- $|S| = N$
- $S_i$ is `E` or `W`.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $S$

## Output

Print the minimum number of people who have to change their directions.

```input1
5
WEEWW
```

```output1
1
```

Assume that we appoint the third person from the west as the leader.
Then, the first person from the west needs to face east and has to turn around.
The other people do not need to change their directions, so the number of people who have to change their directions is $1$ in this case.
It is not possible to have $0$ people who have to change their directions, so the answer is $1$.

```input2
12
WEWEWEEEWWWE
```

```output2
4
```

```input3
8
WWWWWEEE
```

```output3
3
```