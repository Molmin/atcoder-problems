Score : $675$ points

## Problem Statement

Define a sequence $a_1, a_2, a_3, \dots$ as follows:

$a_n = \begin{cases} x & (n=1) \\ y & (n=2) \\ a_{n-1} + a_{n-2} & (n \geq 3) \\ \end{cases}$

Find $\left( \displaystyle \prod_{i=1}^N a_i \right) \bmod{998244353}$.

You are given $T$ test cases to solve.

## Constraints

- $1 \leq T \leq 5$
- $1 \leq N \leq 10^{18}$
- $0 \leq x \leq 998244352$
- $0 \leq y \leq 998244352$
- All input values are integers.

## Input

The input is given from Standard Input in the following format. Here, $\mathrm{case}_i$ denotes the $i$-th test case.

> $T$
> 
> $\mathrm{case}_1$
> 
> $\mathrm{case}_2$
> 
> $\vdots$
> 
> $\mathrm{case}_T$

Each test case is given in the following format:

> $N$ $x$ $y$

## Output

Print $T$ lines. The $i$-th line should contain the answer to the $i$-th test case.

```input1
3
5 1 1
2024 11 22
1000000000000000000 12345 6789
```

```output1
30
577322229
726998219
```

For the first test case, the elements of the sequence are $1, 1, 2, 3, 5, 8, \dots$. Thus, the answer is $(1 \times 1 \times 2 \times 3 \times 5) \bmod{998244353} = 30$.