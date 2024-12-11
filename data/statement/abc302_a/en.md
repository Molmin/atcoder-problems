Score : $100$ points

## Problem Statement

There is an enemy with stamina $A$.  Every time you attack the enemy, its stamina reduces by $B$.

At least how many times do you need to attack the enemy to make its stamina $0$ or less?

## Constraints

- $1 \le A,B \le 10^{18}$
- $A$ and $B$ are integers.

## Input

The input is given from Standard Input in the following format:

> $A$ $B$

## Output

Print the answer.

```input1
7 3
```

```output1
3
```

Attacking three times make the enemy's stamina $-2$.

Attacking only twice makes the stamina $1$, so you need to attack it three times.

```input2
123456789123456789 987654321
```

```output2
124999999
```

```input3
999999999999999998 2
```

```output3
499999999999999999
```