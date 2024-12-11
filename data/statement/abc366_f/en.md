Score : $500$ points

## Problem Statement

You are given $N$ linear functions $f_1, f_2, \ldots, f_N$, where $f_i(x) = A_i x + B_i$.

Find the maximum possible value of $f_{p_1}(f_{p_2}(\ldots f_{p_K}(1) \ldots ))$ for a sequence $p = (p_1, p_2, \ldots, p_K)$ of $K$ **distinct** integers between $1$ and $N$, inclusive.

## Constraints

- $1 \leq N \leq 2 \times 10^{5}$
- $1 \leq K \leq \text{min}(N,10)$
- $1 \leq A_i, B_i \leq 50$ $(1 \leq i \leq N)$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $K$
> 
> $A_1$ $B_1$
> 
> $A_2$ $B_2$
> 
> $\vdots$
> 
> $A_N$ $B_N$

## Output

Print the answer as an integer.

```input1
3 2
2 3
1 5
4 2
```

```output1
26
```

Here are all possible $p$ and the corresponding values of $f_{p_1}(f_{p_2}(1))$:

- $p= ( 1,2 )$ : $f_1(f_2(1))=15$
- $p= ( 1,3 )$ : $f_1(f_3(1))=15$
- $p= ( 2,1 )$ : $f_2(f_1(1))=10$
- $p= ( 2,3 )$ : $f_2(f_3(1))=11$
- $p= ( 3,1 )$ : $f_3(f_1(1))=22$
- $p= ( 3,2 )$ : $f_3(f_2(1))=26$

Therefore, print $26$.

```input2
10 3
48 40
34 22
24 37
45 40
48 31
49 44
45 40
44 6
35 22
39 28
```

```output2
216223
```