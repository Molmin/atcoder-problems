Score : $400$ points

## Problem Statement

We have a string $S$. Initially, $S=$ `1`.<br>
Process $Q$ queries in the following formats in order.

- `1 x` : Append a digit $x$ at the end of $S$.
- `2` : Delete the digit at the beginning of $S$.
- `3` : Print the number represented by $S$ in decimal, modulo $998244353$.

## Constraints

- $1 \leq Q \leq 6 \times 10^5$
- For each query in the first format, $x \in \{1,2,3,4,5,6,7,8,9\}$.
- A query in the second format is given only if $S$ has a length of $2$ or greater.
- There is at least one query in the third format.

## Input

The input is given from Standard Input in the following format:

> $Q$
> 
> $\mathrm{query}_1$
> 
> $\vdots$
> 
> $\mathrm{query}_Q$

Here, $\mathrm{query}_i$ denotes the $i$-th query, which is in one of the following formats:

> $1$ $x$
> $2$
> $3$

## Output

Print $q$ lines, where $q$ is the number of queries in the third format. The $i$-th line $(1 \leq i \leq q)$ should correspond to the $i$-th query in the third format.

```input1
3
3
1 2
3
```

```output1
1
12
```

In the first query, $S$ is `1`, so you should print $1$ modulo $998244353$, that is, $1$.<br>
In the second query, $S$ becomes `12`.<br>
In the third query, $S$ is `12`, so you should print $12$ modulo $998244353$, that is, $12$.  

```input2
3
1 5
2
3
```

```output2
5
```

```input3
11
1 9
1 9
1 8
1 2
1 4
1 4
1 3
1 5
1 3
2
3
```

```output3
0
```

Be sure to print numbers modulo $998244353$.