Score : $300$ points

## Problem Statement

We have a string $S$ of length $2N$.<br>
You are given $Q$ queries on this string.<br>
In the $i$-th query, given three integers $T_i$, $A_i$, and $B_i$, do the following:

- if $T_i = 1$: swap the $A_i$-th and $B_i$-th characters of $S$;
- if $T_i = 2$: swap the first $N$ characters and last $N$ characters of $S$ (the values $A_i$ and $B_i$ are not used).<br>
  For example, if $S$ is `FLIP`, this query makes it `IPFL`.

Print the string $S$ after processing all $Q$ queries in the order they are given.

## Constraints

- $1 \le N \le 2 \times 10^5$
- $S$ is a string of length $2N$ consisting of uppercase English letters.
- $1 \le Q \le 3 \times 10^5$
- $T_i$ is $1$ or $2$.
- If $T_i = 1$, $1 \le A_i \lt B_i \le 2N$.
- If $T_i = 2$, $A_i = B_i = 0$.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $S$
> 
> $Q$
> 
> $T_1$ $A_1$ $B_1$
> 
> $T_2$ $A_2$ $B_2$
> 
> $T_3$ $A_3$ $B_3$
> 
> $\hspace{21pt} \vdots$
> 
> $T_Q$ $A_Q$ $B_Q$

## Output

Print the string $S$ after processing the queries.

```input1
2
FLIP
2
2 0 0
1 1 4
```

```output1
LPFI
```

The $1$-st query swaps the first $N$ characters and last $N$ characters of $S$, making it `IPFL`.<br>
The $2$-nd query swaps the $1$-st and $4$-th characters of $S$, making it `LPFI`.  

```input2
2
FLIP
6
1 1 3
2 0 0
1 1 2
1 2 3
2 0 0
1 1 4
```

```output2
ILPF
```