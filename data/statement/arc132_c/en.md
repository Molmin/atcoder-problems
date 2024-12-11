Score : $600$ points

## Problem Statement

Given is a sequence $a_1,\dots,a_n$ consisting of $1,\dots, n$ and $-1$, along with an integer $d$.
How many sequences $p_1,\dots,p_n$ satisfy the conditions below?
Print the count modulo $998244353$.

- $p_1,\dots,p_n$ is a permutation of $1,\dots, n$.
- For each $i=1,\dots,n$, $a_i=p_i$ if $a_i\neq -1$. (That is, $p_1,\dots,p_n$ can be obtained by replacing the $-1$s in $a_1,\dots,a_n$ in some way.)
- For each $i=1,\dots,n$, $|p_i - i|\le d$.

## Constraints

- $1 \le d \le 5$
- $d &lt; n \le 500$
- $1\le a_i \le n$ or $a_i=-1$.
- $|a_i-i|\le d$ if $a_i\neq -1$.
- $a_i\neq a_j$, if $i\neq j$ and $a_i, a_j \neq -1$.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $n$ $d$
> 
> $a_1$ $\dots$ $a_n$

## Output

Print the number of sequences that satisfy the conditions, modulo $998244353$.

```input1
4 2
3 -1 1 -1
```

```output1
2
```

The conditions are satisfied by $(3,2,1,4)$ and $(3,4,1,2)$.

```input2
5 1
2 3 4 5 -1
```

```output2
0
```

The only permutation of $1,2,3,4,5$  that can be obtained by replacing the $-1$ is $(2,3,4,5,1)$, whose fifth term violates the condition, so the answer is $0$.

```input3
16 5
-1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1
```

```output3
794673086
```

Print the count modulo $998244353$.