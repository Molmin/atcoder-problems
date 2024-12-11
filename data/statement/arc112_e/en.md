Score : $700$ points

## Problem Statement

We applied the following operation $m$ times on the sequence $(1,2,\dots,n)$, and it resulted in $(a_1,\dots ,a_n)$.

- Erase one element. Then, add the erased element to the beginning or end of the sequence.

Find the number of possible sequences of the $m$ operations, modulo $998244353$.

Here, two sequences of operations are considered the same when, in every operation, the same element is chosen and added to the same position.

## Constraints

- $2\le n \le 3000$
- $1\le m \le 3000$
- $a_1,\dots ,a_n$ is a permutation of $1,\dots,n$.

## Input

Input is given from Standard Input in the following format:

> $n$ $m$
> 
> $a_1$ $\dots$ $a_n$

## Output

Print the number of possible sequences of the $m$ operations, modulo $998244353$.

```input1
5 2
1 2 4 5 3
```

```output1
5
```

There are five possible sequences of operations, as follows:

- Erase $1$ and add it to the beginning, which results in $(1,2,3,4,5)$. Then, erase $3$ and add it to the end, which results in $(1,2,4,5,3)$.
- Erase $3$ and add it to the beginning, which results in $(3,1,2,4,5)$. Then, erase $3$ and add it to the end, which results in $(1,2,4,5,3)$.
- Erase $3$ and add it to the end, which results in $(1,2,4,5,3)$. Then, erase $1$ and add it to the beginning, which results in $(1,2,4,5,3)$.
- Erase $3$ and add it to the end, which results in $(1,2,4,5,3)$. Then, erase $3$ and add it to the end, which results in $(1,2,4,5,3)$.
- Erase $5$ and add it to the end, which results in $(1,2,3,4,5)$. Then, erase $3$ and add it to the end, which results in $(1,2,4,5,3)$.

```input2
2 16
1 2
```

```output2
150994942
```

Two of the four kinds of operations have no effect on the sequence, and the other two swap the two elements.
From this fact, we can show that there are $4^m/2 = 2^{31} = 2147483648$ sequences of operations - half of all possible sequences - that we want to count.
Thus, the answer is $2147483648$ modulo $998244353$, that is, $150994942$.

```input3
10 3000
3 7 10 1 9 5 4 8 6 2
```

```output3
129989699
```