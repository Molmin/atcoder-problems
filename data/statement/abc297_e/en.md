Score : $500$ points

## Problem Statement

In AtCoder Kingdom, $N$ kinds of *takoyaki*s (ball-shaped Japanese food) are sold.  A takoyaki of the $i$-th kind is sold for $A_i$ yen.

Takahashi will buy at least one takoyaki in total.  He is allowed to buy multiple takoyakis of the same kind.

Find the $K$-th lowest price that Takahashi may pay.  Here, if there are multiple sets of takoyakis that cost the same price, the price is counted only once.

## Constraints

- $1 \le N \le 10$
- $1 \le K \le 2 \times 10^5$
- $1 \le A_i \le 10^9$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $K$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## Output

Print the answer as an integer.

```input1
4 6
20 25 30 100
```

```output1
50
```

The four kinds of takoyakis sold in AtCoder Kingdom cost $20$ yen, $25$ yen, $30$ yen, and $100$ yen.

The six lowest prices that Takahashi may pay are $20$ yen, $25$ yen, $30$ yen, $40$ yen, $45$ yen, and $50$ yen.  Thus, the answer is $50$.

Note that at least one takoyaki must be bought.

```input2
2 10
2 1
```

```output2
10
```

Note that a price is not counted more than once even if there are multiple sets of takoyakis costing that price.

```input3
10 200000
955277671 764071525 871653439 819642859 703677532 515827892 127889502 881462887 330802980 503797872
```

```output3
5705443819
```