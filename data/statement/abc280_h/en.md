Score : $600$ points

## Problem Statement

You are given $N$ strings $S_1,S_2,\ldots, S_N$.
Let $M = \displaystyle\sum_{i=1}^N \frac{|S_i|(|S_i|+1)}{2}$.<br>
For a string $S$ and integers $L$ and $R$, let us denote by $S[L, R]$ the substring consisting of the $L$-th through $R$-th characters of $S$.

A sequence of triples of integers $((K_1, L_1, R_1), (K_2, L_2, R_2), \ldots, (K_M, L_M, R_M))$ of length $M$ satisfies the following conditions:

- The $M$ elements are pairwise distinct.
- For all $1 \leq i \leq M$, it holds that $1 \leq K_i \leq N$ and $1 \leq L_i \leq R_i \leq |S_{K_i}|$.
- For all $1 \leq i \leq j \leq M$, it holds that $S_{K_i}[L_i, R_i] \leq S_{K_j}[L_j, R_j]$ in the lexicographical order.

You are given $Q$ integers $x_1,x_2,\ldots, x_Q$ between $1$ and $M$, inclusive.  For each $1 \leq i \leq Q$, find a possible instance of $(K_{x_i}, L_{x_i}, R_{x_i})$.  We can prove that there always exists a sequence of triples that satisfies the conditions.  If multiple triples satisfy the conditions, print any of them.  In addition, among different $x_i$'s, the conforming sequence of triples does not have to be common.

    What is the lexicographical order?
    Two strings $S$ and $T$ are said to be $S \leq T$ in the lexicographical order if and only if one of the following conditions is satisfied:

- $|S| \leq |T|$ and $S = T[1, |S|]$.
- There exists $1\leq k\leq \min(|S|, |T|)$ such that the $i$-th characters of $S$ and $T$ are the same for all $1\leq i\leq k-1$, and the $k$-th character of $S$ is alphabetically strictly smaller than that of $T$.

## Constraints

- $1 \leq N \leq 10^5$
- $1 \leq \lvert S_i\rvert \leq 10^5$
- $\displaystyle\sum_{i=1}^N \lvert S_i\rvert\leq 10^5$
- $1 \leq Q \leq 2\times 10^5$
- $1 \leq x_1&lt;x_2&lt;\cdots&lt;x_Q \leq \displaystyle\sum_{i=1}^N \frac{|S_i|(|S_i|+1)}{2}$
- $N,Q,x_1,x_2,\ldots,x_Q$ are integers.
- $S_i$ is a string consisting of lowercase English letters.

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
> 
> $Q$
> 
> $x_1$ $x_2$ $\ldots$ $x_Q$

## Output

Print $Q$ lines.  The $i$-th line should contain an instance of conforming $(K_{x_i}, L_{x_i}, R_{x_i})$, separated by spaces.
If multiple triples satisfy the conditions, print any of them.

```input1
2
abab
cab
2
5 14
```

```output1
1 3 4
2 1 1
```

We have $M=16$.  One possible sequence of triples that satisfies the conditions is
$((1,1,1), (1,3,3), (2,2,2), (1,1,2), (1,3,4), (2,2,3), (1,1,3), (1,1,4), (1,2,2), (1,4,4), (2,3,3), (1,2,3), (1,2,4), (2,1,1), (2,1,2), (2,1,3))$.
 The corresponding sequence of $S_{K_i}[L_i, R_i]$ for these $(K_i,L_i, R_i)$ in this order is (`a`, `a`, `a`, `ab`, `ab`, `ab`, `aba`,  `abab`, `b`, `b`, `b`, `ba`, `bab`, `c`, `ca`, `cab`).

Note that the sequence satisfies the conditions even if we swap the $5$-th element $(1,3,4)$ with the $4$-th or $6$-th one,
so $(K_{x_1}, L_{x_1}, R_{x_1})=(1,1,2), (2,2,3)$ will also be accepted.

```input2
3
a
a
ba
2
1 2
```

```output2
1 1 1
1 1 1
```

We have $M=5$.  The sequence of triples that satisfies the conditions can be<br>
$(1,1,1), (2,1,1), (3,2,2), (3,1,1), (3,1,2)$ or $(2,1,1), (3,2,2), (1,1,1), (3,1,1), (3,1,2)$,
for example.

Note that, for $(K_{x_i}, L_{x_i}, R_{x_i})$ that you print, the conforming sequence whose $x_i$-th element is $(K_{x_i}, L_{x_i}, R_{x_i})$ does **not** have to be common among different $i$;
in other words, there does **not necessarily have to exist** a sequence
whose "$x_i$-th element is $(K_{x_i}, L_{x_i}, R_{x_i})$ for all $1\leq i\leq Q$."

```input3
10
gxgpuamkx
szhkbpphykin
ezplvfja
mopodotkrj
rimlvumuar
nexcfyce
eurgvjyos
dhvuyfvt
nrdyluacvra
ggwnpnzij
6
74 268 310 380 455 489
```

```output3
3 1 2
4 4 5
4 3 7
9 6 6
6 6 6
2 2 12
```