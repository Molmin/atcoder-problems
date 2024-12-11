Score : $800$ points

## Problem Statement

Given are integers $N$ and $X$. For each integer $k$ between $0$ and $X$ (inclusive), find the answer to the following question, then compute the sum of all those answers, modulo $998244353$.

- Let us repeat the following operation on the integer $k$. Operation: if the integer is currently odd, subtract $1$ from it and divide it by $2$; otherwise, divide it by $2$ and add $2^{N-1}$ to it. How many operations need to be performed until $k$ returns to its original value? (The answer is considered to be $0$ if $k$ never returns to its original value.)

## Constraints

- $1 \leq N \leq 2\times 10^5$
- $0 \leq X &lt; 2^N$
- $X$ is given in binary and has exactly $N$ digits. (In case $X$ has less than $N$ digits, it is given with leading zeroes.)
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $X$

## Output

Print the sum of the answers to the questions for the integers between $0$ and $X$ (inclusive), modulo $998244353$.

```input1
3
111
```

```output1
40
```

For example, for $k=3$, the operation changes $k$ as follows: $1,0,4,6,7,3$. Therefore the answer for $k=3$ is $6$.

```input2
6
110101
```

```output2
616
```

```input3
30
001110011011011101010111011100
```

```output3
549320998
```