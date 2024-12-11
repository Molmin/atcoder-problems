Score : $600$ points

## Problem Statement

Given is a sequence $A = [a_0, a_1, a_2, \dots, a_{N-1}]$ that is a permutation of $0, 1, 2, \dots, N - 1$.<br>
For each $k = 0, 1, 2, \dots, N - 1$, find the inversion number of the sequence $B = [b_0, b_1, b_2, \dots, b_{N-1}]$ defined as $b_i = a_{i+k \bmod N}$.

What is inversion number?
The inversion number of a sequence $A = [a_0, a_1, a_2, \dots, a_{N-1}]$ is the number of pairs of indices $(i, j)$ such that $i < j$ and $a_i > a_j$.

## Constraints

- All values in input are integers.
- $2 \leq N \leq 3 \times 10^5$
- $a_0, a_1, a_2, \dots, a_{N-1}$ is a permutation of $0, 1, 2, \dots, N - 1$.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $a_0$ $a_1$ $a_2$ $\cdots$ $a_{N-1}$

## Output

Print $N$ lines.<br>
The $(i + 1)$-th line should contain the answer for the case $k = i$.

```input1
4
0 1 2 3
```

```output1
0
3
4
3
```

We have $A = [0, 1, 2, 3]$.

For $k = 0$, the inversion number of $B = [0, 1, 2, 3]$ is $0$.<br>
For $k = 1$, the inversion number of $B = [1, 2, 3, 0]$ is $3$.<br>
For $k = 2$, the inversion number of $B = [2, 3, 0, 1]$ is $4$.<br>
For $k = 3$, the inversion number of $B = [3, 0, 1, 2]$ is $3$.  

```input2
10
0 3 1 5 4 2 9 6 8 7
```

```output2
9
18
21
28
27
28
33
24
21
14
```