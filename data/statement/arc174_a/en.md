Score: $300$ points

## Problem Statement

You are given an integer sequence of length $N$, $A=(A_1,A_2,\dots,A_N)$, and an integer $C$.<br>
Find the maximum possible sum of the elements in $A$ after performing the following operation **at most once**:

- Specify integers $l$ and $r$ such that $1 \le l \le r \le N$, and multiply each of $A_l,A_{l+1},\dots,A_r$ by $C$.

## Constraints

- All input values are integers.
- $1 \le N \le 3 \times 10^5$
- $-10^6 \le C \le 10^6$
- $-10^6 \le A_i \le 10^6$

## Input

The input is given from Standard Input in the following format:

> $N$ $C$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## Output

Print the answer as an integer.

```input1
5 2
-10 10 20 30 -20
```

```output1
90
```

In this input, $A=(-10,10,20,30,-20), C=2$.<br>
After performing the operation once specifying $l=2$ and $r=4$, $A$ will be $(-10,20,40,60,-20)$.<br>
Here, the sum of the elements in $A$ is $90$, which is the maximum value achievable.

```input2
5 1000000
-1 -2 -3 -4 -5
```

```output2
-15
```

In this input, $A=(-1,-2,-3,-4,-5), C=1000000$.<br>
Without performing the operation, the sum of the elements in $A$ is $-15$, which is the maximum value achievable.

```input3
9 -1
-9 9 -8 2 -4 4 -3 5 -3
```

```output3
13
```