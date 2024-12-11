Score : $600$ points

## Problem Statement

You are given integers $N$ and $K$, and a sequence $E$ of length $K$.<br>
Find the number, modulo $\color{red}{10^9+7}$, of sequences of length $N$ consisting of positive integers that satisfy the following conditions:  

- no element is a square number;
- the product of all elements is $\displaystyle \prod_{i=1}^{K} p_i^{E_i}$.

Here,

- $p_i$ denotes the $i$-th smallest prime.
- Two sequences $A$ and $B$ of the same length consisting of positive integers are considered different if and only if there exists an integer $i$ such that the $i$-th terms of $A$ and $B$ are different.

## Constraints

- All values in the input are integers.
- $1 \le N,K,E_i \le 10000$

## Input

The input is given from Standard Input in the following format:

> $N$ $K$
> 
> $E_1$ $E_2$ $\dots$ $E_K$

## Output

Print the answer as an integer.

```input1
3 2
3 2
```

```output1
15
```

The sequences of length $3$ whose total product is $72=2^3 \times 3^2$ are listed below.

- $(1,1,72)$ and its permutations ($3$ instances) are inappropriate because $1$ is a square number.
- $(1,2,36)$ and its permutations ($6$ instances) are inappropriate because $1$ and $36$ are square numbers.
- $(1,3,24)$ and its permutations ($6$ instances) are inappropriate because $1$ is a square number.
- $(1,4,18)$ and its permutations ($6$ instances) are inappropriate because $1$ and $4$ are square numbers.
- $(1,6,12)$ and its permutations ($6$ instances) are inappropriate because $1$ is a square number.
- $(1,8,9)$ and its permutations ($6$ instances) are inappropriate because $1$ and $9$ are square numbers.
- $(2,2,18)$ and its permutations ($3$ instances) are appropriate.
- $(2,3,12)$ and its permutations ($6$ instances) are appropriate.
- $(2,4,9)$ and its permutations ($6$ instances) are inappropriate because $4$ and $9$ are square numbers.
- $(2,6,6)$ and its permutations ($3$ instances) are appropriate.
- $(3,3,8)$ and its permutations ($3$ instances) are appropriate.
- $(3,4,6)$ and its permutations ($6$ instances) are inappropriate because $4$ is a square number.

Therefore, $15$ sequences satisfy the conditions.

```input2
285 10
3141 5926 5358 9793 2384 6264 3383 279 5028 8419
```

```output2
672860525
```

Be sure to find the count modulo $\color{red}{10^9+7}$.