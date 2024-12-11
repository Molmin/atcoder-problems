Score: $1000$ points

## Problem Statement

You are given $N$ strings $S_1, \dots, S_N$ consisting of lowercase English letters. Consider performing the following two types of operations zero or more times in any order:

- Choose one lowercase letter $c$. Append $c$ to the end of $S_i$ for all $1 \leq i \leq N$.
- Choose an integer $i$ such that $1 \leq i \leq N-1$. Swap $S_i$ and $S_{i+1}$.

Find the minimum total number of operations required to make $S_i \leq S_{i+1}$ in lexicographical order for all $1 \leq i \leq N-1$.

 What is lexicographical order?

A string $S = S_1S_2\ldots S_{|S|}$ is said to be **lexicographically smaller** than a string $T = T_1T_2\ldots T_{|T|}$ if 1. or 2. below holds.
Here, $|S|$ and $|T|$ denote the lengths of $S$ and $T$, respectively.

1. $|S| \lt |T|$ and $S_1S_2\ldots S_{|S|} = T_1T_2\ldots T_{|S|}$.
2. There is an integer $1 \leq i \leq \min\lbrace |S|, |T| \rbrace$ such that both of the following hold:
1.    - $S_1S_2\ldots S_{i-1} = T_1T_2\ldots T_{i-1}$.
2.    - The letter $S_i$ comes before $T_i$ in alphabetical order.

## Constraints

- All input values are integers.
- $2 \le N \le 3 \times 10^5$
- $S_i$ is a string consisting of lowercase English letters.
- $1 \le |S_i|$
- $|S_1| + |S_2| + \dots + |S_N| \le 3 \times 10^5$

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

Print the answer in a single line.

```input1
5
ab
rac
a
dab
ra
```

```output1
3
```

Here is one way to operate.

- Swap $S_2$ and $S_3$. Now $(S_1, \ldots, S_5) = ($`ab`, `a`, `rac`, `dab`, `ra`$)$.
- Append `z` to the end of each string. Now $(S_1, \ldots, S_5) = ($`abz`, `az`, `racz`, `dabz`, `raz`$)$.
- Swap $S_3$ and $S_4$. Now $(S_1, \ldots, S_5) = ($`abz`, `az`, `dabz`, `racz`, `raz`$)$. At this point, we have $S_i \leq S_{i+1}$ for all $i = 1, \ldots, N-1$.

It is impossible to make $S_i \leq S_{i+1}$ for all $i = 1, \ldots, N-1$ with fewer than three operations, so you should print $3$.

```input2
3
kitekuma
nok
zkou
```

```output2
0
```

Before any operation is performed, we have $S_i \leq S_{i+1}$ for all $i = 1, \ldots, N-1$.

```input3
31
arc
arrc
rc
rac
a
rc
aara
ra
caac
cr
carr
rrra
ac
r
ccr
a
c
aa
acc
rar
r
c
r
a
r
rc
a
r
rc
cr
c
```

```output3
175
```

Note that we may have $S_i = S_j$ for $i \neq j$.