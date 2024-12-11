Score : $500$ points

## Problem Statement

For a sequence $X=(X_1,X_2\ldots,X_N)$ of length $N$ consisting of positive integers, we define $f(X)$ as follows:

- A tree with $N$ vertices is said to be good if and only if the degree of the $i$-th $(1 \leq i \leq N)$ vertex is $X_i$.
If a good tree exists, $f(X)$ is the maximum diameter of a good tree; if it doesn't, $f(X)=0$.

Here, the distance between two vertices is the minimum number of edges that must be traversed to travel from one vertex to the other,
and the diameter of a tree is the maximum distance between two vertices.

Find the sum, modulo $998244353$, of $f(X)$ over all possible sequences $X$ of length $N$ consisting of positive integers.
We can prove that the sum of $f(X)$ is a finite value.

Given $T$ test cases, find the answer for each of them.

## Constraints

- $1\leq T \leq 2\times 10^5$
- $2 \leq N \leq 10^6$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format, where $\mathrm{test}_i$ denotes the $i$-th test case:

> $T$
> 
> $\mathrm{test}_1$
> 
> $\mathrm{test}_2$
> 
> $\vdots$
> 
> $\mathrm{test}_T$

Each test case is given in the following format:

> $N$

## Output

Print $T$ lines.

The $i$-th $(1\leq i \leq T)$ line should contain the answer to the $i$-th test case.

```input1
10
2
3
5
8
13
21
34
55
89
144
```

```output1
1
6
110
8052
9758476
421903645
377386885
881422708
120024839
351256142
```

If $N=3$,

for example,

- when $X=(1,1,1)$, there is no tree with three vertices whose degrees are $1,1$, and $1$, so $f(X)=0$.
- When $X=(2,1,1)$, the only possible tree is illustrated below.  The diameter of this tree is $2$, so $f(X)=2$.

<br>
![3-vertex tree](https://img.atcoder.jp/abc290/7b4cd8233d2ee3eb307023bebaebd906.jpg)
<br><br>

For $X=(2,1,1),(1,2,1),(1,1,2)$, we have $f(X)=2$; for other $X$, we have $f(X)=0$.  Thus, the answer is $6$.