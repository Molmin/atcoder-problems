Score : $800$ points

## Problem Statement

You are given integers $W,H,L,R,D,U$.

A town of Kyoto is on the two-dimensional plane.

In the town, there is exactly one block at each lattice point $(x,y)$ that satisfies all of the following conditions. There are no blocks at any other points.

- $0\leq x\leq W$
- $0\leq y\leq H$
- $x&lt;L$ or $R&lt;x$ or $y&lt;D$ or $U&lt;y$

Snuke traveled through the town as follows.

- First, he chooses one block and stands there.
- Then, he performs the following operation any number of times (possibly zero):-   - Move one unit in the positive direction of the $x$-axis or the positive direction of the $y$-axis. However, the point after moving must also have a block.

Print the number, modulo $998244353$, of possible paths that Snuke could have taken.

## Constraints

- $0\leq L\leq R\leq W\leq 10^6$
- $0\leq D\leq U\leq H\leq 10^6$
- There is at least one block.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $W$ $H$ $L$ $R$ $D$ $U$

## Output

Print the answer.

```input1
4 3 1 2 2 3
```

```output1
192
```

The following are examples of possible paths. Here, a path is represented by listing the lattice points visited in order.

- $(3,0)$
- $(0,0)\rightarrow (1,0)\rightarrow (2,0)\rightarrow (2,1)\rightarrow (3,1)\rightarrow (3,2)\rightarrow (4,2)\rightarrow (4,3)$
- $(0,1)\rightarrow (0,2)$

There are $192$ possible paths.

```input2
10 12 4 6 8 11
```

```output2
4519189
```

```input3
192 25 0 2 0 9
```

```output3
675935675
```

Do not forget to print the number of paths modulo $998244353$.