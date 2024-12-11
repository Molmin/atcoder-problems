Score : $800$ points

## Problem Statement

For positive integers $h$ and $w$, let $(h,w)$ denote a rectangle with height $h$ and width $w$. In this problem, we do not consider rotating the rectangles, and the rectangles $(h,w)$ and $(w,h)$ are distinguished when $h \neq w$.

A sequence of rectangles $((h_1,w_1),(h_2,w_2),\dots ,(h_n,w_n))$ is called a **rectangle generation sequence** if there exists a method that successfully follows the steps below:

- Let the rectangle $X$ be $(h_1,w_1)$. Hereafter, let $H$ and $W$ respectively denote the height and width of the rectangle $X$ at each step.
- For $i=2,3,\dots ,n$, perform one of the following operations. If neither can be performed, the procedure unsuccessfully terminates.-   - If the height of $X$ is equal to $h_i$, attach the rectangle $(h_i,w_i)$ horizontally to $X$. Formally, if $H=h_i$ at that time, replace $X$ with the rectangle $(H,W+w_i)$.
-   - If the width of $X$ is equal to $w_i$, attach the rectangle $(h_i,w_i)$ vertically to $X$. Formally, if $W=w_i$ at that time, replace $X$ with the rectangle $(H+h_i,W)$.
- If the above series of operations does not fail, the procedure successfully terminates.

You are given $N$ rectangles. The $i$-th rectangle has a height of $H_i$ and a width of $W_i$.

Find the number of pairs of positive integers $(l,r)$ that satisfy $1 \le l \le r \le N$ and the following condition:

- The sequence of rectangles $((H_l,W_l),(H_{l+1},W_{l+1}),\dots ,(H_r,W_r))$ is a rectangle generation sequence.

## Constraints

- $1 \leq N \leq 3 \times 10^5$
- $1 \leq H_i, W_i \leq 10^6$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $H_1$ $W_1$
> 
> $H_2$ $W_2$
> 
> $\vdots$
> 
> $H_N$ $W_N$

## Output

Print the answer.

```input1
4
1 2
1 3
2 3
3 1
```

```output1
7
```

The pairs $(l,r)$ that satisfy the condition are $(1,1),(1,2),(2,2),(2,3),(2,4),(3,3),(4,4)$; there are seven.

For example, for $(l,r)=(2,4)$, the procedure succeeds if the first attachment is done vertically and the second is done horizontally.

```input2
5
2 1
2 1
1 2
3 2
1 4
```

```output2
10
```

```input3
1
1000000 1000000
```

```output3
1
```

```input4
10
1 1
1 1
1 1
1 1
1 1
1 1
1 1
1 1
1 1
1 1
```

```output4
55
```