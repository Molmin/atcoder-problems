Score : $500$ points

## Problem Statement

There are $N$ cities numbered city $1$, city $2$, $\ldots$, and city $N$.<br>
There are also one-way teleporters that send you to different cities.
Whether a teleporter can send you directly from city $i$ $(1\leq i\leq N)$ to another is represented by a length-$M$ string $S_i$ consisting of `0` and `1`.  Specifically, for $1\leq j\leq N$,

- if $1\leq j-i\leq M$ and the $(j-i)$-th character of $S_i$ is `1`, then a teleporter can send you directly from city $i$ to city $j$;
- otherwise, it cannot send you directly from city $i$ to city $j$.

Solve the following problem for $k=2,3,\ldots, N-1$:

Can you travel from city $1$ to city $N$ **without visiting city $k$** by repeatedly using a teleporter?
If you can, print the minimum number of times you need to use a teleporter;
otherwise, print $-1$.

## Constraints

- $3 \leq N \leq 10^5$
- $1\leq M\leq 10$
- $M&lt;N$
- $S_i$ is a string of length $M$ consisting of `0` and `1`.
- If $i+j &gt; N$, then the $j$-th character of $S_i$ is `0`.
- $N$ and $M$ are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $S_1$
> 
> $S_2$
> 
> $\vdots$
> 
> $S_N$

## Output

Print $(N-2)$ integers, separated by spaces, in a single line.
The $i$-th $(1\leq i\leq N-2)$ integer should be the answer to the problem for $k=i+1$.

```input1
5 2
11
01
11
10
00
```

```output1
2 3 2
```

A teleporter sends you

- from city $1$ to cities $2$ and $3$;
- from city $2$ to city $4$;
- from city $3$ to cities $4$ and $5$;
- from city $4$ to city $5$; and
- from city $5$ to nowhere.

Therefore, there are three paths to travel from city $1$ to city $5$:

- path $1$ : city $1$ $\to$ city $2$ $\to$ city $4$ $\to$ city $5$;
- path $2$ : city $1$ $\to$ city $3$ $\to$ city $4$ $\to$ city $5$; and
- path $3$ : city $1$ $\to$ city $3$ $\to$ city $5$.

Among these paths,

- two paths, path $2$ and path $3$, do not visit city $2$.  Among them, path $3$ requires the minimum number of teleporter uses (twice).
- Path $1$ is the only path without city $3$.  It requires using a teleporter three times.
- Path $3$ is the only path without city $4$.  It requires using a teleporter twice.

Thus, $2$, $3$, and $2$, separated by spaces, should be printed.

```input2
6 3
101
001
101
000
100
000
```

```output2
-1 3 3 -1
```

The only path from city $1$ to city $6$ is city $1$ $\to$ city $2$ $\to$ city $5$ $\to$ city $6$.<br>
For $k=2,5$, there is no way to travel from city $1$ to city $6$ without visiting city $k$.<br>
For $k=3,4$, the path above satisfies the condition; it requires using a teleporter three times.

Thus, $-1$, $3$, $3$, and $-1$, separated by spaces, should be printed.

Note that a teleporter is one-way;
a teleporter can send you from city $3$ to city $4$,
but not from city $4$ to city $3$,<br>
so the following path, for example, is invalid: 
city $1$ $\to$ city $4$ $\to$ city $3$ $\to$ city $6$.