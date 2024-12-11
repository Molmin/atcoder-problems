Score : $400$ points

## Problem Statement

Takahashi has decided to give **one** gift to Aoki and **one** gift to Snuke.<br>
There are $N$ candidates of gifts for Aoki,
and their values are $A_1, A_2, \ldots,A_N$.<br>
There are $M$ candidates of gifts for Snuke,
and their values are $B_1, B_2, \ldots,B_M$.  

Takahashi wants to choose gifts so that the difference in values of the two gifts is at most $D$.

Determine if he can choose such a pair of gifts.  If he can, print the maximum sum of values of the chosen gifts.

## Constraints

- $1\leq N,M\leq 2\times 10^5$
- $1\leq A_i,B_i\leq 10^{18}$
- $0\leq D \leq 10^{18}$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$ $D$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$
> 
> $B_1$ $B_2$ $\ldots$ $B_M$

## Output

If he can choose gifts to satisfy the condition,
print the maximum sum of values of the chosen gifts.
If he cannot satisfy the condition, print $-1$.

```input1
2 3 2
3 10
2 5 15
```

```output1
8
```

The difference of values of the two gifts should be at most $2$.<br>
If he gives a gift with value $3$ to Aoki and another with value $5$ to Snuke, the condition is satisfied, achieving the maximum possible sum of values.<br>
Thus, $3+5=8$ should be printed.

```input2
3 3 0
1 3 3
6 2 7
```

```output2
-1
```

He cannot choose gifts to satisfy the condition.
Note that the candidates of gifts for a person may contain multiple gifts with the same value.

```input3
1 1 1000000000000000000
1000000000000000000
1000000000000000000
```

```output3
2000000000000000000
```

Note that the answer may not fit into a $32$-bit integer type.

```input4
8 6 1
2 5 6 5 2 1 7 9
7 2 5 5 2 4
```

```output4
14
```