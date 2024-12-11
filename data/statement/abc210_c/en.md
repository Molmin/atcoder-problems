Score : $300$ points

## Problem Statement

There are $N$ candies arranged in a row from left to right.<br>
Each of these candies has one color that is one of the $10^9$ colors called Color $1$, Color $2$, $\ldots$, and Color $10^9$.<br>
For each $i = 1, 2, \ldots, N$, the color of the $i$-th candy from the left is Color $c_i$.

From this row, Takahashi can choose $K$ consecutive candies and get them.<br>
That is, he can choose an integer $i$ such that $1 \leq i \leq N-K+1$ and get the $i$-th, $(i+1)$-th, $(i+2)$-th, $\ldots$, $(i+K-1)$-th candy from the left.

Takahashi likes to eat colorful candies, so the more variety of colors his candies have, the happier he will be.<br>
Print the maximum possible number of distinct colors in candies he gets.

## Constraints

- $1 \leq K \leq N \leq 3 \times 10^5$
- $1 \leq c_i \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$
> 
> $c_1$ $c_2$ $\ldots$ $c_N$

## Output

Print the maximum possible number of distinct colors in candies Takahashi gets.

```input1
7 3
1 2 1 2 3 3 1
```

```output1
3
```

If Takahashi gets the $3$-rd through $5$-th candies, they will have $3$ distinct colors, which is the maximum possible number.

```input2
5 5
4 4 4 4 4
```

```output2
1
```

Takahashi can get all of these candies, but they are in a single color.

```input3
10 6
304621362 506696497 304621362 506696497 834022578 304621362 414720753 304621362 304621362 414720753
```

```output3
4
```