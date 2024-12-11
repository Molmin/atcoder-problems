Score : $200$ points

## Problem Statement

You are given $N$ strings, each of length $2$, consisting of uppercase English letters and digits. The $i$-th string is $S_i$.<br>
Determine whether the following three conditions are all satisfied.<br>
・For every string, the first character is one of `H`, `D`, `C`, and `S`.<br>
・For every string, the second character is one of `A`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `T`, `J`, `Q`, `K`.<br>
・All strings are pairwise different. That is, if $i \neq j$, then $S_i \neq S_j$.<br>

## Constraints

- $1 \leq N \leq 52$
- $S_i$ is a string of length $2$ consisting of uppercase English letters and digits.

## Input

The input is given from Standard Input in the following format:

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

If the three conditions are all satisfied, print `Yes`; otherwise, print `No`.

```input1
4
H3
DA
D3
SK
```

```output1
Yes
```

One can verify that the three conditions are all satisfied.

```input2
5
H3
DA
CK
H3
S7
```

```output2
No
```

Both $S_1$ and $S_4$ are `H3`, violating the third condition.

```input3
4
3H
AD
3D
KS
```

```output3
No
```

```input4
5
00
AA
XX
YY
ZZ
```

```output4
No
```