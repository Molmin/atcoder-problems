Score : $250$ points

## Problem Statement

You are given a sequence $A$ of length $N$.<br>
Freely choose exactly $K$ elements from $A$ and remove them, then concatenate the remaining elements in their original order to form a new sequence $B$.<br>
Find the minimum possible value of this: the maximum value of $B$ minus the minimum value of $B$.

## Constraints

- All inputs are integers.
- $1 \le K &lt; N \le 2 \times 10^5$
- $1 \le A_i \le 10^9$

## Input

The input is given from Standard Input in the following format:

> $N$ $K$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## Output

Print the answer as an integer.

```input1
5 2
3 1 5 4 9
```

```output1
2
```

Consider removing exactly two elements from $A=(3,1,5,4,9)$.

- For example, if you remove the 2nd element $1$ and the 5th element $9$, the resulting sequence is $B=(3,5,4)$.-   - In this case, the maximum value of $B$ is $5$ and the minimum value is $3$, so (maximum value of $B$) $-$ (minimum value of $B$) $=2$, which is the minimum possible value.

```input2
6 5
1 1 1 1 1 1
```

```output2
0
```

```input3
8 3
31 43 26 6 18 36 22 13
```

```output3
18
```