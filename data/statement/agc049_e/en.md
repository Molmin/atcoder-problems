Score : $1600$ points

## Problem Statement

Maroon came up with the following problem:

Snuke has an integer sequence $a$ of length $N$.
Initially, $a_i=0$ for every $i$ ($1 \leq i \leq N$).

Snuke will repeat the following two operations any number of times in any order:

- <p>Operation $1$: Replace $a_i$ with $a_i+x$, where $i$ ($1 \leq i \leq N$) and $x$ ($x=1$ or $x=-1$) are integers of his choice.
The cost of doing this operation once is $1$.</p>
- <p>Operation $2$: Replace $a_i$ with $a_i+x$ for every $i$ ($l \leq i \leq r$), where $l$, $r$ ($1 \leq l \leq r \leq N$) and  $x$ ($x=1$ or $x=-1$) are integers of his choice.
The cost of doing this operation once is $C$.</p>

You are given an integer sequence $A$ of length $N$.
Snuke wants to make $a_i=A_i$ for every $i$.
Find the minimum total cost needed to achieve his objective.

However, during the preparation of this problem, too many unexpected solutions were found, so Maroon changed the problem into the following:

Snuke has $N$ integer sequences $B_1,B_2,\cdots,B_N$ and integers $C$ and $K$.
The length of every sequence $B_i$ ($1 \leq i \leq N$) is $K$.

Now, he wants to make an integer sequence $A$ of length $N$ and find the answer to the problem above.
The value of $A_i$ will be chosen from $B_{i,1},B_{i,2},\cdots,B_{i,K}$.
Here, even if there are duplicated values in $B_{i,1},B_{i,2},\cdots,B_{i,K}$, we still distinguish those values.
That is, there are $K^N$ ways to make $A$.

Find the sum of the answers to the problem above over all the ways to make $A$, modulo $(10^9+7)$.

Solve this problem.

## Constraints

- $1 \leq N \leq 50$
- $1 \leq C \leq N$
- $1 \leq K \leq 50$
- $1 \leq B_{i,j} \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $C$ $K$
> 
> $B_{1,1}$ $B_{1,2}$ $\cdots$ $B_{1,K}$
> 
> $B_{2,1}$ $B_{2,2}$ $\cdots$ $B_{2,K}$
> 
> $\vdots$
> 
> $B_{N,1}$ $B_{N,2}$ $\cdots$ $B_{N,K}$

## Output

Print the answer.

```input1
5 2 1
2
3
1
2
1
```

```output1
6
```

We have $A=(2,3,1,2,1)$.
Below is one optimal sequence of operations:

- Let $l=1,r=5,x=1$ and do Operation $2$, resulting in $a=(1,1,1,1,1)$.
- Let $l=1,r=4,x=1$ and do Operation $2$, resulting in $a=(2,2,2,2,1)$.
- Let $i=2,x=1$ and do Operation $1$, resulting in $a=(2,3,2,2,1)$.
- Let $i=3,x=-1$ and do Operation $1$, resulting in $a=(2,3,1,2,1)$.

```input2
3 2 3
1 2 3
1 2 3
1 2 3
```

```output2
126
```

```input3
10 4 1
8
10
10
1
5
9
5
5
9
1
```

```output3
45
```

```input4
10 5 10
79 48 35 56 16 26 37 6 75 23
39 99 57 100 49 90 18 9 12 91
29 97 49 86 30 94 78 63 49 22
100 27 48 91 66 14 6 20 23 84
12 60 99 75 88 95 61 58 20 46
10 11 30 38 55 94 9 52 92 75
27 22 46 85 83 88 50 63 95 91
49 59 19 37 53 27 11 26 2 91
95 36 20 76 84 41 59 95 67 66
52 60 17 11 28 57 75 69 95 24
```

```output4
877826779
```