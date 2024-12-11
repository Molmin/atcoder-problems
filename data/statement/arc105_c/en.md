Score : $500$ points

## Problem Statement

There are $N$ camels numbered $1$ through $N$.

The weight of Camel $i$ is $w_i$.

You will arrange the camels in a line and make them cross a bridge consisting of $M$ parts.

Before they cross the bridge, you can choose their order in the line - it does not have to be Camel $1$, $2$, $\ldots$, $N$ from front to back - and specify the distance between each adjacent pair of camels to be any non-negative real number.
The camels will keep the specified distances between them while crossing the bridge.

The $i$-th part of the bridge has length $l_i$ and weight capacity $v_i$.
If the sum of the weights of camels inside a part (excluding the endpoints) exceeds $v_i$, the bridge will collapse.

Determine whether it is possible to make the camels cross the bridge without it collapsing. If it is possible, find the minimum possible distance between the first and last camels in the line in such a case.

It can be proved that the answer is always an integer, so print an integer.

## Constraints

- All values in input are integers.
- $2 \leq N \leq 8$
- $1 \leq M \leq 10^5$
- $1 \leq w_i,l_i,v_i \leq 10^8$

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $w_1$ $w_2$ $\cdots$ $w_N$
> 
> $l_1$ $v_1$
> 
> $\vdots$
> 
> $l_M$ $v_M$

## Output

If the bridge will unavoidably collapse when the camels cross the bridge, print `-1`.
Otherwise, print the minimum possible distance between the first and last camels in the line when the camels cross the bridge without it collapsing.

```input1
3 2
1 4 2
10 4
2 6
```

```output1
10
```

- It is possible to make the camels cross the bridge without it collapsing by, for example, arranging them in the order $1$, $3$, $2$ from front to back, and setting the distances between them to be $0$, $10$.-   - For Part $1$ of the bridge, there are moments when only Camel $1$ and $3$ are inside the part and moments when only Camel $2$ is inside the part. In both cases, the sum of the weights of camels does not exceed $4$ - the weight capacity of Part $1$ - so there is no collapse.
-   - For Part $2$ of the bridge, there are moments when only Camel $1$ and $3$ are inside the part and moments when only Camel $2$ is inside the part. In both cases, the sum of the weights of camels does not exceed $6$ - the weight capacity of Part $2$ - so there is no collapse.
- Note that the distance between two camels may be $0$ and that camels on endpoints of a part are not considered to be inside the part.

```input2
2 1
12 345
1 1
```

```output2
-1
```

- Print `-1` if the bridge will unavoidably collapse.

```input3
8 1
1 1 1 1 1 1 1 1
100000000 1
```

```output3
700000000
```

```input4
8 20
57 806 244 349 608 849 513 857
778 993
939 864
152 984
308 975
46 860
123 956
21 950
850 876
441 899
249 949
387 918
34 965
536 900
875 889
264 886
583 919
88 954
845 869
208 963
511 975
```

```output4
3802
```