Score : $100$ points

## Problem Statement

You went shopping to buy cakes and donuts with $X$ yen (the currency of Japan).

First, you bought one cake for $A$ yen at a cake shop.
Then, you bought as many donuts as possible for $B$ yen each, at a donut shop.

How much do you have left after shopping?

## Constraints

- $1 \leq A, B \leq 1$ $000$
- $A + B \leq X \leq 10$ $000$
- $X$, $A$ and $B$ are integers.

## Input

Input is given from Standard Input in the following format:

> $X$
> 
> $A$
> 
> $B$

## Output

Print the amount you have left after shopping.

```input1
1234
150
100
```

```output1
84
```

You have $1234 - 150 = 1084$ yen left after buying a cake.
With this amount, you can buy $10$ donuts, after which you have $84$ yen left.

```input2
1000
108
108
```

```output2
28
```

```input3
579
123
456
```

```output3
0
```

```input4
7477
549
593
```

```output4
405
```