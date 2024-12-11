Score : $500$ points

## Problem Statement

Consider sequences $\{A_1,...,A_N\}$ of length $N$ consisting of integers between $1$ and $K$ (inclusive).

There are $K^N$ such sequences. Find the sum of $\gcd(A_1, ..., A_N)$ over all of them.

Since this sum can be enormous, print the value modulo $(10^9+7)$.

Here $\gcd(A_1, ..., A_N)$ denotes the greatest common divisor of $A_1, ..., A_N$.

## Constraints

- $2 \leq N \leq 10^5$
- $1 \leq K \leq 10^5$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$

## Output

Print the sum of $\gcd(A_1, ..., A_N)$ over all $K^N$ sequences, modulo $(10^9+7)$.

```input1
3 2
```

```output1
9
```

$\gcd(1,1,1)+\gcd(1,1,2)+\gcd(1,2,1)+\gcd(1,2,2)$
$+\gcd(2,1,1)+\gcd(2,1,2)+\gcd(2,2,1)+\gcd(2,2,2)$
$=1+1+1+1+1+1+1+2=9$

Thus, the answer is $9$.

```input2
3 200
```

```output2
10813692
```

```input3
100000 100000
```

```output3
742202979
```

Be sure to print the sum modulo $(10^9+7)$.