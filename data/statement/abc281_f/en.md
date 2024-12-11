Score : $500$ points

## Problem Statement

You are given a sequence of non-negative integers $A=(a_1,\ldots,a_N)$.

Let us perform the following operation on $A$ just once.

- Choose a non-negative integer $x$. Then, for every $i=1, \ldots, N$, replace the value of $a_i$ with the bitwise XOR of $a_i$ and $x$.

Let $M$ be the maximum value in $A$ after the operation. Find the minimum possible value of $M$.

What is bitwise XOR?
The bitwise XOR of non-negative integers $A$ and $B$,  $A \oplus B$, is defined as follows.

- When $A \oplus B$ is written in binary, the $k$-th lowest bit ($k \geq 0$) is $1$ if exactly one of the $k$-th lowest bits of $A$ and $B$ is $1$, and $0$ otherwise.

For instance, $3 \oplus 5 = 6$ (in binary: $011 \oplus 101 = 110$).  

## Constraints

- $1 \leq N \leq 1.5 \times 10^5$
- $0 \leq a_i \lt 2^{30}$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $a_1$ $\ldots$ $a_N$

## Output

Print the answer.

```input1
3
12 18 11
```

```output1
16
```

If we do the operation with $x=2$, the sequence becomes $(12 \oplus 2,18 \oplus 2, 11 \oplus 2) = (14,16,9)$, where the maximum value $M$ is $16$.<br>
We cannot make $M$ smaller than $16$, so this value is the answer.

```input2
10
0 0 0 0 0 0 0 0 0 0
```

```output2
0
```

```input3
5
324097321 555675086 304655177 991244276 9980291
```

```output3
805306368
```