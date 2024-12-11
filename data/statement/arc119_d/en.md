Score: $700$ points

## Problem Statement

We have a canvas represented as a grid with $H$ rows and $W$ columns. Let $(i, j)$ denote the square at the $i$-th row from the top $(1 \leq i \leq H)$ and $j$-th column from the left $(1 \leq j \leq W)$. Initially, $(i, j)$ is painted red if $s_{i, j}=$ `R` and blue if $s_{i, j}=$ `B`.

For any number of times, you can choose one of the two operations below and do it.

**Operation X:** Choose a square painted red, and repaint all squares in the row containing that square (including itself) white.<br>
**Operation Y:** Choose a square painted red, and repaint all squares in the column containing that square (including itself) white.

Show one way that maximizes the number of squares painted white in the end.

## Constraints

- $1 \leq H \leq 2500$
- $1 \leq W \leq 2500$
- $s_{i, j}$ is `R` or `B`. $(1 \leq i \leq H, 1 \leq j \leq W)$
- $H$ and $W$ are integers.

## Input

Input is given from Standard Input in the following format:

> $H$ $W$
> 
> $s_{1, 1}$$s_{1, 2}$$s_{1, 3}$$\cdots$$s_{1, W}$
> 
> $s_{2, 1}$$s_{2, 2}$$s_{2, 3}$$\cdots$$s_{2, W}$
> 
> $s_{3, 1}$$s_{3, 2}$$s_{3, 3}$$\cdots$$s_{3, W}$
> 
>  $\vdots$
> 
> $s_{H, 1}$$s_{H, 2}$$s_{H, 3}$$\cdots$$s_{H, W}$

## Output

Print the following to Standard Output:

> $n$
> 
> $t_1$ $r_1$ $c_1$
> 
> $t_2$ $r_2$ $c_2$
> 
> $t_3$ $r_3$ $c_3$
> 
>  $\vdots$
> 
> $t_n$ $r_n$ $c_n$

Here, $n$ is the number of operations you do, and $t_i, r_i, c_i$ means that your $i$-th operation is Operation $t_i$ with $(r_i, c_i)$ being chosen, where $t_i$ is `X` or `Y`.<br>
If there are multiple possible solutions, you may print any of them.

```input1
4 4
RBBB
BBBB
BBBB
RBRB
```

```output1
3
X 1 1
Y 4 3
X 4 1
```

Here is one sequence of operations that makes $10$ squares white:

- First, do **Operation X** choosing $(1, 1)$.
- Then, do **Operation Y** choosing $(4, 3)$.
- Then, do **Operation X** choosing $(4, 1)$.

There is no way to make $11$ or more squares white.

![](https://img.atcoder.jp/arc119/b0fde87f879b9dc90ca8788945f21bf2.png)

```input2
1 119
BBBRBBBBBBRBBBBBBRBBBBBBRBBBBBBRBBBBBBRBBBBBBRBBBBBBRBBBBBBRBBBBBBRBBBBBBRBBBBBBRBBBBBBRBBBBBBRBBBBBBRBBBBBBRBBBBBBRBBB
```

```output2
4
Y 1 60
Y 1 109
Y 1 46
X 1 11
```

We can repaint all squares white.

```input3
10 10
BBBBBBBBBB
BBBBBBBBBB
BBBBBBBBBB
BBBBBBBBBB
BBBBBBBBBB
BBBBBBBBBB
BBBBBBBBBB
BBBBBBBBBB
BBBBBBBBBB
BBBBBBBBBB
```

```output3
0
```

Since there is no red square, we cannot do the operations at all.