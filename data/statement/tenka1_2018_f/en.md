Score : $900$ points

## Problem Statement

You are given a sequence of $N$ integers: $A_1,A_2,...,A_N$.

Find the number of permutations $p_1,p_2,...,p_N$ of $1,2,...,N$ that can be changed to $A_1,A_2,...,A_N$ by performing the following operation some number of times (possibly zero), modulo $998244353$:

- For each $1\leq i\leq N$, let $q_i=min(p_{i-1},p_{i})$, where $p_0=p_N$. Replace the sequence $p$ with the sequence $q$.

## Constraints

- $1 \leq N \leq 3 \times 10^5$
- $1 \leq A_i \leq N$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$
> 
> $:$
> 
> $A_N$

## Output

Print the number of the sequences that satisfy the condition, modulo $998244353$.

```input1
3
1
2
1
```

```output1
2
```

$(2,3,1)$ and $(3,2,1)$ satisfy the condition.

```input2
5
3
1
4
1
5
```

```output2
0
```

```input3
8
4
4
4
1
1
1
2
2
```

```output3
24
```

```input4
6
1
1
6
2
2
2
```

```output4
0
```