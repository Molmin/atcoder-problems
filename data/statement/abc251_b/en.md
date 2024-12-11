Score : $200$ points

## Problem Statement

There are $N$ weights called Weight $1$, Weight $2$, $\dots$, Weight $N$.  Weight $i$ has a mass of $A_i$.<br>
Let us say a positive integer $n$ is a **good integer** if the following condition is satisfied:

- We can choose **at most $3$** different weights so that they have a total mass of $n$.

How many positive integers less than or equal to $W$ are good integers?

## Constraints

- $1 \leq N \leq 300$
- $1 \leq W \leq 10^6$
- $1 \leq A_i \leq 10^6$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $W$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## Output

Print the answer.

```input1
2 10
1 3
```

```output1
3
```

If we choose only Weight $1$, it has a total mass of $1$, so $1$ is a good integer.<br>
If we choose only Weight $2$, it has a total mass of $3$, so $3$ is a good integer.<br>
If we choose Weights $1$ and $2$, they have a total mass of $4$, so $4$ is a good integer.<br>
No other integer is a good integer.  Also, all of $1$, $3$, and $4$ are integers less than or equal to $W$.  Therefore, the answer is $3$.

```input2
2 1
2 3
```

```output2
0
```

There are no good integers less than or equal to $W$.

```input3
4 12
3 3 3 3
```

```output3
3
```

There are $3$ good integers: $3, 6$, and $9$.<br>
For example, if we choose Weights $1$, $2$, and $3$, they have a total mass of $9$, so $9$ is a good integer.<br>
Note that $12$ is **not** a good integer.

```input4
7 251
202 20 5 1 4 2 100
```

```output4
48
```