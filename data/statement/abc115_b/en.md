Score : $200$ points

## Problem Statement

In some other world, today is the day before Christmas Eve.

Mr. Takaha is buying $N$ items at a department store. The regular price of the $i$-th item $(1 \leq i \leq N)$ is $p_i$ yen (the currency of Japan).

He has a discount coupon, and can buy one item with the highest price for half the regular price. The remaining $N-1$ items cost their regular prices. What is the total amount he will pay?

## Constraints

- $2 \leq N \leq 10$
- $100 \leq p_i \leq 10000$
- $p_i$ is an even number.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $p_1$
> 
> $p_2$
> 
> $:$
> 
> $p_N$

## Output

Print the total amount Mr. Takaha will pay.

```input1
3
4980
7980
6980
```

```output1
15950
```

The $7980$-yen item gets the discount and the total is $4980 + 7980 / 2 + 6980 = 15950$ yen.

Note that outputs such as `15950.0` will be judged as Wrong Answer.

```input2
4
4320
4320
4320
4320
```

```output2
15120
```

Only one of the four items gets the discount and the total is $4320 / 2 + 4320 + 4320 + 4320 = 15120$ yen.