Score: $400$ points

## Problem statement

We have an $H \times W$ grid whose squares are painted black or white. The square at the $i$-th row from the top and the $j$-th column from the left is denoted as $(i, j)$.<br>
Snuke would like to play the following game on this grid. At the beginning of the game, there is a character called Kenus at square $(1, 1)$. The player repeatedly moves Kenus up, down, left or right by one square. The game is completed when Kenus reaches square $(H, W)$ passing only white squares.<br>
Before Snuke starts the game, he can change the color of some of the white squares to black. However, he cannot change the color of square $(1, 1)$ and $(H, W)$. Also, changes of color must all be carried out before the beginning of the game.<br>
When the game is completed, Snuke's score will be the number of times he changed the color of a square before the beginning of the game. Find the maximum possible score that Snuke can achieve, or print $-1$ if the game cannot be completed, that is, Kenus can never reach square $(H, W)$ regardless of how Snuke changes the color of the squares.  

The color of the squares are given to you as characters $s_{i, j}$. If square $(i, j)$ is initially painted by white, $s_{i, j}$ is `.`; if square $(i, j)$ is initially painted by black, $s_{i, j}$ is `#`.

## Constraints

- $H$ is an integer between $2$ and $50$ (inclusive).
- $W$ is an integer between $2$ and $50$ (inclusive).
- $s_{i, j}$ is `.` or `#` $(1 \leq i \leq H, 1 \leq j \leq W)$.
- $s_{1, 1}$ and $s_{H, W}$ are `.`.

## Input

Input is given from Standard Input in the following format:

> $H$ $W$
> 
> $s_{1, 1}s_{1, 2}s_{1, 3} ... s_{1, W}$
> 
> $s_{2, 1}s_{2, 2}s_{2, 3} ... s_{2, W}$
> 
>  $:$   $:$
> 
> $s_{H, 1}s_{H, 2}s_{H, 3} ... s_{H, W}$

## Output

Print the maximum possible score that Snuke can achieve, or print $-1$ if the game cannot be completed.

```input1
3 3
..#
#..
...
```

```output1
2
```

The score $2$ can be achieved by changing the color of squares as follows:

![Explanation of Sample 1](https://img.atcoder.jp/abc088/bc944898899615e35f898654b68cd517.png)

```input2
10 37
.....................................
...#...####...####..###...###...###..
..#.#..#...#.##....#...#.#...#.#...#.
..#.#..#...#.#.....#...#.#...#.#...#.
.#...#.#..##.#.....#...#.#.###.#.###.
.#####.####..#.....#...#..##....##...
.#...#.#...#.#.....#...#.#...#.#...#.
.#...#.#...#.##....#...#.#...#.#...#.
.#...#.####...####..###...###...###..
.....................................
```

```output2
209
```