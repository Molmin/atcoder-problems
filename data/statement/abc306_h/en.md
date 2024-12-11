Score : $650$ points

## Problem Statement

There are $N$ weights numbered $1,2, \dots,N$.<br>
Using a balance, we will compare weights $M$ times.

- Before the comparisons, prepare an empty string $S$.
- For the $i$-th comparison, put just weight $A_i$ to the left bowl, and just weight $B_i$ to the right.
- Then, one of the following three results is obtained.-   - If weight $A_i$ is heavier than weight $B_i$,-   -   - append `&amp;amp;amp;gt;` to the tail of $S$.
-   - If weight $A_i$ and weight $B_i$ have the same mass,-   -   - append `=` to the tail of $S$.
-   - If weight $A_i$ is lighter than weight $B_i$,-   -   - append `&amp;amp;amp;lt;` to the tail of $S$.
- The result is always accurate.

After the experiment, you will obtain a string $S$ of length $M$.<br>
Among the $3^M$ strings of length $M$ consisting of `&amp;gt;`, `=`, and `&amp;lt;`, how many can be obtained as $S$ by the experiment?<br>
Since the answer can be enormous, print the answer modulo $998244353$.

## Constraints

- All input values are integers.
- $2 \le N \le 17$
- $1 \le M \le \frac{N \times (N-1)}{2}$
- $1 \le A_i &lt; B_i \le N$
- $i \neq j \Rightarrow (A_i,B_i) \neq (A_j,B_j)$

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $B_1$
> 
> $A_2$ $B_2$
> 
> $\vdots$
> 
> $A_M$ $B_M$

## Output

Print the answer as an integer.

```input1
3 3
1 2
1 3
2 3
```

```output1
13
```

Let $w$ be the sequence of the mass of the weights, in ascending order of weight numbers.

- If $w=(5,5,5)$, you obtain $S=$ `===`.
- If $w=(2,2,3)$, you obtain $S=$ `=&amp;lt;&amp;lt;`.
- If $w=(6,8,6)$, you obtain $S=$ `&amp;lt;=&amp;gt;`.
- If $w=(9,4,4)$, you obtain $S=$ `&amp;gt;&amp;gt;=`.
- If $w=(7,7,3)$, you obtain $S=$ `=&amp;gt;&amp;gt;`.
- If $w=(8,1,8)$, you obtain $S=$ `&amp;gt;=&amp;lt;`.
- If $w=(5,8,8)$, you obtain $S=$ `&amp;lt;&amp;lt;=`.
- If $w=(1,2,3)$, you obtain $S=$ `&amp;lt;&amp;lt;&amp;lt;`.
- If $w=(4,9,5)$, you obtain $S=$ `&amp;lt;&amp;lt;&amp;gt;`.
- If $w=(5,1,8)$, you obtain $S=$ `&amp;gt;&amp;lt;&amp;lt;`.
- If $w=(6,9,2)$, you obtain $S=$ `&amp;lt;&amp;gt;&amp;gt;`.
- If $w=(7,1,3)$, you obtain $S=$ `&amp;gt;&amp;gt;&amp;lt;`.
- If $w=(9,7,5)$, you obtain $S=$ `&amp;gt;&amp;gt;&amp;gt;`.

While there is an infinite number of possible sequences of the mass of the weights, $S$ is always one of the $13$ above.

```input2
4 4
1 4
2 3
1 3
3 4
```

```output2
39
```

```input3
14 15
1 2
1 3
2 4
2 5
2 6
4 8
5 6
6 8
7 8
9 10
9 12
9 13
10 11
11 12
11 13
```

```output3
1613763
```