Score : $600$ points

## Problem Statement

Snuke's town has a subway system, consisting of $N$ stations and $M$ railway lines. The stations are numbered $1$ through $N$. Each line is operated by a company. Each company has an identification number.

The $i$-th ( $1 \leq i \leq M$ ) line connects station $p_i$ and $q_i$ bidirectionally. There is no intermediate station. This line is operated by company $c_i$.

You can change trains at a station where multiple lines are available.

The fare system used in this subway system is a bit strange. When a passenger only uses lines that are operated by the same company, the fare is $1$ yen (the currency of Japan). Whenever a passenger changes to a line that is operated by a different company from the current line, the passenger is charged an additional fare of $1$ yen. In a case where a passenger who changed from some company A's line to another company's line changes to company A's line again, the additional fare is incurred again.

Snuke is now at station $1$ and wants to travel to station $N$ by subway. Find the minimum required fare.

## Constraints

- $2 \leq N \leq 10^5$
- $0 \leq M \leq 2 \times 10^5$
- $1 \leq p_i \leq N$ $(1 \leq i \leq M)$
- $1 \leq q_i \leq N$ $(1 \leq i \leq M)$
- $1 \leq c_i \leq 10^6$ $(1 \leq i \leq M)$
- $p_i \neq q_i$ $(1 \leq i \leq M)$

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $p_1$ $q_1$ $c_1$
> 
> :
> 
> $p_M$ $q_M$ $c_M$

## Output

Print the minimum required fare. If it is impossible to get to station $N$ by subway, print `-1` instead.

```input1
3 3
1 2 1
2 3 1
3 1 2
```

```output1
1
```

Use company $1$'s lines: $1$ → $2$ → $3$. The fare is $1$ yen.

```input2
8 11
1 3 1
1 4 2
2 3 1
2 5 1
3 4 3
3 6 3
3 7 3
4 8 4
5 6 1
6 7 5
7 8 5
```

```output2
2
```

First, use company $1$'s lines: $1$ → $3$ → $2$ → $5$ → $6$. Then, use company $5$'s lines: $6$ → $7$ → $8$. The fare is $2$ yen.

```input3
2 0
```

```output3
-1
```