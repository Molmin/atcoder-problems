Score : $475$ points

## Problem Statement

There are $N$ types of products, each having $10^{100}$ units in stock.

You can buy any non-negative number of units of each product. To buy $k$ units of the $i$-th product, it costs $k^2 P_i$ yen.

If your total purchase cost is at most $M$ yen, what is the maximum number of units you can buy in total?

## Constraints

- $1 \leq N \leq 2 \times 10^{5}$
- $1 \leq M \leq 10^{18}$
- $1 \leq P_i \leq 2 \times 10^{9}$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $P_1$ $\ldots$ $P_N$

## Output

Print the answer.

```input1
3 9
4 1 9
```

```output1
3
```

If you buy one unit of the 1st product and two units of the 2nd product, the total purchase cost is $1^2 \times 4 + 2^2 \times 1 = 8$. It is impossible to buy four or more units in total with a total cost of at most $9$ yen, so the answer is $3$.

```input2
10 1000
2 15 6 5 12 1 7 9 17 2
```

```output2
53
```