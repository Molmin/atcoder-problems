Score: $700$ points

## Problem Statement

You are given integers $N$ and $K$. Consider a sequence $a=(a_1,a_2,\dots,a_K)$ of length $K$ that satisfies all of the following conditions:

- $a_i$ is an integer such that $1 \le a_i \le N$.
- All elements in $a$ are different.

Let us arrange all possible sequences $a$ in lexicographical order to form a "sequence of sequences" called the dictionary $s$.

Given a sequence $P$ that exists in the dictionary $s$, answer the following question for each integer $t=1,2,\dots,N$:

- Find the number, modulo $998244353$, of sequences $b$ that satisfy all of the following conditions:-   - The sequence $b$ exists in the dictionary $s$.
-   - The integer $t$ is contained in the sequence $b$.
-   - The sequence $b$ is lexicographically less than or equal to the sequence $P$.

 What is lexicographical order for sequences?
A sequence $A = (A_1, \ldots, A_{|A|})$ is **lexicographically strictly less** than $B = (B_1, \ldots, B_{|B|})$ if and only if 1. or 2. below is satisfied:

1. $|A|&lt;|B|$ and $(A_{1},\ldots,A_{|A|}) = (B_1,\ldots,B_{|A|})$.
2. There is an integer $1\leq i\leq \min\{|A|,|B|\}$ that satisfies both of the following:
1.    - $(A_{1},\ldots,A_{i-1}) = (B_1,\ldots,B_{i-1})$
2.    - $A_i &amp;lt; B_i$

## Constraints

- All input values are integers.
- $1 \le K \le N \le 3 \times 10^5$
- $P$ satisfies the condition in the problem statement.

## Input

The input is given from Standard Input in the following format:

> $N$ $K$
> 
> $P_1$ $P_2$ $\dots$ $P_K$

## Output

Print $N$ lines in total.<br>
The $i$-th line should contain the answer to the problem for $t=i$ as an integer.

```input1
4 2
3 2
```

```output1
5
5
4
2
```

In this input, $N=4,K=2$.<br>
Here, the dictionary $s$ is $((1,2),(1,3),(1,4),(2,1),(2,3),(2,4),(3,1),(3,2),(3,4),(4,1),(4,2),(4,3))$.

Among the sequences in the dictionary $s$ that are lexicographically less than or equal to $(3,2)$,

- five sequences contain $1$: $(1,2),(1,3),(1,4),(2,1),(3,1)$,
- five sequences contain $2$: $(1,2),(2,1),(2,3),(2,4),(3,2)$,
- four sequences contain $3$: $(1,3),(2,3),(3,1),(3,2)$,
- two sequences contain $4$: $(1,4),(2,4)$.

```input2
18 13
5 13 11 2 18 1 10 15 17 4 12 7 3
```

```output2
925879409
905921009
665544804
665544719
783035803
349952762
349952758
349952757
349952757
349921178
212092637
710350150
378895603
129113201
129111892
129098081
129096772
110181652
```