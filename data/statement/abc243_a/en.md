Score : $100$ points

## Problem Statement

Three people live in Takahashi's house: Takahashi, his father, and his mother. All of them wash their hair in the bathroom each night.<br>
His father, his mother, and Takahashi take a bath in this order and use $A$, $B$, and $C$ milliliters of shampoo, respectively.

This morning, the bottle contained $V$ milliliters of shampoo. Without refilling, who will be the first to run short of shampoo to wash their hair?

## Constraints

- $1 \leq V,A,B,C \leq 10^5$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $V$ $A$ $B$ $C$

## Output

If the first person to run short of shampoo to wash their hair is Takahashi's father, print `F`; if it is Takahashi's mother, print `M`; if it is Takahashi, print `T`.

```input1
25 10 11 12
```

```output1
T
```

Now, they have $25$ milliliters of shampoo.

- First, Takahashi's father uses $10$ milliliters, leaving $15$.
- Next, Takahashi's mother uses $11$ milliliters, leaving $4$.
- Finally, Takahashi tries to use $12$ milliliters and runs short of shampoo since only $4$ is remaining.

```input2
30 10 10 10
```

```output2
F
```

Now, they have $30$ milliliters of shampoo.

- First, Takahashi's father uses $10$ milliliters, leaving $20$.
- Next, Takahashi's mother uses $10$ milliliters, leaving $10$.
- Then, Takahashi uses $10$ milliliters, leaving $0$.
- Next day, Takahashi's father tries to use $10$ milliliters and runs short of shampoo since only $0$ is remaining.

```input3
100000 1 1 1
```

```output3
M
```