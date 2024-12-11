Score: $100$ points

## Problem Statement

The AtCoder railway line has $N$ stations, numbered $1, 2, \ldots, N$.

On this line, there are **inbound trains** that start at station $1$ and stop at the stations $2, 3, \ldots, N$ in order, and **outbound trains** that start at station $N$ and stop at the stations $N - 1, N - 2, \ldots, 1$ in order.

Takahashi is about to travel from station $X$ to station $Y$ using only one of the inbound and outbound trains.

Determine whether the train stops at station $Z$ during this travel.

## Constraints

- $3 \leq N \leq 100$
- $1 \leq X, Y, Z \leq N$
- $X$, $Y$, and $Z$ are distinct.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $X$ $Y$ $Z$

## Output

If the train stops at station $Z$ during the travel from station $X$ to station $Y$, print `Yes`; otherwise, print `No`.

```input1
7 6 1 3
```

```output1
Yes
```

To travel from station $6$ to station $1$, Takahashi will take an outbound train.

After departing from station $6$, the train stops at stations $5, 4, 3, 2, 1$ in order, which include station $3$, so you should print `Yes`.

```input2
10 3 2 9
```

```output2
No
```

```input3
100 23 67 45
```

```output3
Yes
```