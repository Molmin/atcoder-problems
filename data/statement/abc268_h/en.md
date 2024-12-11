Score : $600$ points

## Problem Statement

You are given a string $S$.  Takahashi may perform the following operation $0$ or more times:

- Choose an integer $i$ such that $1 \leq i \leq |S|$ and change the $i$-th character of $S$ to `*`.

Takahashi's objective is to make $S$ not contain any of $N$ strings $T_1,T_2,\ldots,T_N$ **as a substring**.<br>
Find the minimum number of operations required to achieve the objective.

## Constraints

- $1 \leq |S| \leq 5 \times 10^5$
- $1 \leq N$
- $N$ is an integer.
- $1 \leq |T_i|$
- $\sum{|T_i|} \leq 5 \times 10^5$
- $T_i \neq T_j$ if $i \neq j$.
- $S$ and $T_i$ are strings consisting of lowercase English letters.

## Input

Input is given from Standard Input in the following format:

> $S$
> 
> $N$
> 
> $T_1$
> 
> $T_2$
> 
> $\vdots$
> 
> $T_N$

## Output

Print the answer.

```input1
abcdefghijklmn
3
abcd
ijk
ghi
```

```output1
2
```

If he performs the operation twice by choosing $1$ and $9$ for $i$, $S$ becomes `*bcdefgh*jklmn`; now it does not contain `abcd`, `ijk`, or `ghi` as a substring.

```input2
atcoderbeginnercontest
1
abc
```

```output2
0
```

No operation is needed.

```input3
aaaaaaaaa
2
aa
xyz
```

```output3
4
```