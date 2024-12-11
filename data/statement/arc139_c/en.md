Score : $700$ points

## Problem Statement

You are given positive integers $N$ and $M$.

Let us call a sequence of pairs of integers $((X_1,Y_1),(X_2,Y_2),\dots,(X_K,Y_K))$ **wonderful** when it satisfies the following.

- $1 \le X_i \le N$
- $1 \le Y_i \le M$
- $X_i+3Y_i \neq X_j+3Y_j$ and $3X_i+Y_i \neq 3X_j+Y_j$, if $i \neq j$.

Make a wonderful sequence of pairs of integers whose length, $K$, is the maximum possible.

## Constraints

- $1 \le N,M \le 10^5$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$

## Output

Print your answer in the following format:

> $K$
> 
> $X_1$ $Y_1$
> 
> $X_2$ $Y_2$
> 
> $\vdots$
> 
> $X_K$ $Y_K$

Here, $K$ should be the maximum possible length of a wonderful sequence of pairs of integers, and $((X_1,Y_1),(X_2,Y_2),\dots,(X_K,Y_K))$ should be a wonderful sequence of pairs of integers.
If multiple solutions exist, printing any of them is accepted.

```input1
3 4
```

```output1
10
1 1
1 2
1 3
2 1
2 2
2 3
3 1
3 2
3 3
3 4
```

For $N=3, M=4$, there is no wonderful sequence of pairs of integers whose length is $11$ or longer, and the above sequence of pairs of integers is wonderful, so this output is valid.