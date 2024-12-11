Score : $100$ points

## Problem Statement

A Supermarket *Takahashi* sells an $X$-gram beef pack for $Y$ yen.<br>
Another Supermarket *Snuke* has decided to sell a beef pack at a lower price per gram.<br>
In Snuke, one beef pack weighs $Z$ grams. What is the greatest possible price (a non-negative integer) for Snuke's beef pack such that it is strictly cheaper than Takahashi's beef pack per gram?

## Constraints

- All values in input are integers.
- $1 \leq X, Y, Z \leq 10^3$

## Input

Input is given from Standard Input in the following format:

> $X$ $Y$ $Z$

## Output

Print the answer.

```input1
100 200 100
```

```output1
199
```

Both stores sell $100$-gram packs, so Snuke can just make it one yen cheaper than that in Takahashi.

```input2
103 971 593
```

```output2
5590
```

Takahashi sells beef for $\frac{971}{103} = 9.4271\dots$ yen per gram. Snuke can sell $593$ grams of beef for $5590$ yen to make it $\frac{5590}{593} = 9.4266\dots$ yen per gram.

```input3
1000 1 1
```

```output3
0
```

The price is allowed to be $0$ yen.