Score : $300$ points

## Problem Statement

We have $N$ fuses connected in series. The $i$-th fuse from the left has a length of $A_i$ centimeters and burns at a constant speed of $B_i$ centimeters per second.

Consider igniting this object from left and right ends simultaneously. Find the distance between the position where the two flames will meet and the left end of the object.

## Constraints

- $1 \leq N \leq 10^5$
- $1 \leq A_i,B_i \leq 1000$
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
> $A_N$ $B_N$

## Output

Print the distance between the position where the two flames will meet and the left end of the object, in centimeters (print just the number).

Your output will be considered correct when its absolute or relative error from our answer is at most $10^{-5}$.

```input1
3
1 1
2 1
3 1
```

```output1
3.000000000000000
```

The two flames will meet at $3$ centimeters from the left end of the object.

```input2
3
1 3
2 2
3 1
```

```output2
3.833333333333333
```

```input3
5
3 9
1 2
4 6
1 5
5 3
```

```output3
8.916666666666668
```