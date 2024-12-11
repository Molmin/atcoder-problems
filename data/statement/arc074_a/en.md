Score : $400$ points

## Problem Statement

There is a bar of chocolate with a height of $H$ blocks and a width of $W$ blocks.
Snuke is dividing this bar into exactly three pieces.
He can only cut the bar along borders of blocks, and the shape of each piece must be a rectangle.

Snuke is trying to divide the bar as evenly as possible.
More specifically, he is trying to minimize $S_{max}$ - $S_{min}$, where $S_{max}$ is the area (the number of blocks contained) of the largest piece, and $S_{min}$ is the area of the smallest piece.
Find the minimum possible value of $S_{max} - S_{min}$.

## Constraints

- $2 \leq H, W \leq 10^5$

## Input

Input is given from Standard Input in the following format:

> $H$ $W$

## Output

Print the minimum possible value of $S_{max} - S_{min}$.

```input1
3 5
```

```output1
0
```

In the division below, $S_{max} - S_{min} = 5 - 5 = 0$.

![2a9b2ef47b750c0b7ba3e865d4fb4203.png](https://atcoder.jp/img/arc074/2a9b2ef47b750c0b7ba3e865d4fb4203.png)

```input2
4 5
```

```output2
2
```

In the division below, $S_{max} - S_{min} = 8 - 6 = 2$.

![a42aae7aaaadc4640ac5cdf88684d913.png](https://atcoder.jp/img/arc074/a42aae7aaaadc4640ac5cdf88684d913.png)

```input3
5 5
```

```output3
4
```

In the division below, $S_{max} - S_{min} = 10 - 6 = 4$.

![eb0ad0cb3185b7ae418e21c472ff7f26.png](https://atcoder.jp/img/arc074/eb0ad0cb3185b7ae418e21c472ff7f26.png)

```input4
100000 2
```

```output4
1
```

```input5
100000 100000
```

```output5
50000
```