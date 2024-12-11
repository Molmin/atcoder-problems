Score : $525$ points

## Problem Statement

AtCoder Inc. sells merchandise on its [online shop](https://suzuri.jp/AtCoder/home).

There are $N$ items remaining in the company.
The weight of the $i$-th item $(1\leq i\leq N)$ is $W_i$.

Takahashi will sell these items as $D$ lucky bags.<br>
He wants to minimize the variance of the total weights of the items in the lucky bags.<br>
Here, the variance is defined as $V=\frac{1}{D}\displaystyle\sum_{i=1}^D (x_i-\bar{x})^2$, where $x_1,x_2,\ldots,x_D$ are the total weights of the items in the lucky bags, and $\bar{x}=\frac{1}{D}(x_1+x_2+\cdots+x_D)$ is the average of $x_1,x_2,\ldots,x_D$.

Find the variance of the total weights of the items in the lucky bags when the items are divided to minimize this value.<br>
It is acceptable to have empty lucky bags (in which case the total weight of the items in that bag is defined as $0$),<br>
but **each item must be in exactly one of the $D$ lucky bags**.

## Constraints

- $2 \leq D\leq N\leq 15$
- $1 \leq W_i\leq 10^8$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $D$
> 
> $W_1$ $W_2$ $\ldots$ $W_N$

## Output

Print the variance of the total weights of the items in the lucky bags when the items are divided to minimize this value.<br>
Your output will be considered correct if the absolute or relative error from the true value is at most $10^{-6}$.

```input1
5 3
3 5 3 6 3
```

```output1
0.888888888888889
```

If you put the first and third items in the first lucky bag,
the second and fifth items in the second lucky bag,
and the fourth item in the third lucky bag,
the total weight of the items in the bags are $6$, $8$, and $6$, respectively.

Then, the average weight is $\frac{1}{3}(6+8+6)=\frac{20}{3}$,<br>
and the variance is
$\frac{1}{3}\left\{\left(6-\frac{20}{3}\right)^2+\left(8-\frac{20}{3}\right)^2+\left(6-\frac{20}{3}\right)^2 \right\}=\frac{8}{9}=0.888888\ldots$,
which is the minimum.

Note that multiple items may have the same weight,
and that each item must be in one of the lucky bags.