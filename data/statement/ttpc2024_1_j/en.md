Score: $100$ points

## Problem Statement

You are given positive integers $H$ and $W$. You aim to draw an $H$-row by $W$-column grid on the coordinate plane using several "U-shapes."

To draw one U-shape, perform the following operation:

- Choose integers $1 \le x \le H$ and $1 \le y \le W$.
- From the following four line segments, select any three distinct ones:-   - The line segment connecting $(x-1, y-1)$ and $(x-1, y)$
-   - The line segment connecting $(x-1, y-1)$ and $(x, y-1)$
-   - The line segment connecting $(x, y)$ and $(x-1, y)$
-   - The line segment connecting $(x, y)$ and $(x, y-1)$
- Draw the selected three line segments on the coordinate plane.

However, the line segments you draw must not share any points (other than endpoints) with any line segments drawn previously.

Is it possible to draw all the length-$1$ line segments connecting grid points with $0 \le x \le H$ and $0 \le y \le W$ by repeating this operation? If possible, provide an example.

## Constraints

- All input values are integers.
- $1 \le H, W \le 1000$

## Partial Score

$10$ points will be awarded for passing the testset satisfying the additional constraint $H,W\le 5$.

## Input

The input is given from Standard Input in the following format:

> $H$ $W$

## Output

If it is impossible to draw the grid by repeating the operation, output `No`.

If it is possible, output such an operation sequence in the following format:

> Yes
> 
> $S_1$
> 
> $\vdots$
> 
> $S_H$

Here, $S_1, \dots, S_H$ are strings of length $W$, and the $j$-th character of $S_i$ ($1 \le i \le H$, $1 \le j \le W$) is defined as follows:

- If there is no operation with $(x, y) = (i, j)$, the $j$-th character of $S_i$ is `.`.
- Otherwise, there is exactly one operation with $(x, y) = (i, j)$. In that operation:-   - If the three selected line segments are those *excluding* "the line segment connecting $(x-1, y-1)$ and $(x-1, y)$," then the $j$-th character of $S_i$ is `v`.
-   - If the three selected line segments are those *excluding* "the line segment connecting $(x-1, y-1)$ and $(x, y-1)$," then the $j$-th character of $S_i$ is `&amp;amp;gt;`.
-   - If the three selected line segments are those *excluding* "the line segment connecting $(x, y)$ and $(x-1, y)$," then the $j$-th character of $S_i$ is `&amp;amp;lt;`.
-   - If the three selected line segments are those *excluding* "the line segment connecting $(x, y)$ and $(x, y-1)$," then the $j$-th character of $S_i$ is `^`.

Note that the judge is case-insensitive for `Yes` and `No`.

Refer to the sample inputs and the visualizer for further clarification.

## Visualizer

You can use the visualizer via the following link:

[https://img.atcoder.jp/ttpc2024_1/grid_construction_visualizer_9cdb863ae8b195d0a47d8d6e2c9e05cd.html](https://img.atcoder.jp/ttpc2024_1/grid_construction_visualizer_9cdb863ae8b195d0a47d8d6e2c9e05cd.html)

```input1
3 3
```

```output1
Yes
<<^
v.^
v>>
```

As shown in the figure, you can draw a $3 \times 3$ grid by drawing U-shapes. Note that no U-shape is drawn at the location corresponding to the center cell. (For clarity, the U-shapes are colored, but this is irrelevant to the problem.)

![](https://img.atcoder.jp/ttpc2024_1/5c8124eb7c9068ad7af0603c6077344b.svg)

```input2
4 4
```

```output2
No
```

```input3
4 5
```

```output3
No
```