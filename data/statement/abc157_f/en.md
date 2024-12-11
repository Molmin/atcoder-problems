Score : $600$ points

## Problem Statement

Takahashi wants to grill $N$ pieces of meat on a grilling net, which can be seen as a two-dimensional plane. The coordinates of the $i$-th piece of meat are $\left(x_i, y_i\right)$, and its *hardness* is $c_i$.

Takahashi can use one heat source to grill the meat. If he puts the heat source at coordinates $\left(X, Y\right)$, where $X$ and $Y$ are real numbers, the $i$-th piece of meat will be ready to eat in $c_i \times \sqrt{\left(X - x_i\right)^2 + \left(Y-y_i\right)^2}$ seconds.

Takahashi wants to eat $K$ pieces of meat. Find the time required to have $K$ or more pieces of meat ready if he put the heat source to minimize this time.

## Constraints

- All values in input are integers.
- $1 \leq N \leq 60$
- $1 \leq K \leq N$
- $-1000 \leq x_i , y_i \leq 1000$
- $\left(x_i, y_i\right) \neq \left(x_j, y_j\right) \left(i \neq j \right)$
- $1 \leq c_i \leq 100$

## Input

Input is given from Standard Input in the following format:

> $N$ $K$
> 
> $x_1$ $y_1$ $c_1$
> 
> $\vdots$
> 
> $x_N$ $y_N$ $c_N$

## Output

Print the answer.

It will be considered correct if its absolute or relative error from our answer is at most $10^{-6}$.

```input1
4 3
-1 0 3
0 0 3
1 0 2
1 1 40
```

```output1
2.4
```

If we put the heat source at $\left(-0.2, 0\right)$, the $1$-st, $2$-nd, and $3$-rd pieces of meat will be ready to eat within $2.4$ seconds. This is the optimal place to put the heat source.

```input2
10 5
-879 981 26
890 -406 81
512 859 97
362 -955 25
128 553 17
-885 763 2
449 310 57
-656 -204 11
-270 76 40
184 170 16
```

```output2
7411.2252
```