Score : $100$ points

## Problem Statement

Takahashi and Aoki will play a game against each other.<br>
Initially, Takahashi and Aoki have $A$ and $B$ candies, respectively.<br>
They will alternately do the operation below. Takahashi goes first if $C=0$, and Aoki goes first if $C=1$.

- Eat one of the candies he has.

The person who first becomes unable to do the operation loses. Which person will win?

## Constraints

- All values in input are integers.
- $0 \leq A, B \leq 100$
- $C \in \{0, 1\}$

## Input

Input is given from Standard Input in the following format:

> $A$ $B$ $C$

## Output

If Takahashi will win, print `Takahashi`; if Aoki will win, print `Aoki`.

```input1
2 1 0
```

```output1
Takahashi
```

Initially, Takahashi and Aoki have $2$ and $1$ candy(ies), respectively.
The game will proceed as follows:

- Takahashi eats his candy.
- Aoki eats his candy.
- Takahashi eats his candy.
- Aoki has no more candies, so Takahashi wins.

```input2
2 2 0
```

```output2
Aoki
```

```input3
2 2 1
```

```output3
Takahashi
```