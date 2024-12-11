Score : $500$ points

## Problem Statement

There are $N$ 7's drawn in the first quadrant of a plane.

The $i$-th 7 is a figure composed of a segment connecting $(x_i-1,y_i)$ and $(x_i,y_i)$, and a segment connecting $(x_i,y_i-1)$ and $(x_i,y_i)$.

You can choose zero or more from the $N$ 7's and delete them.

What is the maximum possible number of 7's that are wholly visible from the origin after the optimal deletion?

Here, the $i$-th 7 is wholly visible from the origin if and only if:

- the interior (excluding borders) of the quadrilateral whose vertices are the origin, $(x_i-1,y_i)$, $(x_i,y_i)$, $(x_i,y_i-1)$ does not intersect with the other 7's.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq x_i,y_i \leq 10^9$
- $(x_i,y_i) \neq (x_j,y_j)\ (i \neq j)$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $x_1$ $y_1$
> 
> $x_2$ $y_2$
> 
> $\hspace{0.45cm}\vdots$
> 
> $x_N$ $y_N$

## Output

Print the maximum possible number of 7's that are wholly visible from the origin.

```input1
3
1 1
2 1
1 2
```

```output1
2
```

If the first 7 is deleted, the other two 7's ― the second and third ones ― will be wholly visible from the origin, which is optimal.

If no 7's are deleted, only the first 7 is wholly visible from the origin.

```input2
10
414598724 87552841
252911401 309688555
623249116 421714323
605059493 227199170
410455266 373748111
861647548 916369023
527772558 682124751
356101507 249887028
292258775 110762985
850583108 796044319
```

```output2
10
```

It is best to keep all 7's.