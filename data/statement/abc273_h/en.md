Score : $600$ points

## Problem Statement

We have a sequence $A$ consisting of integer pairs.  Initially, $A = ( (0, 1), (1, 0) )$.

You may perform the following operation on $A$ as many (possibly zero) times as you want:

- choose **adjacent** two integer pairs $(a, b)$ and $(c, d)$, and insert $(a + c, b + d)$ between them.

For a sequence $T$ consisting of integer pairs, let us define $f(T)$ as follows:

- let $f(T) =$ (the minimum number of operations required to make every element of $T$ contained in $A$).-   - We say that "every element of $T$ is contained in $A$" if, for all elements $x$ contained in $T$, $x$ is contained in (the set consisting of the elements contained in $A$).
- Here, if there are no such operations, let $f(T) = 0$.

There is a sequence $S = ((a_1, b_1), (a_2, b_2), \dots, (a_N, b_N))$ consisting of $N$ integer pairs.  Here, all elements of $S$ are pairwise distinct.<br>
There are $\frac{N \times (N+1)}{2}$ possible consecutive subarrays $S_{l,r}=((a_l,b_l),(a_{l+1},b_{l+1}),\dots,(a_r,b_r))$ of $S$.  Find the sum, modulo $998244353$, of $f(S_{l,r})$ over those subarrays.<br>
Formally, find $\displaystyle \sum^{N} _ {l=1} \sum^{N} _ {r=l} f(S_{l,r})$, modulo $998244353$.

## Constraints

- $1 \le N \le 10^5$
- $0 \le a_i,b_i \le 10^9$
- $a_i \neq a_j$ or $b_i \neq b_j$, if $i \neq j$.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $a_1$ $b_1$
> 
> $a_2$ $b_2$
> 
> $\dots$
> 
> $a_N$ $b_N$

## Output

Print the answer as an integer.

```input1
7
1 2
3 7
3 5
0 0
1000000000 1
0 1
6 3
```

```output1
3511324
```

- $f(S_{1,1})=2$.-   - We can make $((0,1),(1,0)) \rightarrow ((0,1),(1,1),(1,0)) \rightarrow ((0,1),(1,2),(1,1),(1,0))$.
- $f(S_{1,2})=5$.
- $f(S_{1,3})=7$.
- $f(S_{2,2})=5$.
- $f(S_{2,3})=7$.
- $f(S_{3,3})=4$.
- $f(S_{5,5})=1000000000 = 10^9$.
- $f(S_{5,6})=1000000000 = 10^9$.
- $f(S_{6,6})=0$.-   - $(0, 1)$ is originally contained in $A$.
- $f(S_{l,r})=0$ for all $S_{l,r}$ not mentioned above.-   - We can prove that $A$ can never contain $(0,0)$ or $(6,3)$ regardless of operations.

Therefore, the sum of $f(S_{l,r})$ is $2000000030 = 2 \times 10^9 + 30$, whose remainder when divided by $998244353$ is $3511324$.