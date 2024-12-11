Score : $400$ points

## Problem Statement

You are given $N$ intervals of real numbers. The $i$-th $(1 \leq i \leq N)$ interval is $[l_i, r_i]$. Find the number of pairs $(i, j)\,(1 \leq i &lt; j \leq N)$ such that the $i$-th and $j$-th intervals intersect.

## Constraints

- $2 \leq N \leq 5 \times 10^5$
- $0 \leq l_i &lt; r_i \leq 10^9$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $l_1$ $r_1$
> 
> $l_2$ $r_2$
> 
> $\vdots$
> 
> $l_N$ $r_N$

## Output

Print the answer.

```input1
3
1 5
7 8
3 7
```

```output1
2
```

The given intervals are $[1,5], [7,8], [3,7]$. Among these, the $1$-st and $3$-rd intervals intersect, as well as the $2$-nd and $3$-rd intervals, so the answer is $2$.

```input2
3
3 4
2 5
1 6
```

```output2
3
```

```input3
2
1 2
3 4
```

```output3
0
```