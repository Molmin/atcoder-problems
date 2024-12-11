Score : $600$ points

## Problem Statement

$N$ students are about to go to school. Student $i$ belongs to Class $C_i$.

After leaving home, each student will head to school while repeatedly joining up with a group of other students. Once students join up with each other, they will not separate.

You will be given $Q$ queries that should be processed in order. There are two kinds of queries, in the following formats, that mean the following:

- `1 a b`: The group containing Student $a$ and the group containing Student $b$ merges. (If they are already in the same group, nothing happens.)
- `2 x y`: You are asked to find the number of students belonging to Class $y$ who are already in the same group as Student $x$ (including Student $x$) at the time of this query.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq Q \leq 2 \times 10^5$
- $1 \leq C_i,a,b,x,y \leq N$
- In a query in the format `1 a b`, $a \neq b$.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $Q$
> 
> $C_1$ $\ldots$ $C_N$
> 
> $Query_1$
> 
> $\vdots$
> 
> $Query_Q$

## Output

Print the answers to the queries in the format `2 x y`, each in its own line, in order.

```input1
5 5
1 2 3 2 1
1 1 2
1 2 5
2 1 1
1 3 4
2 3 4
```

```output1
2
0
```

At the time of the $3$-rd query, Student $1$ has joined up with Student $2$ and $5$. Among these three students, two belong to Class $1$.

At the time of the $5$-th query, Student $3$ has joined up with Student $4$. Among these two students, none belongs to Class $4$.

```input2
5 4
2 2 2 2 2
1 1 2
1 1 3
1 2 3
2 2 2
```

```output2
3
```

There may be queries in the format `1 a b` for students who already belong to the same group.

```input3
12 9
1 2 3 1 2 3 1 2 3 1 2 3
1 1 2
1 3 4
1 5 6
1 7 8
2 2 1
1 9 10
2 5 6
1 4 8
2 6 1
```

```output3
1
0
0
```