Score : $600$ points

## Problem Statement

Given is an integer sequence $A_1, ..., A_N$ of length $N$.

We will choose exactly $\left\lfloor \frac{N}{2} \right\rfloor$ elements from this sequence so that no two adjacent elements are chosen.

Find the maximum possible sum of the chosen elements.

Here $\lfloor x \rfloor$ denotes the greatest integer not greater than $x$.

## Constraints

- $2 \leq N \leq 2\times 10^5$
- $|A_i|\leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $...$ $A_N$

## Output

Print the maximum possible sum of the chosen elements.

```input1
6
1 2 3 4 5 6
```

```output1
12
```

Choosing $2$, $4$, and $6$ makes the sum $12$, which is the maximum possible value.

```input2
5
-1000 -100 -10 0 10
```

```output2
0
```

Choosing $-10$ and $10$ makes the sum $0$, which is the maximum possible value.

```input3
10
1000000000 1000000000 1000000000 1000000000 1000000000 1000000000 1000000000 1000000000 1000000000 1000000000
```

```output3
5000000000
```

Watch out for overflow.

```input4
27
18 -28 18 28 -45 90 -45 23 -53 60 28 -74 -71 35 -26 -62 49 -77 57 24 -70 -93 69 -99 59 57 -49
```

```output4
295
```