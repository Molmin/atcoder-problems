Score : $300$ points

## Problem Statement

You are given a sequence $C$ of $N$ integers. Find the number of sequences $A$ of $N$ integers satisfying all of the following conditions. 

- $1 \leq A_i \leq C_i\, (1 \leq i \leq N)$
- $A_i \neq A_j\, (1 \leq i &lt; j \leq N)$

Since the count may be enormous, print it modulo $(10^9+7)$.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq C_i \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $C_1$ $C_2$ $\ldots$ $C_N$

## Output

Print the number of sequences $A$ of $N$ integers satisfying all of the following conditions, modulo $(10^9+7)$.

```input1
2
1 3
```

```output1
2
```

We have two sequences $A$ satisfying all of the conditions: $(1,2)$ and $(1,3)$.<br>
On the other hand, $A=(1,1)$, for example, does not satisfy the second condition.

```input2
4
3 3 4 4
```

```output2
12
```

```input3
2
1 1
```

```output3
0
```

We have no sequences $A$ satisfying all of the conditions, so we should print $0$.

```input4
10
999999917 999999914 999999923 999999985 999999907 999999965 999999914 999999908 999999951 999999979
```

```output4
405924645
```

Be sure to print the count modulo $(10^9+7)$.