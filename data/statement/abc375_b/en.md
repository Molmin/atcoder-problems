Score : $150$ points

## Problem Statement

Takahashi is at the origin on a two-dimensional coordinate plane.

The cost for him to move from point $(a, b)$ to point $(c, d)$ is $\sqrt{(a - c)^2 + (b - d)^2}$.

Find the total cost when he starts at the origin, visits $N$ points $(X_1, Y_1), \ldots, (X_N, Y_N)$ in this order, and then returns to the origin.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $-10^9 \leq X_i, Y_i \leq 10^9$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $X_1$ $Y_1$
> 
> $\vdots$
> 
> $X_N$ $Y_N$

## Output

Print the answer.<br>
Your output will be considered correct if its absolute or relative error from the true value is at most $10^{-6}$.

```input1
2
1 2
-1 0
```

```output1
6.06449510224597979401
```

The journey consists of the following three steps:

- Move from $(0, 0)$ to $(1, 2)$. The cost is $\sqrt{(0 - 1)^2 + (0 - 2)^2} = \sqrt{5} = 2.236067977...$.
- Move from $(1, 2)$ to $(-1, 0)$. The cost is $\sqrt{(1 - (-1))^2 + (2 - 0)^2} = \sqrt{8} = 2.828427124...$.
- Move from $(-1, 0)$ to $(0, 0)$. The cost is $\sqrt{(-1 - 0)^2 + (0 - 0)^2} = \sqrt{1} = 1$.

The total cost is $6.064495102...$.

```input2
7
-14142 13562
-17320 50807
-22360 67977
24494 89742
-26457 51311
28284 27124
31622 77660
```

```output2
384694.57587932075868509383
```

```input3
5
-100000 100000
100000 -100000
-100000 100000
100000 -100000
-100000 100000
```

```output3
1414213.56237309504880168872
```