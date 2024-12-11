Score : $600$ points

## Problem Statement

Determine whether there is a length-$N$ sequence of positive integers $A=(A_1,A_2,\dots,A_N)$ that satisfies all of the following conditions, and if it exists, construct one.

- $\sum_{i=1}^{N} \frac{1}{A_i} = 1$
- All elements of $A$ are distinct.
- $1 \le A_i \le 10^9(1 \le i \le N)$

You are given $T$ test cases. Find the answer for each of them.

## Constraints

- $1 \le T \le 500$
- $1 \le N \le 500$

## Input

The input is given from Standard Input in the following format:

> $T$
> 
> $\mathrm{case}_1$
> 
> $\mathrm{case}_2$
> 
> $\vdots$
> 
> $\mathrm{case}_T$

Here, $\mathrm{case}_i$ is the $i$-th test case. Each test case is given in the following format:

> $N$

## Output

For each case, if there is not a sequence of positive integers $A=(A_1,A_2,\dots,A_N)$ that satisfies the conditions, print `No`. If there is, print one in the following format:

> Yes
> 
> $A_1$ $A_2$ $\dots$ $A_N$

If there are multiple valid solutions, any of them will be accepted.

```input1
2
3
5
```

```output1
Yes
2 3 6 
Yes
3 4 5 6 20
```

In the first test case, $N=3$.

$A=(2,3,6)$ is valid because $\frac{1}{2} + \frac{1}{3} + \frac{1}{6} = 1$ and it satisfies all other conditions.

In the second test case, $N=5$.

$A=(3,4,5,6,20)$ is valid because $\frac{1}{3} + \frac{1}{4} + \frac{1}{5} + \frac{1}{6} + \frac{1}{20} = 1$ and it satisfies all other conditions.

Note that, for example, $A=(5,5,5,5,5)$ satisfies the first and third conditions, but it is invalid because it contains duplicated elements.