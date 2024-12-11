Score : $200$ points

## Problem Statement

Takahashi's shop sells $N$ products. The usual price of the $i$-th product is $A_i$ yen (Japanese currency).<br>
It has a bargain sale today, with a discount of $1$ yen off the usual prices for the $2$-nd, $4$-th, and the subsequent even-indexed products. The $1$-st, $3$-rd, and the subsequent odd-indexed products are sold for their usual prices.<br>
You have $X$ yen. Can you buy all the $N$ products with this money?

## Constraints

- $1 \leq N \leq 100$
- $1 \leq X \leq 10000$
- $1 \leq A_i \leq 100$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $X$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## Output

If you can buy all the $N$ products, print `Yes`; otherwise, print `No`.

```input1
2 3
1 3
```

```output1
Yes
```

You can buy the $1$-st product for $1$ yen and the $2$-nd product for $2$ yen, $1$ yen off the usual price. You have just enough money, $3$ yen, to buy both of them.

```input2
4 10
3 3 4 4
```

```output2
No
```

You can buy these four products for $3$ yen, $2$ yen, $4$ yen, and $3$ yen, respectively. You need $12$ yen to buy all of them, and since you have only $10$ yen, you cannot buy all of them.

```input3
8 30
3 1 4 1 5 9 2 6
```

```output3
Yes
```