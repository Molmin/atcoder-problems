Score : $400$ points

## Problem Statement

You are given $N$ items.<br>
The *value* of the $i$-th item $(1 \leq i \leq N)$ is $v_i$.<br>
Your have to select at least $A$ and at most $B$ of these items.<br>
Under this condition, find the maximum possible arithmetic mean of the values of selected items.<br>
Additionally, find the number of ways to select items so that the mean of the values of selected items is maximized.  

## Constraints

- $1 \leq N \leq 50$
- $1 \leq A,B \leq N$
- $1 \leq v_i \leq 10^{15}$
- Each $v_i$ is an integer.

## Input

The input is given from Standard Input in the following format:

> $N$ $A$ $B$
> 
> $v_1$
> 
> $v_2$
> 
> ...
> 
> $v_N$

## Output

Print two lines.<br>
The first line should contain the maximum possible arithmetic mean of the values of selected items. The output should be considered correct if the absolute or relative error is at most $10^{-6}$.<br>
The second line should contain the number of ways to select items so that the mean of the values of selected items is maximized.

```input1
5 2 2
1 2 3 4 5
```

```output1
4.500000
1
```

The mean of the values of selected items will be maximized when selecting the fourth and fifth items. Hence, the first line of the output should contain $4.5$.<br>
There is no other way to select items so that the mean of the values will be $4.5$, and thus the second line of the output should contain $1$.

```input2
4 2 3
10 20 10 10
```

```output2
15.000000
3
```

There can be multiple ways to select items so that the mean of the values will be maximized.

```input3
5 1 5
1000000000000000 999999999999999 999999999999998 999999999999997 999999999999996
```

```output3
1000000000000000.000000
1
```