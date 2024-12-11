Score : $100$ points

## Problem Statement

Takahashi's purse has one or more $100$-yen coins in it and nothing else. (Yen is the Japanese currency.)

Is it possible that the total amount of money in the purse is $X$ yen?

## Constraints

- $0 \leq X \leq 1000$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $X$

## Output

If it is possible that the total amount of money in Takahashi's purse is $X$ yen, print `Yes`; otherwise, print `No`.

```input1
500
```

```output1
Yes
```

If the purse has five $100$-yen coins, the total amount of money is $500$ yen. Thus, it is possible that the total amount is $X=500$ yen, so we should print `Yes`.

```input2
40
```

```output2
No
```

```input3
0
```

```output3
No
```

Note that the purse has at least one $100$-yen coin.