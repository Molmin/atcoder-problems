Score : $500$ points

## Problem Statement

There is an integer sequence $A$ of length $N$.

Find the number of the pairs of integers $l$ and $r$ ($1 \leq l \leq r \leq N$) that satisfy the following condition:

- $A_l\ xor\ A_{l+1}\ xor\ ...\ xor\ A_r = A_l\ +\ A_{l+1}\ +\ ...\ +\ A_r$

Here, $xor$ denotes the bitwise exclusive OR.

Definition of XOR

The XOR of integers $c_1, c_2, ..., c_m$ is defined as follows:

- Let the XOR be $X$. In the binary representation of $X$, the digit in the $2^k$'s place ($0 \leq k$; $k$ is an integer) is $1$ if there are an odd number of integers among $c_1, c_2, ...c_m$ whose binary representation has $1$ in the $2^k$'s place, and $0$ if that number is even.

For example, let us compute the XOR of $3$ and $5$. The binary representation of $3$ is $011$, and the binary representation of $5$ is $101$, thus the XOR has the binary representation $110$, that is, the XOR is $6$.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $0 \leq A_i &lt; 2^{20}$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $...$ $A_N$

## Output

Print the number of the pairs of integers $l$ and $r$ ($1 \leq l \leq r \leq N$) that satisfy the condition.

```input1
4
2 5 4 6
```

```output1
5
```

$(l,r)=(1,1),(2,2),(3,3),(4,4)$ clearly satisfy the condition.
$(l,r)=(1,2)$ also satisfies the condition, since $A_1\ xor\ A_2 = A_1\ +\ A_2 = 7$.
There are no other pairs that satisfy the condition, so the answer is $5$.

```input2
9
0 0 0 0 0 0 0 0 0
```

```output2
45
```

```input3
19
885 8 1 128 83 32 256 206 639 16 4 128 689 32 8 64 885 969 1
```

```output3
37
```