Score : $800$ points

## Problem Statement

Let’s take a prime $P = 200\,003$.
You are given $N$ integers $A_1, A_2, \ldots, A_N$.
Find the sum of $((A_i \cdot A_j) \bmod P)$ over all $N \cdot (N-1) / 2$ unordered pairs of elements ($i &lt; j$).

Please note that the sum isn't computed modulo $P$.

## Constraints

- $2 \leq N \leq 200\,000$
- $0 \leq A_i &lt; P = 200\,003$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format.

> $N$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$

## Output

Print one integer — the sum over $((A_i \cdot A_j) \bmod P)$.

```input1
4
2019 0 2020 200002
```

```output1
474287
```

The non-zero products are:

- $2019 \cdot 2020 \bmod P = 78320$
- $2019 \cdot 200002 \bmod P = 197984$
- $2020 \cdot 200002 \bmod P = 197983$

So the answer is $0 + 78320 + 197984 + 0 + 0 + 197983 = 474287$. 

```input2
5
1 1 2 2 100000
```

```output2
600013
```