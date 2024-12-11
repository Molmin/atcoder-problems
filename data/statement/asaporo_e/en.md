Score : $700$ points

## Problem Statement

Aoki is in search of Takahashi, who is missing in a one-dimentional world.
Initially, the coordinate of Aoki is $0$, and the coordinate of Takahashi is known to be $x$, but his coordinate afterwards cannot be known to Aoki.

Time is divided into turns. In each turn, Aoki and Takahashi take the following actions simultaneously:

- <p>Let the current coordinate of Aoki be $a$, then Aoki moves to a coordinate he selects from $a-1$, $a$ and $a+1$.</p>
- <p>Let the current coordinate of Takahashi be $b$, then Takahashi moves to the coordinate $b-1$ with probability of $p$ percent, and moves to the coordinate $b+1$ with probability of $100-p$ percent.</p>

When the coordinates of Aoki and Takahashi coincide, Aoki can find Takahashi.
When they pass by each other, Aoki cannot find Takahashi.

Aoki wants to minimize the expected number of turns taken until he finds Takahashi. Find the minimum possible expected number of turns.

## Constraints

- $1$ ≦ $x$ ≦ $1,000,000,000$
- $1$ ≦ $p$ ≦ $100$
- $x$ and $p$ are integers.

## Partial Scores

- In the test set worth $200$ points, $p=100$.
- In the test set worth $300$ points, $x$ ≦ $10$.

## Input

The input is given from Standard Input in the following format:

> $x$
> 
> $p$

## Output

Print the minimum possible expected number of turns.
The output is considered correct if the absolute or relative error is at most $10^{-6}$.

```input1
3
100
```

```output1
2.0000000
```

Takahashi always moves by $-1$.
Thus, by moving to the coordinate $1$ in the $1$-st turn and staying at that position in the $2$-nd turn, Aoki can find Takahashi in $2$ turns.

```input2
6
40
```

```output2
7.5000000
```

```input3
101
80
```

```output3
63.7500000
```