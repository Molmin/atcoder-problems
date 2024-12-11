Score : $400$ points

## Problem Statement

Takahashi and Aoki are playing a game.

- First, Takahashi chooses an integer between $A$ and $B$ (inclusive) and tells it to Aoki.
- Next, Aoki chooses an integer between $C$ and $D$ (inclusive).
- If the sum of these two integers is a prime, then Aoki wins; otherwise, Takahashi wins.

When the two players play optimally, which player will win?

## Constraints

- $1 \leq A \leq B \leq 100$
- $1 \leq C \leq D \leq 100$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $A$ $B$ $C$ $D$

## Output

If Takahashi wins when the two players play optimally, print `Takahashi`; if Aoki wins, print `Aoki`.

```input1
2 3 3 4
```

```output1
Aoki
```

For example, if Takahashi chooses $2$, Aoki can choose $3$ to make the sum $5$, which is a prime.

```input2
1 100 50 60
```

```output2
Takahashi
```

If they play optimally, Takahashi always wins.

```input3
3 14 1 5
```

```output3
Aoki
```