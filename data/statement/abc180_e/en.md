Score : $500$ points

## Problem Statement

In a three-dimensional space, there are $N$ cities: City $1$ through City $N$. City $i$ is at point $(X_i,Y_i,Z_i)$.

The cost it takes to travel from a city at point $(a,b,c)$ to a city at point $(p,q,r)$ is $|p-a|+|q-b|+\max(0,r-c)$.

Find the minimum total cost it takes to start at City $1$, visit all other cities at least once, and return to City $1$.

## Constraints

- $2 \leq N \leq 17$
- $-10^6 \leq X_i,Y_i,Z_i \leq 10^6$
- No two cities are at the same point.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $X_1$ $Y_1$ $Z_1$
> 
> $\vdots$
> 
> $X_N$ $Y_N$ $Z_N$

## Output

Print the minimum total cost it takes to start at City $1$, visit all other cities at least once, and return to City $1$.

```input1
2
0 0 0
1 2 3
```

```output1
9
```

The cost it takes to travel from City $1$ to City $2$ is $|1-0|+|2-0|+\max(0,3-0)=6$.

The cost it takes to travel from City $2$ to City $1$ is $|0-1|+|0-2|+\max(0,0-3)=3$.

Thus, the total cost will be $9$.

```input2
3
0 0 0
1 1 1
-1 -1 -1
```

```output2
10
```

For example, we can visit the cities in the order $1$, $2$, $1$, $3$, $1$ to make the total cost $10$. Note that we can come back to City $1$ on the way.

```input3
17
14142 13562 373095
-17320 508075 68877
223606 -79774 9979
-24494 -89742 783178
26457 513110 -64591
-282842 7124 -74619
31622 -77660 -168379
-33166 -24790 -3554
346410 16151 37755
-36055 51275 463989
37416 -573867 73941
-3872 -983346 207417
412310 56256 -17661
-42426 40687 -119285
43588 -989435 -40674
-447213 -59549 -99579
45825 7569 45584
```

```output3
6519344
```