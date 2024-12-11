Score: $800$ points

## Problem Statement

Divide a cube with a side length of $N$ into $N^3$ smaller cubes, each with a side length of $1$, and select $K$ of these smaller cubes.
Construct one way to select them so that, when viewed from any of the three directions perpendicular to the faces of the cubes, all $K$ selected cubes are visible and appear in the same shape.

To formulate the problem precisely, we associate each smaller cube after division with a triple of integers $(x_i, y_i, z_i)$.

Construct and print one set of $K$ triples of integers $(x_i, y_i, z_i)$ that satisfy the following conditions.

- $0 \leq x_i, y_i, z_i &lt; N$
- $\left\lbrace (x_i, y_i) \, \middle| \, 1 \le i \le K \right\rbrace = \left\lbrace (y_i, z_i) \, \middle| \, 1 \le i \le K \right\rbrace = \left\lbrace (z_i, x_i) \, \middle| \, 1 \le i \le K \right\rbrace$
- The set mentioned in the previous item has $K$ elements. That is, $(x_i, y_i) \neq (x_j, y_j)$ for $i \neq j$.

It can be shown that a solution exists for any input satisfying the constraints.

## Constraints

- All input values are integers.
- $1 \leq N \leq 500$
- $1 \leq K \leq N^2$

## Input

The input is given from Standard Input in the following format:

> $N$ $K$

## Output

Print your answer in the following format:

> $x_1$ $y_1$ $z_1$
> 
> $x_2$ $y_2$ $z_2$
> 
> $\vdots$
> 
> $x_K$ $y_K$ $z_K$

If multiple solutions exist, any of them will be accepted.

```input1
3 3
```

```output1
0 0 0
1 1 1
2 2 2
```

```input2
2 4
```

```output2
0 0 1
0 1 0
1 0 0
1 1 1
```

```input3
1 1
```

```output3
0 0 0
```