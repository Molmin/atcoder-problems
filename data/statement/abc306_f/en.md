Score : $525$ points

## Problem Statement

For two sets of integers, $A$ and $B$, such that $A \cap B = \emptyset$, we define $f(A,B)$ as follows.

- Let $C=(C_1,C_2,\dots,C_{|A|+|B|})$ be a sequence consisting of the elements of $A \cup B$, sorted in ascending order.
- Take $k_1,k_2,\dots,k_{|A|}$ such that $A=\lbrace C_{k_1},C_{k_2},\dots,C_{k_{|A|}}\rbrace$. 
Then, let $\displaystyle f(A,B)=\sum_{i=1}^{|A|} k_i$.

For example, if $A=\lbrace 1,3\rbrace$ and $B=\lbrace 2,8\rbrace$, then $C=(1,2,3,8)$, so $A=\lbrace C_1,C_3\rbrace$; thus, $f(A,B)=1+3=4$.

We have $N$ sets of integers, $S_1,S_2\dots,S_N$, each of which has $M$ elements.  For each $i\ (1 \leq i \leq N)$, $S_i = \lbrace A_{i,1},A_{i,2},\dots,A_{i,M}\rbrace$.
Here, it is guaranteed that $S_i \cap S_j = \emptyset\ (i \neq j)$.

Find $\displaystyle \sum_{1\leq i&lt;j \leq N} f(S_i, S_j)$.

## Constraints

- $1\leq N \leq 10^4$
- $1\leq M \leq 10^2$
- $1\leq A_{i,j} \leq 10^9$
- If $i_1 \neq i_2$ or $j_1 \neq j_2$, then $A_{i_1,j_1} \neq A_{i_2,j_2}$.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_{1,1}$ $A_{1,2}$ $\dots$ $A_{1,M}$
> 
> $\vdots$
> 
> $A_{N,1}$ $A_{N,2}$ $\dots$ $A_{N,M}$

## Output

Print the answer as an integer.

```input1
3 2
1 3
2 8
4 6
```

```output1
12
```

$S_1$ and $S_2$ respectively coincide with $A$ and $B$ exemplified in the problem statement, and $f(S_1,S_2)=1+3=4$.
Since $f(S_1,S_3)=1+2=3$ and $f(S_2,S_3)=1+4=5$, the answer is $4+3+5=12$.

```input2
1 1
306
```

```output2
0
```

```input3
4 4
155374934 164163676 576823355 954291757
797829355 404011431 353195922 138996221
191890310 782177068 818008580 384836991
160449218 545531545 840594328 501899080
```

```output3
102
```