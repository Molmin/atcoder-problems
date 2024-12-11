Score : $900$ points

## Problem Statement

Given is a tree with $N$ vertices.
The vertices are numbered $1$ through $N$, and the $i$-th edge connects Vertex $A_i$ and Vertex $B_i$.

Find the number of pairs of integers $(x,y)$ that satisfy the following conditions.

- <p>$0 \leq x \leq N$.</p>
- <p>There is a way to choose exactly $x$ vertices from the tree so that the sum of their degrees equals $y$.</p>

## Constraints

- $2 \leq N \leq 2 \times 10^5$
- $1 \leq A_i &lt; B_i \leq N$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $B_1$
> 
> $A_2$ $B_2$
> 
> $\vdots$
> 
> $A_{N-1}$ $B_{N-1}$

## Output

Print the answer.

```input1
3
1 2
2 3
```

```output1
6
```

The following six pairs $(x,y)$ satisfy the conditions.

- $x=0,y=0$
- $x=1,y=1$
- $x=1,y=2$
- $x=2,y=2$
- $x=2,y=3$
- $x=3,y=4$

$x=2,y=3$, for example, satisfies the condition because choosing Vertex $1$ and Vertex $2$ achieves the total degree of $3$.

```input2
5
1 2
2 3
2 4
4 5
```

```output2
16
```

```input3
10
2 9
8 10
2 10
4 6
5 6
1 8
2 7
3 6
6 8
```

```output3
65
```