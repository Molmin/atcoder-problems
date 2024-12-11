Score : $300$ points

## Problem Statement

There are $N$ people, conveniently numbered $1$ through $N$.
They were standing in a row yesterday, but now they are unsure of the order in which they were standing.
However, each person remembered the following fact: the absolute difference of the number of the people who were standing to the left of that person, and the number of the people who were standing to the right of that person.
According to their reports, the difference above for person $i$ is $A_i$.

Based on these reports, find the number of the possible orders in which they were standing.
Since it can be extremely large, print the answer modulo $10^9+7$.
Note that the reports may be incorrect and thus there may be no consistent order.
In such a case, print $0$.

## Constraints

- $1 \leq N \leq 10^5$
- $0 \leq A_i \leq N-1$

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $...$ $A_N$

## Output

Print the number of the possible orders in which they were standing, modulo $10^9+7$.

```input1
5
2 4 4 0 2
```

```output1
4
```

There are four possible orders, as follows:

- $2,1,4,5,3$
- $2,5,4,1,3$
- $3,1,4,5,2$
- $3,5,4,1,2$

```input2
7
6 4 0 2 4 0 2
```

```output2
0
```

Any order would be inconsistent with the reports, thus the answer is $0$.

```input3
8
7 5 1 1 7 3 5 3
```

```output3
16
```