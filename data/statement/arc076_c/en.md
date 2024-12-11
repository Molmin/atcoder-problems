Score : $700$ points

## Problem Statement

Snuke is playing a puzzle game.
In this game, you are given a rectangular board of dimensions $R \times C$, filled with numbers. Each integer $i$ from $1$ through $N$ is written twice, at the coordinates $(x_{i,1},y_{i,1})$ and $(x_{i,2},y_{i,2})$.

The objective is to draw a curve connecting the pair of points where the same integer is written, for every integer from $1$ through $N$.
Here, the curves may not go outside the board or cross each other.

Determine whether this is possible.

## Constraints

- $1 \leq R,C \leq 10^8$
- $1 \leq N \leq 10^5$
- $0 \leq x_{i,1},x_{i,2} \leq R(1 \leq i \leq N)$
- $0 \leq y_{i,1},y_{i,2} \leq C(1 \leq i \leq N)$
- All given points are distinct.
- All input values are integers.

## Input

Input is given from Standard Input in the following format:

> $R$ $C$ $N$
> 
> $x_{1,1}$ $y_{1,1}$ $x_{1,2}$ $y_{1,2}$
> 
> :
> 
> $x_{N,1}$ $y_{N,1}$ $x_{N,2}$ $y_{N,2}$

## Output

Print `YES` if the objective is achievable; print `NO` otherwise.

```input1
4 2 3
0 1 3 1
1 1 4 1
2 0 2 2
```

```output1
YES
```

![](https://atcoder.jp/img/arc076/hogehogehoge.png)

The above figure shows a possible solution.

```input2
2 2 4
0 0 2 2
2 0 0 1
0 2 1 2
1 1 2 1
```

```output2
NO
```

```input3
5 5 7
0 0 2 4
2 3 4 5
3 5 5 2
5 5 5 4
0 3 5 1
2 2 4 4
0 5 4 1
```

```output3
YES
```

```input4
1 1 2
0 0 1 1
1 0 0 1
```

```output4
NO
```