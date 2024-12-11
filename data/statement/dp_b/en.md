Score : $100$ points

## Problem Statement

There are $N$ stones, numbered $1, 2, \ldots, N$.
For each $i$ ($1 \leq i \leq N$), the height of Stone $i$ is $h_i$.

There is a frog who is initially on Stone $1$.
He will repeat the following action some number of times to reach Stone $N$:

- If the frog is currently on Stone $i$, jump to one of the following: Stone $i + 1, i + 2, \ldots, i + K$. Here, a cost of $|h_i - h_j|$ is incurred, where $j$ is the stone to land on.

Find the minimum possible total cost incurred before the frog reaches Stone $N$.

## Constraints

- All values in input are integers.
- $2 \leq N \leq 10^5$
- $1 \leq K \leq 100$
- $1 \leq h_i \leq 10^4$

## Input

Input is given from Standard Input in the following format:

> $N$ $K$
> 
> $h_1$ $h_2$ $\ldots$ $h_N$

## Output

Print the minimum possible total cost incurred.

```input1
5 3
10 30 40 50 20
```

```output1
30
```

If we follow the path $1$ → $2$ → $5$, the total cost incurred would be $|10 - 30| + |30 - 20| = 30$.

```input2
3 1
10 20 10
```

```output2
20
```

If we follow the path $1$ → $2$ → $3$, the total cost incurred would be $|10 - 20| + |20 - 10| = 20$.

```input3
2 100
10 10
```

```output3
0
```

If we follow the path $1$ → $2$, the total cost incurred would be $|10 - 10| = 0$.

```input4
10 4
40 10 20 70 80 10 20 70 80 60
```

```output4
40
```

If we follow the path $1$ → $4$ → $8$ → $10$, the total cost incurred would be $|40 - 70| + |70 - 70| + |70 - 60| = 40$.