Score : $100$ points

## Problem Statement

In a long narrow forest stretching east-west, there are $N$ beasts. Below, we will call the point that is $p$ meters from the west end Point $p$. The $i$-th beast from the west $(1 \leq i \leq N)$ is at Point $x_i$, and can be sold for $s_i$ yen (the currency of Japan) if captured.

You will choose two integers $L$ and $R$ $(L \leq R)$, and throw a net to cover the range from Point $L$ to Point $R$ including both ends, $[L, R]$. Then, all the beasts in the range will be captured. However, the net costs $R - L$ yen and your profit will be $($the sum of $s_i$ over all captured beasts $i) - (R - L)$ yen.

What is the maximum profit that can be earned by throwing a net only once?

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq x_1 &lt; x_2 &lt; ... &lt; x_N \leq 10^{15}$
- $1 \leq s_i \leq 10^9$
- All input values are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $x_1$ $s_1$
> 
> $x_2$ $s_2$
> 
> $:$
> 
> $x_N$ $s_N$

## Output

When the maximum profit is $X$ yen, print the value of $X$.

```input1
5
10 20
40 50
60 30
70 40
90 10
```

```output1
90
```

If you throw a net covering the range $[L = 40, R = 70]$, the second, third and fourth beasts from the west will be captured, generating the profit of $s_2 + s_3 + s_4 - (R - L) = 90$ yen. It is not possible to earn $91$ yen or more.

```input2
5
10 2
40 5
60 3
70 4
90 1
```

```output2
5
```

The positions of the beasts are the same as Sample 1, but the selling prices dropped significantly, so you should not aim for two or more beasts. By throwing a net covering the range $[L = 40, R = 40]$, you can earn $s_2 - (R - L) = 5$ yen, and this is the maximum possible profit.

```input3
4
1 100
3 200
999999999999999 150
1000000000000000 150
```

```output3
299
```