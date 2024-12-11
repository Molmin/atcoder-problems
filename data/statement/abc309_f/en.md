Score : $525$ points

## Problem Statement

There are $N$ boxes.  The $i$-th box has a shape of a rectangular cuboid whose height, width, and depth are $h_i,w_i$, and $d_i$, respectively.  

Determine if there are two boxes such that one's height, width, and depth are strictly greater than those of the other after rotating them if necessary.  

## Constraints

- $2 \leq N \leq 2 \times 10^5$
- $1 \leq h_i,w_i,d_i \leq 10^9$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $h_1$ $w_1$ $d_1$
> 
> $\vdots$
> 
> $h_N$ $w_N$ $d_N$

## Output

Print `Yes` if there are two boxes such that one's height, width, and depth are strictly greater than those of the other after rotating them if necessary; print `No` otherwise.

```input1
3
19 8 22
10 24 12
15 25 11
```

```output1
Yes
```

If you rotate the $2$-nd box to swap its height and depth, the $3$-rd box will have greater height, depth, and width.

```input2
3
19 8 22
10 25 12
15 24 11
```

```output2
No
```

```input3
2
1 1 2
1 2 2
```

```output3
No
```