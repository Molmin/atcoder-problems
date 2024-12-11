Score : $500$ points

## Problem Statement

You have a grid with $H$ rows from top to bottom and $W$ columns from left to right.
We denote by $(i, j)$ the square at the $i$-th row from the top and $j$-th column from the left.
$(i,j)\ (1\leq i\leq H,1\leq j\leq W)$ has an integer $A _ {i,j}$ between $1$ and $N$ written on it.

You are given integers $h$ and $w$.  For all pairs $(k,l)$ such that $0\leq k\leq H-h$ and $0\leq l\leq W-w$, solve the following problem:

- If you black out the squares $(i,j)$ such that $k\lt i\leq k+h$ and $l\lt j\leq l+w$, how many distinct integers are written on the squares that are not blacked out?

Note, however, that you do not actually black out the squares (that is, the problems are independent).

## Constraints

- $1 \leq H,W,N \leq 300$
- $1 \leq h \leq H$
- $1 \leq w \leq W$
- $(h,w)\neq(H,W)$
- $1 \leq A _ {i,j} \leq N\ (1\leq i\leq H,1\leq j\leq W)$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $H$ $W$ $N$ $h$ $w$
> 
> $A _ {1,1}$ $A _ {1,2}$ $\dots$ $A _ {1,W}$
> 
> $A _ {2,1}$ $A _ {2,2}$ $\dots$ $A _ {2,W}$
> 
> $\vdots$
> 
> $A _ {H,1}$ $A _ {H,2}$ $\dots$ $A _ {H,W}$

## Output

Print the answers in the following format, where $\operatorname{ans}_{k,l}$ denotes the answer to $(k, l)$:

> $\operatorname{ans} _ {0,0}$ $\operatorname{ans} _ {0,1}$ $\dots$ $\operatorname{ans} _ {0,W-w}$
> 
> $\operatorname{ans} _ {1,0}$ $\operatorname{ans} _ {1,1}$ $\dots$ $\operatorname{ans} _ {1,W-w}$
> 
> $\vdots$
> 
> $\operatorname{ans} _ {H-h,0}$ $\operatorname{ans} _ {H-h,1}$ $\dots$ $\operatorname{ans} _ {H-h,W-w}$

```input1
3 4 5 2 2
2 2 1 1
3 2 5 3
3 4 4 3
```

```output1
4 4 3
5 3 4
```

The given grid is as follows:

![](https://img.atcoder.jp/abc278/d3542563ea2e11fda78c3307c0a2b0fe.png)

For example, when $(k,l)=(0,0)$, four distinct integers $1,3,4$, and $5$ are written on the squares that are not blacked out, so $4$ is the answer.

```input2
5 6 9 3 4
7 1 5 3 9 5
4 5 4 5 1 2
6 1 6 2 9 7
4 7 1 5 8 8
3 4 3 3 5 3
```

```output2
8 8 7
8 9 7
8 9 8
```

```input3
9 12 30 4 7
2 2 2 2 2 2 2 2 2 2 2 2
2 2 20 20 2 2 5 9 10 9 9 23
2 29 29 29 29 29 28 28 26 26 26 15
2 29 29 29 29 29 25 25 26 26 26 15
2 29 29 29 29 29 25 25 8 25 15 15
2 18 18 18 18 1 27 27 25 25 16 16
2 19 22 1 1 1 7 3 7 7 7 7
2 19 22 22 6 6 21 21 21 7 7 7
2 19 22 22 22 22 21 21 21 24 24 24
```

```output3
21 20 19 20 18 17
20 19 18 19 17 15
21 19 20 19 18 16
21 19 19 18 19 18
20 18 18 18 19 18
18 16 17 18 19 17
```