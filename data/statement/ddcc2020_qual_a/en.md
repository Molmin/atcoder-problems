Score: $100$ points

## Problem Statement

We held two competitions: Coding Contest and Robot Maneuver.

In each competition, the contestants taking the $3$-rd, $2$-nd, and $1$-st places receive $100000$, $200000$, and $300000$ yen (the currency of Japan), respectively. Furthermore, a contestant taking the first place in both competitions receives an additional $400000$ yen.

DISCO-Kun took the $X$-th place in Coding Contest and the $Y$-th place in Robot Maneuver.
Find the total amount of money he earned.

## Constraints

- $1 \leq X \leq 205$
- $1 \leq Y \leq 205$
- $X$ and $Y$ are integers.

## Input

Input is given from Standard Input in the following format:

> $X$ $Y$

## Output

Print the amount of money DISCO-Kun earned, as an integer.

```input1
1 1
```

```output1
1000000
```

In this case, he earned $300000$ yen in Coding Contest and another $300000$ yen in Robot Maneuver. Furthermore, as he won both competitions, he got an additional $400000$ yen.
In total, he made $300000 + 300000 + 400000 = 1000000$ yen.

```input2
3 101
```

```output2
100000
```

In this case, he earned $100000$ yen in Coding Contest.

```input3
4 4
```

```output3
0
```

In this case, unfortunately, he was the highest-ranked contestant without prize money in both competitions.