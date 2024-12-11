Score : $500$ points

## Problem Statement

There are $N$ children standing in a line from left to right. The activeness of the $i$-th child from the left is $A_i$.

You can rearrange these children just one time in any order you like.

When a child who originally occupies the $x$-th position from the left in the line moves to the $y$-th position from the left, that child earns $A_x \times |x-y|$ happiness points.

Find the maximum total happiness points the children can earn.

## Constraints

- $2 \leq N \leq 2000$
- $1 \leq A_i \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $...$ $A_N$

## Output

Print the maximum total happiness points the children can earn.

```input1
4
1 3 4 2
```

```output1
20
```

If we move the $1$-st child from the left to the $3$-rd position from the left, the $2$-nd child to the $4$-th position, the $3$-rd child to the $1$-st position, and the $4$-th child to the $2$-nd position, the children earns $1 \times |1-3|+3 \times |2-4|+4 \times |3-1|+2 \times |4-2|=20$ happiness points in total.

```input2
6
5 5 6 1 1 1
```

```output2
58
```

```input3
6
8 6 9 1 2 1
```

```output3
85
```