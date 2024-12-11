Score : $1500$ points

## Problem Statement

The currency used in Takahashi Kingdom is *Myon*.
There are $1$-, $10$-, $100$-, $1000$- and $10000$-Myon coins, and so forth. Formally, there are $10^n$-Myon coins for any non-negative integer $n$.

There are $N$ items being sold at Ex Store.
The price of the $i$-th $(1 \leq i \leq N)$ item is $A_i$ Myon.

Takahashi is going to buy some, at least one, possibly all, of these $N$ items.
He hates receiving change, so he wants to bring coins to the store so that he can pay the total price without receiving change, no matter what items he chooses to buy.
Also, since coins are heavy, he wants to bring as few coins as possible.

Find the minimum number of coins he must bring to the store. It can be assumed that he has an infinite supply of coins.

## Constraints

- $1 \leq N \leq 20,000$
- $1 \leq A_i \leq 10^{12}$

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $...$ $A_N$

## Output

Print the minimum number of coins Takahashi must bring to the store, so that he can pay the total price without receiving change, no matter what items he chooses to buy.

```input1
3
43 24 37
```

```output1
16
```

There are seven possible total prices: $24, 37, 43, 61, 67, 80,$ and $104$.
With seven $1$-Myon coins, eight $10$-Myon coins and one $100$-Myon coin, Takahashi can pay any of these without receiving change.

```input2
5
49735011221 970534221705 411566391637 760836201000 563515091165
```

```output2
105
```