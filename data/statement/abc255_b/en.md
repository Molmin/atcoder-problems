Score : $200$ points

## Problem Statement

There are $N$ people numbered $1, 2, \dots, N$ in the $xy$-plane. Person $i$ is at the coordinates $(X_i, Y_i)$.<br>
$K$ of these people, Persons $A_1, A_2, \dots, A_K$, will receive lights of the same strength.<br>
When a person at coordinates $(x, y)$ has a light of strength $R$, it lights up the interior of a circle of radius $R$ centered at $(x, y)$ (including the boundary).<br>
Find the minimum strength of the lights needed for every person to be lit by at least one light.  

## Constraints

- All values in input are integers.
- $1 \le K &lt; N \le 1000$
- $1 \le A_1 &lt; A_2 &lt; \dots &lt; A_K \le N$
- $|X_i|,|Y_i| \le 10^5$
- $(X_i,Y_i) \neq (X_j,Y_j)$, if $i \neq j$.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$
> 
> $A_1$ $A_2$ $\dots$ $A_K$
> 
> $X_1$ $Y_1$
> 
> $X_2$ $Y_2$
> 
> $\vdots$
> 
> $X_N$ $Y_N$

## Output

Print the answer as a real number.<br>
Your output will be considered correct if its absolute or relative error from the judge's output is at most $10^{-5}$.

```input1
4 2
2 3
0 0
0 1
1 2
2 0
```

```output1
2.23606797749978969
```

This input contains four people. Among them, Persons $2$ and $3$ will have lights.<br>
Every person will be lit by at least one light if $R \ge \sqrt{5} \approx 2.236068$.

```input2
2 1
2
-100000 -100000
100000 100000
```

```output2
282842.712474619009
```

```input3
8 3
2 6 8
-17683 17993
93038 47074
58079 -57520
-41515 -89802
-72739 68805
24324 -73073
71049 72103
47863 19268
```

```output3
130379.280458974768
```