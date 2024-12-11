Score : $1400$ points

## Problem Statement

In this problem, a "permutation" always means a permutation of $(1,2,\cdots,N)$.

For two permutations $p$ and $q$, let us define the distance between them, $d(p,q)$, as follows.

- Consider making $p$ equal $q$ by repeatedly swapping two adjacent terms in $p$. Let $d(p,q)$ be the minimum number of swaps required here.

Additionally, for a permutation $x$, let us define another permutation $f(x)$ as follows.

- Let $y=(1,2,\cdots,N)$. Consider permutations $z$ such that $d(x,z) \leq d(y,z)$. Let $f(x)$ be the lexicographically smallest of those permutations.

For example, when $x=(2,3,1)$, the permutations $z$ such that $d(x,z) \leq d(y,z)$ are $z=(2,1,3),(2,3,1),(3,1,2),(3,2,1)$.
The lexicographically smallest of them is $(2,1,3)$, so we have $f(x)=(2,1,3)$.

You are given a permutation $A=(A_1,A_2,\cdots,A_N)$.
Determine whether there is a permutation $x$ such that $f(x)=A$.

Solve $T$ test cases for each input file.

 What is lexicographical order on sequences? 

 
The algorithm described here determines the lexicographical order between distinct sequences $S$ and $T$.

Below, let $S_i$ denote the $i$-th element of $S$. Additionally, let $S \lt T$ and $S \gt T$ mean "$S$ is lexicographical smaller than $T$" and "$S$ is lexicographical larger than $T$," respectively.

1. Let $L$ be the length of the shorter of $S$ and $T$. For each $i=1,2,\dots,L$, let us check whether $S_i$ and $T_i$ are equal.
2. If there is $i$ such that $S_i \neq T_i$, let $j$ be the smallest such $i$, and compare $S_j$ and $T_j$. If $S_j$ is smaller than $T_j$ (as a number), we conclude $S \lt T$ and exit; if $S_j$ is larger than $T_j$, we conclude $S \gt T$ and exit.
3. If there is no $i$ such that $S_i \neq T_i$, compare the lengths of $S$ and $T$. If $S$ is shorter than $T$, we conclude $S \lt T$ and exit; if $S$ is longer than $T$, we conclude $S \gt T$ and exit.

## Constraints

- $1 \leq T \leq 150000$
- $2 \leq N \leq 300000$
- $(A_1,A_2,\cdots,A_N)$ is a permutation of $(1,2,\cdots,N)$.
- The sum of $N$ in one input file does not exceed $300000$.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $T$
> 
> $case_1$
> 
> $case_2$
> 
> $\vdots$
> 
> $case_T$

Each case is in the following format:

> $N$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$

## Output

For each case, print `Yes` if there is a permutation $x$ such that $f(x)=A$, and `No` otherwise.

```input1
2
2
1 2
2
2 1
```

```output1
Yes
Yes
```

For instance, when $A=(2,1)$, one can let $x=(2,1)$ to satisfy $f(x)=A$.

```input2
6
3
1 2 3
3
1 3 2
3
2 1 3
3
2 3 1
3
3 1 2
3
3 2 1
```

```output2
Yes
Yes
Yes
Yes
No
No
```

For instance, when $A=(2,3,1)$, one can let $x=(3,2,1)$ to satisfy $f(x)=A$.

```input3
24
4
1 2 3 4
4
1 2 4 3
4
1 3 2 4
4
1 3 4 2
4
1 4 2 3
4
1 4 3 2
4
2 1 3 4
4
2 1 4 3
4
2 3 1 4
4
2 3 4 1
4
2 4 1 3
4
2 4 3 1
4
3 1 2 4
4
3 1 4 2
4
3 2 1 4
4
3 2 4 1
4
3 4 1 2
4
3 4 2 1
4
4 1 2 3
4
4 1 3 2
4
4 2 1 3
4
4 2 3 1
4
4 3 1 2
4
4 3 2 1
```

```output3
Yes
Yes
Yes
Yes
Yes
Yes
Yes
Yes
Yes
Yes
No
No
No
No
No
No
No
No
No
No
No
No
No
No
```