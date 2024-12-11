Score : $350$ points

## Problem Statement

There are $N$ villages on a number line. The $i$-th village is located at coordinate $X_i$, and has $P_i$ villagers.

Answer $Q$ queries. The $i$-th query is in the following format:

- Given integers $L_i$ and $R_i$, find the total number of villagers living in villages located between coordinates $L_i$ and $R_i$, inclusive.

## Constraints

- $1\leq N,Q\leq 2\times 10^5$
- $-10^9\leq X_1 &lt; X_2 &lt; \ldots &lt; X_N \leq 10^9$
- $1\leq P_i\leq 10^9$
- $-10^9\leq L_i \leq R_i \leq 10^9$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $X_1$ $\ldots$ $X_N$
> 
> $P_1$ $\ldots$ $P_N$
> 
> $Q$
> 
> $L_1$ $R_1$
> 
> $\vdots$
> 
> $L_Q$ $R_Q$

## Output

Print $Q$ lines.

The $i$-th line$(1\leq i \leq Q)$ should contain the answer to the $i$-th query.

```input1
4
1 3 5 7
1 2 3 4
4
1 1
2 6
0 10
2 2
```

```output1
1
5
10
0
```

Consider the first query. The villages between coordinates $1$ and $1$ are the village at coordinate $1$, with $1$ villager. Hence, the answer is $1$.

Consider the second query. The villages between coordinates $2$ and $6$ are the villages at coordinates $3$ and $5$, with $2$ and $3$ villagers, respectively. Hence, the answer is $2+3=5$.

```input2
7
-10 -5 -3 -1 0 1 4
2 5 6 5 2 1 7
8
-7 7
-1 5
-10 -4
-8 10
-5 0
-10 5
-8 7
-8 -3
```

```output2
26
15
7
26
18
28
26
11
```