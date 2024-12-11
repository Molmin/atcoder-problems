Score : $500$ points

## Problem Statement

Takahashi is at the origin of a two-dimensional plane.<br>
Takahashi will repeat teleporting $N$ times.  In each teleportation, he makes one of the following moves:

- Move from the current coordinates $(x,y)$ to $(x+A,y+B)$
- Move from the current coordinates $(x,y)$ to $(x+C,y+D)$
- Move from the current coordinates $(x,y)$ to $(x+E,y+F)$

There are obstacles on $M$ points $(X_1,Y_1),\ldots,(X_M,Y_M)$ on the plane; he cannot teleport to these coordinates.

How many paths are there resulting from the $N$ teleportations?  Find the count modulo $998244353$.

## Constraints

- $1 \leq N \leq 300$
- $0 \leq M \leq 10^5$
- $-10^9 \leq A,B,C,D,E,F \leq 10^9$
- $(A,B)$, $(C,D)$, and $(E,F)$ are distinct.
- $-10^9 \leq X_i,Y_i \leq 10^9$
- $(X_i,Y_i)\neq(0,0)$
- $(X_i,Y_i)$ are distinct.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A$ $B$ $C$ $D$ $E$ $F$
> 
> $X_1$ $Y_1$
> 
> $X_2$ $Y_2$
> 
> $\vdots$
> 
> $X_M$ $Y_M$

## Output

Print the answer.  

```input1
2 2
1 1 1 2 1 3
1 2
2 2
```

```output1
5
```

The following $5$ paths are possible:

- $(0,0)\to(1,1)\to(2,3)$
- $(0,0)\to(1,1)\to(2,4)$
- $(0,0)\to(1,3)\to(2,4)$
- $(0,0)\to(1,3)\to(2,5)$
- $(0,0)\to(1,3)\to(2,6)$

```input2
10 3
-1000000000 -1000000000 1000000000 1000000000 -1000000000 1000000000
-1000000000 -1000000000
1000000000 1000000000
-1000000000 1000000000
```

```output2
0
```

```input3
300 0
0 0 1 0 0 1
```

```output3
292172978
```