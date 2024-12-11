Score : $100$ points

## Problem Statement

Takahashi has $K$ $500$-yen coins. (Yen is the currency of Japan.)
If these coins add up to $X$ yen or more, print `Yes`; otherwise, print `No`.

## Constraints

- $1 \leq K \leq 100$
- $1 \leq X \leq 10^5$

## Input

Input is given from Standard Input in the following format:

> $K$ $X$

## Output

If the coins add up to $X$ yen or more, print `Yes`; otherwise, print `No`.

```input1
2 900
```

```output1
Yes
```

Two $500$-yen coins add up to $1000$ yen, which is not less than $X = 900$ yen.

```input2
1 501
```

```output2
No
```

One $500$-yen coin is worth $500$ yen, which is less than $X = 501$ yen.

```input3
4 2000
```

```output3
Yes
```

Four $500$-yen coins add up to $2000$ yen, which is not less than $X = 2000$ yen.