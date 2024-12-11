Score: $650$ points

## Problem Statement

You are given a rooted tree with $N$ vertices numbered $1$ to $N$.<br>
Vertex $1$ is the root, and the parent of vertex $i$ $(2 \leq i \leq N)$ is vertex $p_i$ $(p_i &lt; i)$.<br>
Additionally, there is a sequence $A = (A_1, A_2, \dots, A_N)$.

The **hash value** of the rooted tree is calculated as follows:

- Define $f(n)$ $(1 \leq n \leq N)$ as follows in the order $n = N, N-1, \dots, 2, 1$.-   - If vertex $n$ is a leaf, $f(n) = A_n$.
-   - If vertex $n$ is not a leaf, $\displaystyle f(n) = A_n + \prod_{c \in C(n)} f(c)$, where $C(n)$ is the set of children of $n$.
- The hash value of the rooted tree is $f(1) \bmod{998244353}$.

Process $Q$ queries in the order they are given.<br>
Each query provides $v$ and $x$, so update $A_v$ to $x$ and then compute the hash value of the rooted tree.

## Constraints

- $2 \leq N \leq 2 \times 10^5$
- $1 \leq Q \leq 2 \times 10^5$
- $1 \leq p_i &lt; i$
- $0 \leq A_i &lt; 998244353$
- $1 \leq v \leq N$
- $0 \leq x &lt; 998244353$
- All input values are integers.

## Input

The input is given from Standard Input in the following format, where $\mathrm{query}_i$ represents the $i$-th query:

> $N$ $Q$ 
> 
> $p_2$ $p_3$ $\dots$ $p_N$
> 
> $A_1$ $A_2$ $\dots$ $A_N$
> 
> $\mathrm{query}_1$
> 
> $\mathrm{query}_2$
> 
> $\vdots$
> 
> $\mathrm{query}_Q$

Each query is given in the following format:

> $v$ $x$

## Output

Print $Q$ lines. The $i$-th line should contain the answer to the $i$-th query.

```input1
3 2
1 1
3 5 1
3 4
2 1
```

```output1
23
7
```

Initially, $A = (3, 5, 1)$.<br>
The first query is processed as follows:

- Update $A_3$ to $4$. Now $A = (3, 5, 4)$.
- The hash value of the rooted tree is calculated as follows to be $23$, which should be printed.-   - Vertex $3$ has no children. Thus, $f(3) = 4$.
-   - Vertex $2$ has no children. Thus, $f(2) = 5$.
-   - Vertex $1$ has children $2$ and $3$. Thus, $f(1) = 3 + 5 \times 4 = 23$.
-   - $f(1) \bmod{998244353} = 23$ is the hash value of the rooted tree.

The second query is processed as follows:

- Update $A_2$ to $1$. Now $A = (3, 1, 4)$.
- The hash value of the rooted tree is calculated as follows to be $7$:-   - Vertex $3$ has no children. Thus, $f(3) = 4$.
-   - Vertex $2$ has no children. Thus, $f(2) = 1$.
-   - Vertex $1$ has children $2$ and $3$. Thus, $f(1) = 3 + 1 \times 4 = 7$.
-   - $f(1) \bmod{998244353} = 7$ is the hash value of the rooted tree.

```input2
5 4
1 1 2 2
2 5 4 4 1
3 3
5 0
4 5
5 2
```

```output2
29
17
17
47
```

```input3
10 10
1 2 1 2 5 6 3 5 1
766294629 440423913 59187619 725560240 585990756 965580535 623321125 550925213 122410708 549392044
1 21524934
9 529970099
6 757265587
8 219853537
5 687675301
5 844033519
8 780395611
2 285523485
6 13801766
3 487663184
```

```output3
876873846
952166813
626349486
341294449
466546009
331098453
469507939
414882732
86695436
199797684
```