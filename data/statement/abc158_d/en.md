Score : $400$ points

## Problem Statement

Takahashi has a string $S$ consisting of lowercase English letters.

Starting with this string, he will produce a new one in the procedure given as follows.

The procedure consists of $Q$ operations. In Operation $i$ $(1 \leq i \leq Q)$, an integer $T_i$ is provided, which means the following:

- <p>If $T_i = 1$: reverse the string $S$.</p>
- <p>If $T_i = 2$: An integer $F_i$ and a lowercase English letter $C_i$ are additionally provided.</p>
-   - If $F_i = 1$ : Add $C_i$ to the beginning of the string $S$.
-   - If $F_i = 2$ : Add $C_i$ to the end of the string $S$.

Help Takahashi by finding the final string that results from the procedure.

## Constraints

- $1 \leq |S| \leq 10^5$
- $S$ consists of lowercase English letters.
- $1 \leq Q \leq 2 \times 10^5$
- $T_i = 1$ or $2$.
- $F_i = 1$ or $2$, if provided.
- $C_i$ is a lowercase English letter, if provided.

## Input

Input is given from Standard Input in the following format:

> $S$
> 
> $Q$
> 
> $Query_1$
> 
> $:$
> 
> $Query_Q$

In the $3$-rd through the $(Q+2)$-th lines, $Query_i$ is one of the following:

> $1$

which means $T_i = 1$, and:

> $2$ $F_i$ $C_i$

which means $T_i = 2$.

## Output

Print the resulting string.

```input1
a
4
2 1 p
1
2 2 c
1
```

```output1
cpa
```

There will be $Q = 4$ operations. Initially, $S$ is `a`.

- <p>Operation $1$: Add `p` at the beginning of $S$. $S$ becomes `pa`.</p>
- <p>Operation $2$: Reverse $S$. $S$ becomes `ap`.</p>
- <p>Operation $3$: Add `c` at the end of $S$. $S$ becomes `apc`.</p>
- <p>Operation $4$: Reverse $S$. $S$ becomes `cpa`.</p>

Thus, the resulting string is `cpa`.

```input2
a
6
2 2 a
2 1 b
1
2 2 c
1
1
```

```output2
aabc
```

There will be $Q = 6$ operations. Initially, $S$ is `a`.

- <p>Operation $1$: $S$ becomes `aa`.</p>
- <p>Operation $2$: $S$ becomes `baa`.</p>
- <p>Operation $3$: $S$ becomes `aab`.</p>
- <p>Operation $4$: $S$ becomes `aabc`.</p>
- <p>Operation $5$: $S$ becomes `cbaa`.</p>
- <p>Operation $6$: $S$ becomes `aabc`.</p>

Thus, the resulting string is `aabc`.

```input3
y
1
2 1 x
```

```output3
xy
```