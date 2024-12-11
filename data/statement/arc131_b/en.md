Score : $300$ points

## Problem Statement

We have a canvas represented as a $H \times W$ grid. Let $(i, j)$ denote the square at the $i$-th row $(1 \leq i \leq H)$ from the top and $j$-th column $(1 \leq j \leq W)$ from the left.

Initially, $(i, j)$ is in the following state.

- If $c_{i, j}=$`1`: painted in Color 1.
- If $c_{i, j}=$`2`: painted in Color 2.
- If $c_{i, j}=$`3`: painted in Color 3.
- If $c_{i, j}=$`4`: painted in Color 4.
- If $c_{i, j}=$`5`: painted in Color 5.
- If $c_{i, j}=$`.`: not yet painted.

Create a way to paint each unpainted square in Color 1, 2, 3, 4, or 5 so that no two horizontally or vertically adjacent squares have the same color. It is not allowed to change the color of a square that is already painted.

## Constraints

- $1 \leq H, W \leq 700$
- $c_{i, j}$ is `1`, `2`, `3`, `4`, `5`, or `.`.
- At least one square is unpainted.
- There is at least one way to paint the squares under the condition.

## Input

Input is given from Standard Input in the following format:

> $H$ $W$
> 
> $c_{1, 1}$$c_{1, 2}$$\ldots$$c_{1, W}$
> 
> $c_{2, 1}$$c_{2, 2}$$\ldots$$c_{2, W}$
> 
>  $:$
> 
> $c_{H, 1}$$c_{H, 2}$$\ldots$$c_{H, W}$

## Output

Print a way to paint the squares in the following format. Here, $d_{i, j}$ should be the color of $(i, j)$ after painting the squares (it should be `1`, `2`, `3`, `4`, or `5`).

> $d_{1, 1}$$d_{1, 2}$$\ldots$$d_{1, W}$
> 
> $d_{2, 1}$$d_{2, 2}$$\ldots$$d_{2, W}$
> 
>  $:$
> 
> $d_{H, 1}$$d_{H, 2}$$\ldots$$d_{H, W}$

If there are multiple ways to paint the squares under the condition, you may print any of them.

```input1
3 3
...
...
...
```

```output1
132
313
541
```

Sample Output 1 corresponds to the following coloring.

![](https://img.atcoder.jp/arc131/35bb8a98465fbb2c889ea532d0985ff0.png)

```input2
5 7
1.2.3.4
.5.1.2.
3.4.5.1
.2.3.4.
5.1.2.3
```

```output2
1425314
2531425
3142531
4253142
5314253
```

Sample Output 2 corresponds to the following coloring.

![](https://img.atcoder.jp/arc131/a2fc3903965fd871d25e905fb95dbc6a.png)

```input3
1 1
.
```

```output3
4
```