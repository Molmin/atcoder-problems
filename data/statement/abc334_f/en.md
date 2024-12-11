Score : $550$ points

## Problem Statement

There is a town represented as an $xy$-plane, where Santa lives, along with $N$ children numbered $1$ to $N$.
Santa's house is at coordinates $(S_X,S_Y)$, and the house of child $i\ (1\leq i\leq N)$ is at $(X_i,Y_i)$.

Santa wants to deliver one present to each of the $N$ children **in numerical order**.
To deliver a present to child $i$, Santa must visit the house of child $i$ with at least one present in hand.
However, Santa can only carry up to $K$ presents at a time, and he must return to his own house to replenish presents (there are enough presents at Santa's house).

Find the minimum distance Santa must travel to leave his house, deliver presents to all $N$ children, and return to his house.

## Constraints

- $1\leq K\leq N \leq 2\times 10^5$
- $-10^9\leq S_X,S_Y,X_i,Y_i \leq 10^9$
- $(S_X,S_Y)\neq (X_i,Y_i)$
- $(X_i,Y_i)\neq (X_j,Y_j)\ (i\neq j)$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $K$
> 
> $S_X$ $S_Y$
> 
> $X_1$ $Y_1$
> 
> $X_2$ $Y_2$
> 
> $\vdots$
> 
> $X_N$ $Y_N$

## Output

Print the minimum distance Santa must travel.
The output will be considered correct if the absolute or relative error from the true value is at most $10^{ - 6}$.

```input1
3 2
1 1
3 1
1 2
3 2
```

```output1
9.236067977499790
```

![](https://img.atcoder.jp/abc334/3c258c2a4866ff2c01dbcdbdfebb4111.png)

In the figure above, the red circle represents Santa's house, and the circles with numbers represent the houses of the children with those numbers.

Consider Santa acting as follows:

1. Leave his house with two presents.
2. Go to child $1$'s house and deliver a present.
3. Return to his house and replenish one present.
4. Go to child $2$'s house and deliver a present.
5. Go to child $3$'s house and deliver a present.
6. Return to his house.

In this case, Santa travels the distance of $2+2+1+2+\sqrt{5}=7+\sqrt{5}=9.236\dots$, which is the minimum.

```input2
2 1
0 1
-1 1
1 1
```

```output2
4.000000000000000
```

```input3
8 3
735867677 193944314
586260100 -192321079
95834122 802780784
418379342 -790013317
-445130206 189801569
-354684803 -49687658
-204491568 -840249197
853829789 470958158
-751917965 762048217
```

```output3
11347715738.116592407226562
```