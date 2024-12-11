Score : $1000$ points

## Problem Statement

Yosupo loves query problems. He made the following problem:

**A Query Problem**

We have an integer sequence of length $N$: $a_1,\ldots,a_N$. Initially, $a_i = 0 (1 \leq i \leq N)$.
We also have a variable $ans$, which is initially $0$.
Here, you will be given $Q$ queries of the following forms:

- <p>Type 1:</p>
-   - &lt;p&gt;$t_i (=1)$ $l_i$ $r_i$ $v_i$&lt;/p&gt;
-   - &lt;p&gt;For each $j = l_i,\ldots,r_i$, $a_j := \min(a_j,v_i)$.&lt;/p&gt;
- <p>Type 2:</p>
-   - &lt;p&gt;$t_i (=2)$ $l_i$ $r_i$ $v_i$&lt;/p&gt;
-   - &lt;p&gt;For each $j = l_i,\ldots,r_i$, $a_j := \max(a_j,v_i)$.&lt;/p&gt;
- <p>Type 3:</p>
-   - &lt;p&gt;$t_i (=3)$ $l_i$ $r_i$&lt;/p&gt;
-   - &lt;p&gt;Compute $a_{l_i} + \ldots + a_{r_i}$ and add the result to $ans$.&lt;/p&gt;

Print the final value of $ans$.

Here, for each query, $1$ $\leq$ $l_i$ $\leq$ $r_i$ $\leq$ $N$ holds. Additionally, for Type 1 and 2, $0$ $\leq$ $v_i$ $\leq$ $M-1$ holds.

Maroon saw this problem, thought it was too easy, and came up with the following problem:

**Query Problems**

Given are positive integers $N,M,Q$. There are $( \frac{(N+1)N}{2} \cdot (M+M+1) )^Q$ valid inputs for "A Query Problem". Find the sum of outputs over all those inputs, modulo $998{,}244{,}353$.

Find it.

## Constraints

- $1 \leq N,M,Q \leq 200000$
- All numbers in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$ $Q$

## Output

Print the answer.

```input1
1 2 2
```

```output1
1
```

There are $25$ valid inputs, and just one of them - shown below - results in a positive value of $ans$.

$t_1 = 2, l_1 = 1, r_1 = 1, v_1 = 1, t_2 = 3, l_2 = 1, r_2 = 1$

$ans$ will be $1$ in this case, so the answer is $1$.

```input2
3 1 4
```

```output2
0
```

```input3
111 112 113
```

```output3
451848306
```