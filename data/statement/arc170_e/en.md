Score: $800$ points

## Problem Statement

You are given integers $N$ and $P$.

There is a graph with $N$ vertices and $N$ edges, where each vertex is labeled $1$ to $N$. The $i$-th edge connects vertices $i$ and $i+1$ bidirectionally. Here, vertex $N+1$ refers to vertex $1$.

Perform the following algorithm to obtain a sequence $D=(D_1,D_2,\ldots,D_N)$ of length $N$:

- <p>Set an integer sequence $D$ of length $N$ to $D=(D_1,\ldots,D_N)=(-1,\ldots,-1)$. Also, set a sequence $Q$ of number pairs to $Q=((1,0))$. Repeat the following process while $Q$ is not empty:</p>
-   - Let $(v,d)$ be the first element of $Q$. Remove this element.
-   - &lt;p&gt;If $D_v = -1$, then set $D_v := d$, and for each vertex $x$ adjacent to vertex $v$ such that $D_x=-1$, perform the following process. If there are multiple such $x$ that satisfy the condition, process them in ascending order of vertex number:&lt;/p&gt;
-   -   1. With probability $\frac{P}{100}$, add $(x,d+1)$ to the **front** of $Q$.
-   -   2. If $(x,d+1)$ was not added to the front of $Q$, add it to the **end** of $Q$.

Find the expected value of the sum of the elements of the final sequence $D$ obtained, modulo $998244353$.

Solve each of the $T$ test cases given.

    
        Definition of expected value $\text{mod } 998244353$
    
    It can be proved that the expected value to be found is always a rational number.
Furthermore, the constraints of this problem guarantee that if that value is expressed as an irreducible fraction $\frac{P}{Q}$, then $Q$ is not divisible by $998244353$.  
Here, there is a unique integer $R$ between $0$ and $998244352$, inclusive, such that $R\times Q \equiv P\pmod{998244353}$. Provide this $R$ as the answer.

## Constraints

- $1 \leq T \leq 10^4$
- $3 \leq N \leq 10^{18}$
- $1\leq P \leq 99$
- All input numbers are integers.

## Input

The input is given from Standard Input in the following format:

> $T$
> 
> $\mathrm{case}_1$
> 
> $\vdots$
> 
> $\mathrm{case}_T$

Each case is given in the following format:

> $N$ $P$

## Output

Print $T$ lines. The $i$-th line $(1 \leq i \leq T)$ should contain the answer for the $i$-th test case.

```input1
3
3 50
4 1
1000000000000000000 70
```

```output1
499122179
595552585
760296751
```

In the first test case, the algorithm may operate as follows:

- Initially, $D=(-1,-1,-1)$ and $Q=((1,0))$. Remove the first element $(1,0)$ from $Q$.
- $D_1 = -1$, so set $D_1 := 0$. The vertices $x$ adjacent to vertex $1$ such that $D_x= -1$ are $2$ and $3$.
- Add $(2,1)$ to the front of $Q$. Add $(3,1)$ to the end of $Q$. Now $Q=((2,1),(3,1))$.
- Remove the first element $(2,1)$ from $Q$.
- $D_2 = -1$, so set $D_2 := 1$. The vertex $x$ adjacent to vertex $2$ such that $D_x= -1$ is $3$.
- Add $(3,2)$ to the front of $Q$. Now $Q=((3,2),(3,1))$.
- Remove the first element $(3,2)$ from $Q$.
- $D_3 = -1$, so set $D_3 := 2$. There are no vertices $x$ adjacent to vertex $3$ such that $D_x= -1$, so do nothing.
- Remove the first element $(3,1)$ from $Q$.
- $D_3 =2$, so do nothing.
- $Q$ is now empty, so the process ends.

In this case, the final sequence obtained is $D=(0,1,2)$. The probability that the algorithm operates as described above is $\frac{1}{8}$, and the expected sum of the elements of $D$ is $\frac{5}{2}$.