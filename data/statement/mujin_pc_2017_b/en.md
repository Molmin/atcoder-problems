Score : $1300$ points

## Problem Statement

There is a square-shaped grid with $N$ vertical rows and $N$ horizontal columns.
We will denote the square at the $i$-th row from the top and the $j$-th column from the left as $(i,\ j)$.

Initially, each square is either white or black.
The initial color of the grid is given to you as characters $a_{ij}$, arranged in a square shape.
If the square $(i,\ j)$ is white, $a_{ij}$ is `.`. If it is black, $a_{ij}$ is `#`.

You are developing a robot that repaints the grid.
It can repeatedly perform the following operation:

- Select two integers $i$, $j$ ($1 \leq i,\ j \leq N$). Memorize the colors of the squares $(i,\ 1)$, $(i,\ 2)$, $...$, $(i,\ N)$ as $c_1$, $c_2$, $...$, $c_N$, respectively. Then, repaint the squares $(1,\ j)$, $(2,\ j)$, $...$, $(N,\ j)$ with the colors $c_1$, $c_2$, $...$, $c_N$, respectively.

Your objective is to turn all the squares black.
Determine whether it is possible, and find the minimum necessary number of operations to achieve it if the answer is positive.

## Constraints

- $2 \leq N \leq 500$
- $a_{ij}$ is either `.` or `#`.

## Partial Score

- In a test set worth $300$ points, $N \leq 3$.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $a_{11}$$...$$a_{1N}$
> 
> $:$
> 
> $a_{N1}$$...$$a_{NN}$

## Output

If it is possible to turn all the squares black, print the minimum necessary number of operations to achieve the objective.
If it is impossible, print `-1` instead.

```input1
2
#.
.#
```

```output1
3
```

For example, perform the operation as follows:

- Select $i = 1$, $j = 2$.
- Select $i = 1$, $j = 1$.
- Select $i = 1$, $j = 2$.

The transition of the colors of the squares is shown in the figure below:

![6a0314bb2b1073694a7ef5a062e77b13.png](https://atcoder.jp/img/mujin/6a0314bb2b1073694a7ef5a062e77b13.png)

```input2
2
..
..
```

```output2
-1
```

```input3
2
##
##
```

```output3
0
```

```input4
3
.#.
###
.#.
```

```output4
2
```

```input5
3
...
.#.
...
```

```output5
5
```