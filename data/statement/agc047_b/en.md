Score : $700$ points

## Problem Statement

Limak can repeatedly remove one of the first two characters of a string,
    for example $abcxyx \rightarrow acxyx \rightarrow cxyx \rightarrow cyx$.

You are given $N$ different strings $S_1, S_2, \ldots, S_N$.
Among $N \cdot (N-1) / 2$ pairs $(S_i, S_j)$,
    in how many pairs could Limak obtain one string from the other?

## Constraints

- $2 \leq N \leq 200\,000$
- $S_i$ consists of lowercase English letters `a`-`z`.
- $S_i \neq S_j$
- $1 \leq |S_i|$
- $|S_1| + |S_2| + \ldots + |S_N| \leq 10^6$

## Input

Input is given from Standard Input in the following format.

> $N$
> 
> $S_1$
> 
> $S_2$
> 
> $\vdots$
> 
> $S_N$

## Output

Print the number of unordered pairs $(S_i, S_j)$
    where $i \neq j$ and Limak can obtain one string from the other.

```input1
3
abcxyx
cyx
abc
```

```output1
1
```

The only good pair is $(abcxyx, cyx)$.

```input2
6
b
a
abc
c
d
ab
```

```output2
5
```

There are five good pairs: $(b, abc)$, $(a, abc)$, $(abc, c)$, $(b, ab)$, $(a, ab)$.