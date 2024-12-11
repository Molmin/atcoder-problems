Score : $300$ points

## Problem Statement

Given an array of $N$ integers $A=(A_1,A_2,...,A_N)$, find the number of pairs $(i,j)$ of integers satisfying all of the following conditions:

- $1 \le i &lt; j \le N$
- $A_i \neq A_j$

## Constraints

- All values in input are integers.
- $2 \le N \le 3 \times 10^5$
- $1 \le A_i \le 10^9$

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## Output

Print the answer as an integer.

```input1
3
1 7 1
```

```output1
2
```

In this input, we have $A=(1,7,1)$.

- For the pair $(1,2)$, $A_1 \neq A_2$.
- For the pair $(1,3)$, $A_1 = A_3$.
- For the pair $(2,3)$, $A_2 \neq A_3$.

```input2
10
1 10 100 1000 10000 100000 1000000 10000000 100000000 1000000000
```

```output2
45
```

```input3
20
7 8 1 1 4 9 9 6 8 2 4 1 1 9 5 5 5 3 6 4
```

```output3
173
```