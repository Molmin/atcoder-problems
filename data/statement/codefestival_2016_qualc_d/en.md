Score : $800$ points

## Problem Statement

Mr. Takahashi has in his room an art object with $H$ rows and $W$ columns, made up of $H \times W$ blocks.
Each block has a color represented by a lowercase English letter (`a`-`z`).
The color of the block at the $i$-th row and $j$-th column is $c_{i,j}$.  

Mr. Takahashi would like to dismantle the object, finding it a bit kitschy for his tastes.
The dismantling is processed by repeating the following operation:  

- Choose one of the $W$ columns and push down that column one row.
The block at the bottom of that column disappears.

Each time the operation is performed, a cost is incurred.
Since blocks of the same color have a property to draw each other together, the cost of the operation is the number of the pairs of blocks $(p, q)$ such that:

- The block $p$ is in the selected column.
- The two blocks $p$ and $q$ are horizontally adjacent (before pushing down the column).
- The two blocks $p$ and $q$ have the same color.

Mr. Takahashi dismantles the object by repeating the operation $H \times W$ times to get rid of all the blocks.
Compute the minimum total cost to dismantle the object.

## Constraints

- $1 \leq H \leq 300$
- $2 \leq W \leq 300$
- All characters $c_{i,j}$ are lowercase English letters (`a`-`z`).

## Partial Score

- In test cases worth $300$ points, $W = 3$.

## Input

The input is given from Standard Input in the following format:

> $H$ $W$
> 
> $c_{1,1}c_{1,2}$..$c_{1,W}$
> 
> $c_{2,1}c_{2,2}$..$c_{2,W}$
> 
> $:$
> 
> $c_{H,1}c_{H,2}$..$c_{H,W}$

## Output

Print the minimum total cost to dismantle the object.

```input1
2 3
rrr
brg
```

```output1
2
```

For example, the total cost of $2$ can be achieved by performing the operation as follows and this is the minimum value.

![ccb25ed6f1df9367829b68523e1deff4.png](https://atcoder.jp/img/code-festival-2016-qualc/ccb25ed6f1df9367829b68523e1deff4.png)

```input2
6 3
xya
xya
ayz
ayz
xaz
xaz
```

```output2
0
```

The total cost of $0$ can be achieved by first pushing down all blocks of the middle column, then all of the left column, and all of the right column.

```input3
4 2
ay
xa
xy
ay
```

```output3
0
```

The total cost of $0$ can be achieved by the following operations:

- pushing down the right column one row;
- pushing down the left column one row;
- pushing down all of the right column;
- and pushing down all of the left column.

```input4
5 5
aaaaa
abbba
ababa
abbba
aaaaa
```

```output4
24
```

```input5
7 10
xxxxxxxxxx
ccccxxffff
cxxcxxfxxx
cxxxxxffff
cxxcxxfxxx
ccccxxfxxx
xxxxxxxxxx
```

```output5
130
```