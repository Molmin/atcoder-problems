Score : $200$ points

## Problem Statement

You have $A$ $500$-yen coins, $B$ $100$-yen coins and $C$ $50$-yen coins (yen is the currency of Japan).
In how many ways can we select some of these coins so that they are $X$ yen in total?

Coins of the same kind cannot be distinguished. Two ways to select coins are distinguished when, for some kind of coin, the numbers of that coin are different.

## Constraints

- $0 \leq A, B, C \leq 50$
- $A + B + C \geq 1$
- $50 \leq X \leq 20$ $000$
- $A$, $B$ and $C$ are integers.
- $X$ is a multiple of $50$.

## Input

Input is given from Standard Input in the following format:

> $A$
> 
> $B$
> 
> $C$
> 
> $X$

## Output

Print the number of ways to select coins.

```input1
2
2
2
100
```

```output1
2
```

There are two ways to satisfy the condition:

- Select zero $500$-yen coins, one $100$-yen coin and zero $50$-yen coins.
- Select zero $500$-yen coins, zero $100$-yen coins and two $50$-yen coins.

```input2
5
1
0
150
```

```output2
0
```

Note that the total must be exactly $X$ yen.

```input3
30
40
50
6000
```

```output3
213
```