Score: $475$ points

## Problem Statement

There are infinitely many packs, each containing $N$ cards. In each pack, the $i$-th card is rare with probability $P_i$ percent. Whether each card is rare is independent of other cards being rare.

You will now open the packs one by one, and obtain all the cards in each opened pack. When you keep opening packs until you have obtained a total of at least $X$ rare cards, find the expected number of packs you will open.

## Constraints

- $1 \leq N \leq 5000$
- $1 \leq X \leq 5000$
- $1 \leq P_i \leq 100$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $X$
> 
> $P_1$ $P_2$ $\ldots$ $P_N$

## Output

Print the answer.

Your answer will be considered correct if the absolute or relative error from the true answer is at most $10^{-6}$.

```input1
2 2
50 100
```

```output1
1.5000000000000000
```

The number of packs opened will be $1$ with probability $\frac{1}{2}$, and $2$ with probability $\frac{1}{2}$.

```input2
2 3
40 60
```

```output2
3.2475579530543811
```

```input3
6 3
10 33 33 10 100 10
```

```output3
1.8657859189536100
```